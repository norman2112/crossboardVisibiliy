---
title: List parent cards
public: true
repo: core-leankit-api
---
# GET /io/board/:boardId/parent-card
Get parent cards on a board.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|200|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113986361/parent-card \
  -H 'Authorization: Basic base64encodedauth='
```
### Example Successful Response
200 Success
```json
{
    "pageMeta": {
        "totalRecords": 1,
        "offset": 0,
        "limit": 200,
        "startRow": 1,
        "endRow": 1
    },
    "cards": [
        {
            "title": "Title for 10105790505",
            "index": 1,
            "laneId": "10106271134",
            "color": "#9AB6FD",
            "tags": [
                "Tag1"
            ],
            "size": 2,
            "priority": "high",
            "plannedStart": "2019-11-25",
            "plannedFinish": "2019-11-27",
            "actualStart": "2015-09-08T21:36:37Z",
            "actualFinish": null,
            "isDone": false,
            "movedOn": "2015-12-09T23:27:48.000Z",
            "updatedOn": "2019-11-26T21:33:32.000Z",
            "externalLinks": [
                {
                    "label": "LeanKit",
                    "url": "http://leankit.com/"
                }
            ],
            "customIconLabel": "Class of Service",
            "blockedStatus": {
                "isBlocked": false,
                "reason": null
            },
            "customIcon": null,
            "customHeader": {
                "value": "Sample Card",
                "header": "Sample Card",
                "url": null
            },
            "customId": {
                "value": "Sample Card",
                "prefix": null,
                "url": null
            },
            "taskBoardStats": null,
            "containingCardId": null,
            "cardType": {
                "id": "10100191335",
                "name": "CardType for 10100191335"
            },
            "subscriptionId": null,
            "parentCards": [],
            "assignedUsers": [],
            "connectedCardStats": {
                "startedCount": 2,
                "startedSize": 2,
                "notStartedCount": 0,
                "notStartedSize": 0,
                "completedCount": 1,
                "completedSize": 1,
                "blockedCount": 0,
                "totalCount": 3,
                "totalSize": 3,
                "plannedStart": null,
                "plannedFinish": null,
                "actualStart": "2019-11-26T16:43:34Z",
                "actualFinish": null,
                "pastDueCount": 0,
                "projectedLateCount": 0
            },
            "canView": true
        }
	]
}
```
