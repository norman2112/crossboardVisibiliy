---
title: Get board health card throughput data
public: false
repo: core-reporting-service
---
# GET /io/reporting/boardHealth/:boardId/throughput
Get recent card throughput data for a board. Data is bucketed by week, getting current week plus previous eight weeks.

Behind feature flag `enableBoardHealth`.

_Requires authentication with at least reader role on the board specified._

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`timeOffset`|integer|Time difference in minutes between UTC time and local time.|0|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/reporting/boardHealth/8675309/throughput?timeOffset=300 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
  "throughput": [ {
    "startOfWeekDate": "2018-11-11T00:00:00.000Z",
    "started": {
      "cardCount": 0,
      "cardSize": "0"
    },
    "completed": {
      "cardCount": 0,
      "cardSize": "0"
    }
  }, {
    "startOfWeekDate": "2018-11-18T00:00:00.000Z",
    "started": {
      "cardCount": 1,
      "cardSize": "1"
    },
    "completed": {
      "cardCount": 0,
      "cardSize": "0"
    }
  }, {
    "startOfWeekDate": "2018-11-25T00:00:00.000Z",
    "started": {
      "cardCount": 0,
      "cardSize": "0"
    },
    "completed": {
      "cardCount": 0,
      "cardSize": "0"
    }
  }, {
    "startOfWeekDate": "2018-12-02T00:00:00.000Z",
    "started": {
      "cardCount": 1,
      "cardSize": "5"
    },
    "completed": {
      "cardCount": 0,
      "cardSize": "0"
    }
  }, {
    "startOfWeekDate": "2018-12-09T00:00:00.000Z",
    "started": {
      "cardCount": 0,
      "cardSize": "0"
    },
    "completed": {
      "cardCount": 1,
      "cardSize": "1"
    }
  }, {
    "startOfWeekDate": "2018-12-16T00:00:00.000Z",
    "started": {
      "cardCount": 0,
      "cardSize": "0"
    },
    "completed": {
      "cardCount": 0,
      "cardSize": "0"
    }
  }, {
    "startOfWeekDate": "2018-12-23T00:00:00.000Z",
    "started": {
      "cardCount": 0,
      "cardSize": "0"
    },
    "completed": {
      "cardCount": 1,
      "cardSize": "5"
    }
  }, {
    "startOfWeekDate": "2018-12-30T00:00:00.000Z",
    "started": {
      "cardCount": 0,
      "cardSize": "0"
    },
    "completed": {
      "cardCount": 0,
      "cardSize": "0"
    }
  }, {
    "startOfWeekDate": "2019-01-06T00:00:00.000Z",
    "started": {
      "cardCount": 1,
      "cardSize": "1"
    },
    "completed": {
      "cardCount": 0,
      "cardSize": "0"
    }
  } ]
}
```

### Response Properties
|Property|Type|Note|
|--------|----|----|
|`throughput`|array of objects|current week plus previous eight weeks|
|`startOfWeekDate`|datetime|beginning of week|
|`started.cardCount`|integer|count of cards started during week|
|`started.cardSize`|string|sum of sizes of cards started during week|
|`completed.cardCount`|integer|count of cards completed during week|
|`completed.cardSize`|string|sum of sizes of cards completed during week|
