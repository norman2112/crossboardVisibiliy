---
public: true
title: Get the requesting user's assigned or subscribed cards
repo: core-account-service
---
# GET /io/user/me/card
Returns cards to which that the requesting user is either assigned or subscribed.

### Example Request
```
curl -X GET \
  https://myaccount.leankit.com/io/user/me/card' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer||0|
|`limit`|integer||200|
|`cardStatus`|string|Only return cards with statuses specified in a csv list. Options are<br />`started`<br />`notStarted`<br />`finished`||
|`type`|enumeration|`assigned`<br />`subscribed`||
|`sort`|enumeration|`title`<br />`priority`<br />`plannedStart`<br />`plannedFinish`||
|`showBlockedFirst`|boolean|||
|`filter`|string|Only return items specified in a csv list. Options are<br />`card`<br />`task`||

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
            "id": "818214152",
            "title": "test card one",
            "index": 0,
            "laneId": "814278956",
            "color": "#B8CFDF",
            "tags": [],
            "size": 0,
            "priority": "normal",
            "plannedStart": null,
            "plannedFinish": null,
            "actualStart": "2019-03-29T20:57:11Z",
            "actualFinish": null,
            "isDone": false,
            "movedOn": "2019-03-29T20:57:11.013Z",
            "updatedOn": "2020-01-24T22:20:00.000Z",
            "externalLinks": [],
            "customIconLabel": "Class of Service",
            "blockedStatus": {
                "isBlocked": false,
                "reason": null,
                "date": null
            },
            "customIcon": {
                "id": "814278952",
                "title": "Regulatory",
                "cardColor": "#FFFFFF",
                "iconColor": "49bbd6",
                "iconName": "lk_icons_final_05-11",
                "iconPath": "https://myaccount.leankit.com/customicons/24/49bbd6/lk_icons_final_05-11.png"
            },
            "customHeader": {
                "value": null,
                "header": null,
                "url": null
            },
            "taskBoardStats": null,
            "containingCardId": null,
            "cardType": {
                "id": "814278947",
                "name": "New Feature"
            },
            "subscriptionId": "966024831",
            "archivedOn": null,
            "parentCards": [],
            "assignedUsers": [
                {
                    "id": "563201452",
                    "fullName": "User Name",
                    "avatar": "https://myaccount.leankit.com/avatar/show/563201452/?s=25"
                }
            ],
            "connectedCardStats": null,
            "boardId": "814278941"
        },
        {
            "id": "966021242",
            "title": "test card two",
            "index": 0,
            "laneId": "943929934",
            "color": "#F1C7C5",
            "tags": [],
            "size": 0,
            "priority": "normal",
            "plannedStart": null,
            "plannedFinish": null,
            "actualStart": "2020-01-24T22:20:20Z",
            "actualFinish": null,
            "isDone": false,
            "movedOn": "2020-01-24T22:20:20.330Z",
            "updatedOn": "2020-01-24T22:21:11.096Z",
            "externalLinks": [],
            "customIconLabel": "Class of Service",
            "blockedStatus": {
                "isBlocked": false,
                "reason": null,
                "date": null
            },
            "customIcon": null,
            "customHeader": {
                "value": null,
                "header": null,
                "url": null
            },
            "taskBoardStats": null,
            "containingCardId": null,
            "cardType": {
                "id": "943929915",
                "name": "Defect"
            },
            "subscriptionId": "966024841",
            "archivedOn": null,
            "parentCards": [],
            "assignedUsers": [
                {
                    "id": "563201452",
                    "fullName": "User Name",
                    "avatar": "https://myaccount.leankit.com/avatar/show/563201452/?s=25"
                }
            ],
            "connectedCardStats": null,
            "boardId": "943929912"
        }
    ]
}
```
