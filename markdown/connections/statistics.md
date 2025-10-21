---
title: Get drill through statistics for child boards
public: true
repo: core-leankit-api
---
# GET /io/card/:cardId/statistics
Get drill through statistics for child boards.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206946/statistics \
  -H 'Authorization: Basic base64encodedauthhere' \
  -H 'Content-Type: application/json'
```

### Example Successful Response
200 OK
```json
{
    "card": {
        "id": "943206946",
        "isBlocked": true,
        "size": 2,
        "plannedStart": "2019-12-20T00:00:00.000Z",
        "plannedFinish": "2019-12-23T00:00:00.000Z",
        "actualStart": null,
        "actualFinish": null
    },
    "drillThroughStats": {
        "startedCount": 0,
        "startedSize": 0,
        "notStartedCount": 2,
        "notStartedSize": 2,
        "completedCount": 1,
        "completedSize": 2,
        "blockedCount": 1,
        "plannedStart": "2019-12-05T00:00:00.000Z",
        "plannedFinish": "2019-12-11T00:00:00.000Z",
        "actualStart": "2019-12-04T20:26:34.380Z",
        "actualFinish": "2019-12-04T20:26:34.380Z",
        "pastDueCount": 0,
        "projectedLateCount": 0,
        "size": 4,
        "count": 3,
        "hasCardProjectedLate": false,
        "progress": 50
    },
    "boards": [
        {
            "boardId": "943188457",
            "cardStats": {
                "startedCount": 0,
                "startedSize": 0,
                "notStartedCount": 1,
                "notStartedSize": 1,
                "completedCount": 1,
                "completedSize": 2,
                "blockedCount": 1,
                "plannedStart": "2019-12-05T00:00:00.000Z",
                "plannedFinish": "2019-12-11T00:00:00.000Z",
                "actualStart": "2019-12-04T20:26:34.380Z",
                "actualFinish": "2019-12-04T20:26:34.380Z",
                "pastDueCount": 0,
                "projectedLateCount": 0,
                "size": 3,
                "count": 2,
                "hasCardProjectedLate": false,
                "progress": 66.66666666666666
            }
        },
        {
            "boardId": "943929912",
            "cardStats": {
                "startedCount": 0,
                "startedSize": 0,
                "notStartedCount": 1,
                "notStartedSize": 1,
                "completedCount": 0,
                "completedSize": 0,
                "blockedCount": 0,
                "plannedStart": null,
                "plannedFinish": null,
                "actualStart": null,
                "actualFinish": null,
                "pastDueCount": 0,
                "projectedLateCount": 0,
                "size": 1,
                "count": 1,
                "hasCardProjectedLate": false,
                "progress": 0
            }
        }
    ]
}
```
