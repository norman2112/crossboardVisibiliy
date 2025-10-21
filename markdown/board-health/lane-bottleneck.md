---
title: Get board health lane bottleneck data
public: false
repo: core-reporting-service
---
# GET /io/reporting/boardHealth/:boardId/laneBottleneck
Get recent bottlenecked lane data for a board.

A bottlenecked lane here is any lane with card count or size in/out delta greater than 1 over the past 7 days. Excludes archive lanes, lanes on task boards, and ConnectedDoneFlag lanes.

Behind feature flag `enableBoardHealth`.

_Requires authentication with at least reader role on the board specified._

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`timeOffset`|integer|Time difference in minutes between UTC time and local time.|0|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/reporting/boardHealth/8675309/laneBottleneck?timeOffset=300 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
  "lanes": [ {
    "laneId": "9021060652",
    "in": {
      "cardCount": 3,
      "cardSize": "6"
    },
    "out": {
      "cardCount": 2,
      "cardSize": "5"
    }
  } ]
}
```

### Response Properties
|Property|Type|Note|
|--------|----|----|
|`lanes`|array of objects|bottlenecked lanes|
|`laneId`|string id||
|`in.cardCount`|integer|count of cards that entered lane|
|`in.cardSize`|string|sum of sizes of cards that entered lane|
|`out.cardCount`|integer|count of cards that exited lane|
|`out.cardSize`|string|sum of sizes of cards that exited lane|
