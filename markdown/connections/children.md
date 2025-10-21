---
title: Get a list of child cards
public: true
repo: core-leankit-api
---
# GET /io/card/:cardId/connection/children
Get a list of child cards for a parent card.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|25|
|`boardId`|string|Limit the results to the specified board||
|`cardStatus`|enumeration|Comma separated list with one or more values. Options are: <br /> `notStarted` <br /> `started` <br /> `finished`|notStarted, started, finished|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206946/connection/children?cardStatus=notStarted,started,finished \
  -H 'Authorization: Basic base64encodedauthhere' \
  -H 'Content-Type: application/json'
```

### Example Successful Response
200 OK
```json
{
    "pageMeta": {
        "totalRecords": 2,
        "offset": 0,
        "limit": 25,
        "startRow": 1,
        "endRow": 2
    },
    "cards": [
        {
            "assignedUsers": [
                {
                    "id": "478440842",
                    "fullName": "User Name",
                    "emailAddress": "user@leankit.com",
                    "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
                }
            ],
            "actualFinish": "2019-12-04T20:26:34Z",
            "actualStart": "2019-12-04T20:26:34Z",
            "blockedStatus": {
                "isBlocked": true,
                "reason": "The block reason",
                "date": "2019-12-04T20:27:45Z"
            },
            "board": {
                "id": "943188457",
                "title": "Example board",
                "version": "41",
                "isArchived": false
            },
            "customIcon": {
                "id": "943188467",
                "title": "Expedite",
                "cardColor": "#FFFFFF",
                "iconColor": "e35027",
                "iconName": "lk_icons_final_01-03",
                "iconPath": "https://myaccount.leankit.com/customicons/24/e35027/lk_icons_final_01-03.png"
            },
            "customIconLabel": "Class of Service",
            "color": "#B8CFDF",
            "iconPath": null,
            "createdOn": "2019-12-03T23:15:44Z",
            "archivedOn": null,
            "description": "<p>The description of the card</p>",
            "plannedFinish": "2019-12-11",
            "customHeader": {
                "value": "The card header",
                "header": "The card header",
                "url": null
            },
            "customId": {
                "value": "The card header",
                "prefix": null,
                "url": null
            },
            "externalLinks": [
                {
                    "label": "Link Title",
                    "url": "https://www.leankit.com"
                }
            ],
            "id": "943206826",
            "index": 0,
            "lane": {
                "cardLimit": 0,
                "description": null,
                "id": "943188473",
                "index": 3,
                "laneClassType": "active",
                "laneType": "completed",
                "orientation": "vertical",
                "title": "Recently Finished"
            },
            "isDone": true,
            "updatedOn": "2019-12-04T20:26:34Z",
            "movedOn": "2019-12-04T20:26:34Z",
            "priority": "normal",
            "size": 2,
            "plannedStart": "2019-12-05",
            "tags": [
                "tagone",
                "tagtwo"
            ],
            "title": "Card One",
            "version": "10",
            "type": {
                "id": "943188463",
                "title": "New Feature",
                "cardColor": "#B8CFDF"
            },
            "taskBoardStats": null,
            "connectedCardStats": null
        },
        {
            "assignedUsers": [],
            "actualFinish": null,
            "actualStart": null,
            "blockedStatus": {
                "isBlocked": false,
                "reason": null,
                "date": null
            },
            "board": {
                "id": "943188457",
                "title": "Example board",
                "version": "41",
                "isArchived": false
            },
            "customIcon": null,
            "customIconLabel": "Class of Service",
            "color": "#B8CFDF",
            "iconPath": null,
            "createdOn": "2019-12-03T23:15:55Z",
            "archivedOn": null,
            "description": null,
            "plannedFinish": null,
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
            "externalLinks": [],
            "id": "943204705",
            "index": 0,
            "lane": {
                "cardLimit": 0,
                "description": null,
                "id": "943188475",
                "index": 0,
                "laneClassType": "backlog",
                "laneType": "ready",
                "orientation": "vertical",
                "title": "New Requests"
            },
            "isDone": false,
            "updatedOn": "2019-12-03T23:41:31Z",
            "movedOn": "2019-12-03T23:15:55Z",
            "priority": "normal",
            "size": 0,
            "plannedStart": null,
            "tags": [],
            "title": "Card Two",
            "version": "9",
            "type": {
                "id": "943188463",
                "title": "New Feature",
                "cardColor": "#B8CFDF"
            },
            "taskBoardStats": {
                "totalCount": 2,
                "completedCount": 1,
                "totalSize": 2,
                "completedSize": 1
            },
            "connectedCardStats": null
        }
    ],
    "redactedCount": 0
}
