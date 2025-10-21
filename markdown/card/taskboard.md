---
title: Get taskboard lanes for a card
public: true
repo: core-leankit-api
---
# GET /io/card/:cardId/taskboard
Get taskboard lanes for a card.


### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206946/taskboard \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "lanes": [
        {
            "id": "945233517",
            "name": "ToDo",
            "description": null,
            "cardLimit": 0,
            "creationDate": "2019-12-06T20:11:02.993Z",
            "index": 0,
            "boardId": "944576308",
            "parentLaneId": null,
            "activityId": null,
            "orientation": "vertical",
            "columns": 2,
            "cardCount": 1,
            "cardSize": 1,
            "laneClassType": "active",
            "laneType": "ready",
            "cardStatus": "notStarted",
            "wipLimit": 0,
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "isCollapsed": false,
            "archiveCardCount": 0,
            "subscriptionId": null
        },
        {
            "id": "945233518",
            "name": "Doing",
            "description": null,
            "cardLimit": 0,
            "creationDate": "2019-12-06T20:11:02.993Z",
            "index": 1,
            "boardId": "944576308",
            "parentLaneId": null,
            "activityId": null,
            "orientation": "vertical",
            "columns": 1,
            "cardCount": 0,
            "cardSize": 0,
            "laneClassType": "active",
            "laneType": "inProcess",
            "cardStatus": "started",
            "wipLimit": 0,
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "isCollapsed": false,
            "archiveCardCount": 0,
            "subscriptionId": null
        },
        {
            "id": "945233519",
            "name": "Done",
            "description": null,
            "cardLimit": 0,
            "creationDate": "2019-12-06T20:11:02.993Z",
            "index": 2,
            "boardId": "944576308",
            "parentLaneId": null,
            "activityId": null,
            "orientation": "vertical",
            "columns": 2,
            "cardCount": 1,
            "cardSize": 2,
            "laneClassType": "active",
            "laneType": "completed",
            "cardStatus": "finished",
            "wipLimit": 0,
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "isCollapsed": false,
            "archiveCardCount": 0,
            "subscriptionId": null
        }
    ]
}
```
