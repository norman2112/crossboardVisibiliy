---
title: Get a list of parent cards
public: true
repo: core-leankit-api
---
# GET /io/card/:cardId/connection/parents
Get a list of parent cards for a child card.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|200|
|`board`|string|Limit the results to the specified board||

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206826/connection/parents \
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
        "limit": 200,
        "startRow": 1,
        "endRow": 2
    },
    "cards": [
        {
            "id": "943206946",
            "title": "Card Three",
            "index": 0,
            "laneId": "943188474",
            "color": "#B8CFDF",
            "tags": [
                "tagone",
                "tagtwo"
            ],
            "size": 2,
            "priority": "high",
            "plannedStart": "2019-12-20",
            "plannedFinish": "2019-12-23",
            "actualStart": null,
            "actualFinish": null,
            "isDone": false,
            "movedOn": "2019-12-03T23:27:44.576Z",
            "updatedOn": "2019-12-04T20:38:33.000Z",
            "externalLinks": [
                {
                    "label": "Link Title",
                    "url": "https://www.leankit.com"
                }
            ],
            "customIconLabel": "Class of Service",
            "blockedStatus": {
                "isBlocked": true,
                "reason": "Blocked card reason"
            },
            "customIcon": {
                "id": "943188468",
                "cardColor": "#FFFFFF",
                "iconColor": "49bbd6",
                "iconName": "lk_icons_final_05-11",
                "iconPath": "../../customicons/24/49bbd6/lk_icons_final_05-11.png"
            },
            "customHeader": {
                "value": "The card header text",
                "header": "The card header text",
                "url": null
            },
            "customId": {
                "value": "The card header text",
                "prefix": null,
                "url": null
            },
            "taskBoardStats": {
                "totalCount": 2,
                "completedCount": 1,
                "totalSize": 2,
                "completedSize": 1
            },
            "containingCardId": null,
            "cardType": {
                "id": "943188463",
                "name": "New Feature"
            },
            "subscriptionId": "943850307",
            "parentCards": [],
            "assignedUsers": [
                {
                    "id": "478440842",
                    "fullName": "User Name",
                    "emailAddress": "user@leankit.com",
                    "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
                }
            ],
            "connectedCardStats": {
                "startedCount": 0,
                "startedSize": 0,
                "notStartedCount": 1,
                "notStartedSize": 1,
                "completedCount": 1,
                "completedSize": 2,
                "blockedCount": 1,
                "totalCount": 2,
                "totalSize": 3,
                "plannedStart": "2019-12-05",
                "plannedFinish": "2019-12-11",
                "actualStart": "2019-12-04T20:26:34Z",
                "actualFinish": null,
                "pastDueCount": 0,
                "projectedLateCount": 0
            },
            "canView": true
        },
        {
            "id": "943207144",
            "title": "Card Four",
            "index": 1,
            "laneId": "943188474",
            "color": "#B8CFDF",
            "tags": [],
            "size": 0,
            "priority": "normal",
            "plannedStart": null,
            "plannedFinish": null,
            "actualStart": null,
            "actualFinish": null,
            "isDone": false,
            "movedOn": "2019-12-03T23:27:51.543Z",
            "updatedOn": "2019-12-03T23:41:31.453Z",
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
            "containingCardId": null,
            "cardType": {
                "id": "943188463",
                "name": "New Feature"
            },
            "subscriptionId": null,
            "parentCards": [],
            "assignedUsers": [],
            "connectedCardStats": {
                "startedCount": 0,
                "startedSize": 0,
                "notStartedCount": 1,
                "notStartedSize": 1,
                "completedCount": 1,
                "completedSize": 2,
                "blockedCount": 1,
                "totalCount": 2,
                "totalSize": 3,
                "plannedStart": "2019-12-05",
                "plannedFinish": "2019-12-11",
                "actualStart": "2019-12-04T20:26:34Z",
                "actualFinish": null,
                "pastDueCount": 0,
                "projectedLateCount": 0
            },
            "canView": true
        }
    ]
}
