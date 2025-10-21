---
title: Get a list of task cards for a card
public: true
repo: core-leankit-api
---
# GET /io/card/:cardId/tasks
Get a list of task cards for a card.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|20|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/945202295/tasks \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "pageMeta": {
        "totalRecords": 2,
        "offset": 0,
        "limit": 200,
        "startRow": 1,
        "endRow": 2
    },
    "cards": [
        {
            "id": "945233520",
            "title": "task one",
            "index": 0,
            "laneId": "945233517",
            "color": "#FFF8DF",
            "tags": [],
            "size": 0,
            "priority": "normal",
            "plannedStart": null,
            "plannedFinish": null,
            "actualStart": null,
            "actualFinish": null,
            "isDone": false,
            "movedOn": "2019-12-06T20:11:03.013Z",
            "updatedOn": "2019-12-06T20:11:03.013Z",
            "externalLinks": [],
            "customIconLabel": "Class of Service",
            "blockedStatus": {
                "isBlocked": false,
                "reason": null
            },
            "customIcon": null,
            "customHeader": {
                "value": null,
                "header": null,
                "url": null
            },
            "customId": {
                "value": null,
                "prefix": null,
                "url": null
            },
            "taskBoardStats": null,
            "containingCardId": "945202295",
            "cardType": {
                "id": "944576316",
                "name": "Subtask"
            },
            "subscriptionId": null,
            "parentCards": [],
            "assignedUsers": [],
            "connectedCardStats": null,
            "canView": true
        },
        {
            "id": "945237610",
            "title": "task two",
            "index": 0,
            "laneId": "945233519",
            "color": "#FFF8DF",
            "tags": [
                "tagone",
                "tagtwo"
            ],
            "size": 2,
            "priority": "critical",
            "plannedStart": "2019-12-03",
            "plannedFinish": "2019-12-21",
            "actualStart": "2019-12-06T20:11:17Z",
            "actualFinish": "2019-12-06T20:11:17Z",
            "isDone": true,
            "movedOn": "2019-12-06T20:11:17.510Z",
            "updatedOn": "2019-12-06T20:12:27.000Z",
            "externalLinks": [
                {
                    "label": "External Link Title",
                    "url": "http://www.leankit.com"
                }
            ],
            "customIconLabel": "Class of Service",
            "blockedStatus": {
                "isBlocked": true,
                "reason": "This task is blocked"
            },
            "customIcon": null,
            "customHeader": {
                "value": "This is a task header",
                "header": "This is a task header",
                "url": null
            },
            "customId": {
                "value": "This is a task header",
                "prefix": null,
                "url": null
            },
            "taskBoardStats": null,
            "containingCardId": "945202295",
            "cardType": {
                "id": "944576316",
                "name": "Subtask"
            },
            "subscriptionId": "945194554",
            "parentCards": [],
            "assignedUsers": [
                {
                    "id": "478440842",
                    "fullName": "First Last",
                    "avatar": "https://myaccount.leankit.com/avatar/show/478440842/?s=25",
                    "emailAddress": "user@leankit.com"
                }
            ],
            "connectedCardStats": null,
            "canView": true
        }
    ]
}
```
