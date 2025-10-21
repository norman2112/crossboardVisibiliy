---
title: Get board health work-in-process data
public: false
repo: core-reporting-service
---
# GET /io/reporting/boardHealth/:boardId/wip
Get recent work-in-process data for a board. Data is bucketed by week, getting current week plus previous eight weeks.

Behind feature flag `enableBoardHealth`.

_Requires authentication with at least reader role on the board specified._

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`timeOffset`|integer|Time difference in minutes between UTC time and local time.|0|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/reporting/boardHealth/8675309/wip?timeOffset=300 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
  "workInProcess": [ {
    "startOfWeekDate": "2018-11-11T00:00:00.000Z",
    "wip": {
      "cardCount": 0,
      "cardSize": "0"
    }
  }, {
    "startOfWeekDate": "2018-11-18T00:00:00.000Z",
    "wip": {
      "cardCount": 1,
      "cardSize": "1"
    }
  }, {
    "startOfWeekDate": "2018-11-25T00:00:00.000Z",
    "wip": {
      "cardCount": 1,
      "cardSize": "1"
    }
  }, {
    "startOfWeekDate": "2018-12-02T00:00:00.000Z",
    "wip": {
      "cardCount": 2,
      "cardSize": "6"
    }
  }, {
    "startOfWeekDate": "2018-12-09T00:00:00.000Z",
    "wip": {
      "cardCount": 2,
      "cardSize": "6"
    }
  }, {
    "startOfWeekDate": "2018-12-16T00:00:00.000Z",
    "wip": {
      "cardCount": 1,
      "cardSize": "5"
    }
  }, {
    "startOfWeekDate": "2018-12-23T00:00:00.000Z",
    "wip": {
      "cardCount": 1,
      "cardSize": "5"
    }
  }, {
    "startOfWeekDate": "2018-12-30T00:00:00.000Z",
    "wip": {
      "cardCount": 0,
      "cardSize": "0"
    }
  }, {
    "startOfWeekDate": "2019-01-06T00:00:00.000Z",
    "wip": {
      "cardCount": 1,
      "cardSize": "1"
    }
  } ]
}
```

### Response Properties
|Property|Type|Note|
|--------|----|----|
|`workInProcess`|array of objects|current week plus previous eight weeks|
|`startOfWeekDate`|datetime|beginning of week|
|`wip.cardCount`|integer|count of cards in process during week|
|`wip.cardSize`|string|sum of sizes of cards in process during week|
