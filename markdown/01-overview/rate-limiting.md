---
title: Rate Limiting
public: true
repo: none
---
## Overview
Being able to extend your daily LeanKit Board use into custom automations, integrations and more with the LeanKit API opens up a whole world of possibilities. People are using our API for everything from managing software deployments to custom business reporting solutions. While most of our API use has limited impact on the rest of our systems, occasionally a bug in an integration or a misunderstanding about our APIs leads to excessive API usage. Rate limiting has been put in place to provide generous access to our API while still protecting the integrity of our systems.

### Who is limited?
The API rate limit is per authenticated user and is shared among all of their api tokens and authentication methods. Hitting the API rate limit will not prevent the user from using the web interface to access their LeanKit boards.

### What are the limits?
We maintain the ability to adjust the rates as needed for the health of the system. Due to this fact, instead of planning for a specific rate of requests your code should inspect the HTTP headers we add to each response so you know when you are approaching your limit.

These headers are added to each response:
* `X-RateLimit-Limit` – The total number of points you can use per time window. The current time window is 60 seconds from your first request. If you observe a header with a value of `120` for instance, you can make calls worth 120 points in a 60 second window. Most requests consume `1` point per request, though others may consume more points per request if the route is computationally expensive.
* `X-RateLimit-Remaining` – The number of points remaining in this time window.
* `X-RateLimit-Reset` – This is a Unix Timestamp that tells you exactly when this rate limiting window ends. The formula you'll want to use is: `X-RateLimit-Reset - Current Time = Remaining Time`. Once you have this time, you can divide the `X-RateLimit-Remaining` by `Remaining Time` and see how fast you can make requests without exceeding your limits.

There is one additional header that is returned only on `429 Too Many Requests` responses when you have trigged the rate limiting:
* `Retry-After` – This will give you a date formatted like this: `Fri, 12 Mar 2021 14:21:09 GMT`. If you receive a `429` you should use either this header or `X-RateLimit-Reset` to set a timer and _not_ make any further requests until that time has been reached. You can read more about this header in the [HTTP RFC](https://tools.ietf.org/html/rfc7231#section-7.1.3) or on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After).

## Recommended Approach
While advanced users may be able to fully leverage the headers from the previous section, most of this can be avoided if you follow the guidelines in the next section which includes handling a `429` in the event you hit the limits.

### Tips for responsible integrations
Computers can execute calls against our system much faster than humans. While it may be tempting to execute 20 requests in parallel, this is good way to quickly consume the limits. Here are a few tips for creating a responsible integration:

* **Execute a limited number of requests in parallel.** If you make requests one after another, the natural delay while data is returned will help spread out your API requests.
* **Cache the data returned where you can.** If you need to look up a lane ID using its label, store the response and reuse the ID for subsequent calls instead of asking for it each time your script runs.
* **Work with a set of changes instead of polling.** Instead of polling the API for the full contents of every card you are interested in, use the `since` param on our [Card List endpoint](/markdown/card/list.md) to ask only for cards that have changed since you last fetched them.
* **Properly handle 429 Too Many Requests responses.** In the event your script runs too fast, be prepared for a `429` HTTP response for a request and retry it once the specified time has elapsed.

### Code Example

This example uses JavaScript and the popular `axios` request client for node. It leverages each of the techniques except caching from the list of tips. This uses both the [Card List](/markdown/card/list.md) and [Card Get](/markdown/card/get.md) endpoints

_Technical note: This example requires at least Node 14 and `"type": "module"` to be set in the `package.json`._

```js
import axios from "axios";

const LEANKIT_DOMAIN = "YOURDOMAIN.leankit.com";

/* Set up axios instance with headers and base url already filled in */
const axiosInstance = axios.create( {
    baseURL: `https://${ LEANKIT_DOMAIN }/`,
    timeout: 1000,
    headers: {
        Authorization: `Bearer ${ process.env.LEANKIT_API_TOKEN }`,
        Accept: "application/json"
    }
} );

const TOO_MANY_REQUESTS = 429;
async function makeRequest( ...props ) {
    try {
        console.log( "Making request", ...props );
        const response = await axiosInstance( ...props );
        return response.data;
    } catch (error) {
        /* Detect the 429 response */
        if ( error?.response?.status === TOO_MANY_REQUESTS ) {
            /* Convert the Retry-After header to a date.
               Note: axios makes all headers lower case so that is why we use "retry-after" */
            const retryAfter = new Date( error.response.headers[ "retry-after" ] );
            const timeoutInMs = retryAfter - Date.now();

            /* Wait the specified amount before making the next call */
            console.log( `Received a 429 response, waiting ${ ( timeoutInMs / 1000 ).toPrecision( 2 ) } seconds before continuing…` )
            await new Promise( res => setTimeout( res, timeoutInMs ) );

            return makeRequest( ...props );
        }

        /* Add other error handling here as needed */
        throw error;
    }
}

async function main( { boardId, since }) {
    /* Get a list of card ids that have changed */
    const { cards } = await makeRequest({
        method: "get",
        url: "/io/card",
        params: {
            board: boardId,
            only: "id",
            since: since.toISOString()
        }
    } );

    const fullCards = [];

    /* Ask for each card one at a time */
    for (const { id } of cards ) {
        const card = await makeRequest( {
            method: "get",
            url: `/io/card/${ id }`
        } );
        fullCards.push( card );
    }

    /* ... do something with these cards */
}

main( {
    /* Target Board Id */
    boardId: "000000000",

    /* Changes for the past week */
    since: new Date( new Date() - 7 )
} ).catch( console.error );
```

