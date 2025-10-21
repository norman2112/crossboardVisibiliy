---
title: Core Concepts
public: true
repo: none
---
## Overview
Our RESTful API allows you to programmatically leverage the power of LeanKit. All APIs use https and are based at `https://<yourhostname>.leankit.com/io/`. Our APIs use standard http authentication, response codes, and verbs. Data is sent and received as JSON unless specified otherwise.

## APIs and Versioning
New endpoints that may have a higher chance of change should be labeled with a 'preview' flag. Our [legacy API](https://success.planview.com/Planview_LeanKit/API/Application_API_-_v1) has been marked for deprecation. We do not suggest using the legacy endpoints unless you need functionality that does not exist in the current version.

Reporting data is available using our [reporting API](https://success.planview.com/Planview_LeanKit/Reporting/Advanced_Reporting_API_Endpoints) endpoints. Please be aware that data retrieved through these APIs is not real-time and may be 24 hours out of date.

Our [user provisioning API](https://success.planview.com/Planview_LeanKit/API/User_Provisioning_API) implements SCIM 1.1.

## Authentication
Two forms of authentication are supported: basic and bearer.

### Basic
The username and password are base64-encoded and appended to the header of each HTTP request with [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).
```
curl -H 'Authorization: Basic base64encodedcredentialshere' https://myaccount.leankit.com/io/user/me
```
### Bearer Token

Basic authentication can be used to make a POST request to retrieve a token. That token is used for authentication in subsequent requests.

> __Create and manage your tokens by choosing the "My API Tokens" tab in your LeanKit User Profile.__

Tokens can also be created using API calls. Example token request:
```
curl -X POST \
  https://myaccount.leankit.com/io/auth/token \
  -H 'Authorization: Basic base64encodedcredentialshere' \
  -H 'Content-Type: application/json' \
  -d '{ "description": "description for your app" }'
```

Example response body:
```
{
    "id": "12345678",
    "token": "longstringwiththetokenhere",
    "description": "description for your app",
    "createdOn": "2019-12-24T22:42:40.755Z"
}
```

Subsequent requests would include an Authorization header with the token:
```
curl -H 'Authorization: Bearer yourtokenhere' https://myaccount.leankit.com/io/user/me
```

Additional information can be found in the [token management operations](/markdown/token-auth/list.md) documentation.

_Note: Tokens do not have an expiration date. Regularly revoke tokens that you are not actively using._

## HTTP Method Override Header
Our api uses a number of HTTP methods in addition to the more common `GET` and `POST` requests. The documentation for each endpoint shows which methods should be used. However, if you are using software that limits or excludes `PUT`, `PATCH`, and `DELETE`, we offer a work around. You can instead make a `POST` request with the `X-HTTP-Method-Override` header set to the desired method.

For example, to delete a card directly with `DELETE`:

```
curl -X DELETE \
  https://myaccount.leankit.com/io/card/1234 \
  -H 'Authorization: Bearer yourtokenhere'
```

Here is the same request using the override header and a `POST` method (The `-d ''` is just an empty body):

```
curl -X POST \
  https://myaccount.leankit.com/io/card/1234 \
  -H 'Authorization: Bearer yourtokenhere' \
  -H 'X-HTTP-Method-Override: DELETE' \
  -d ''
```

## Parameters and Headers
For POST, PATCH, PUT, and DELETE requests, parameters not included in the URL should be encoded as JSON with a `Content-Type: application/json`.

`Accept: application/json` header should be sent unless specified otherwise.

## Date Format
Dates in the API use UTC and are strings in the ISO 8601 format:
`2019-12-24T13:29:31Z`

## Common Responses and Errors
Http response codes represent success or error. Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate that some information provided was incorrect. An example would be a `422` response code if you failed to specify a list of card ids when they are required. `5xx` level errors indicate a problem on the LeanKit server side.

## Paging
Many of our list endpoints support paging. The `limit` parameter controls the number of records returned. The `offset` parameter controls the number of records to skip before returning results. The response also includes page metadata to indicate how many records there are in total.
```json
    "pageMeta": {
        "totalRecords": 372,
        "offset": 0,
        "limit": 25,
        "startRow": 1,
        "endRow": 25
    },
```

## Rate Limiting
While most of our API use has limited impact on the rest of our systems, occasionally a bug in an integration or a misunderstanding about our APIs leads to excessive API usage. Rate limiting has been put in place to provide generous access to our API while still protecting the integrity of our systems. Please take time to [read about rate limiting](/markdown/01-overview/rate-limiting.md) before you start using the API.
