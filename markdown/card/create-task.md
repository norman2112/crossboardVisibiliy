---
title: Create a task card
public: true
repo: core-leankit-api
deprecated: true
---
# POST /io/card/:cardId/tasks
Create a task card.

_Note: This has been deprecated in favor of our [Card create](/markdown/card/create.md) endpoint._

### Example Requests
Minimum fields required
```json
{
  "title": "The title of the task",
  "laneType": "ready",
  "typeId": "944576314"
}
```
All fields
```json
{
    "title": "The title of the task",
    "typeId": "944576314",
    "laneType": "completed",
    "assignedUserIds": [ "2" ],
    "description": "The card description",
    "size": 1,
    "blockReason": "The block reason",
    "priority": "normal",
    "customIconId": "944576317",
    "customId": "Task header text",
    "externalLink": {
        "label": "The link label",
        "url": "https://www.leankit.com"
    },
    "index": 0,
    "plannedStart": "2020-01-20",
    "plannedFinish": "2020-02-01",
    "tags": [
        "tagOne",
        "tagTwo"
    ],
    "wipOverrideComment": "The override reason"
}
```
Creating a task at a specific lane position (index)

_Note: Avoid using a specific index if possible. Operations that explicitly modify index are slower._
```json
{
  "title": "The title of the task",
  "laneType": "ready",
  "typeId": "944576314",
  "index": 0
}
```

### Example Successful Response
201 Created
```json
{
    "id": "945261794",
    "index": 0,
    "description": "The card description",
    "tags": [
        "tagOne",
        "tagTwo"
    ],
    "title": "The title of the task",
    "size": 1,
    "version": "1",
    "priority": "normal",
    "createdOn": "2020-03-26T16:15:24Z",
    "archivedOn": null,
    "plannedStart": "2020-01-20",
    "plannedFinish": "2020-02-01",
    "actualStart": "2020-03-26T16:15:24Z",
    "actualFinish": "2020-03-26T16:15:24Z",
    "updatedOn": "2020-03-26T16:15:24Z",
    "movedOn": "2020-03-26T16:15:24Z",
    "color": "#F1C7C5",
    "iconPath": null,
    "blockedStatus": {
        "isBlocked": true,
        "reason": "The block reason",
        "date": "2020-03-26T16:15:24Z"
    },
    "board": {
        "id": "944576308",
        "title": "Sample Board",
        "version": "42",
        "isArchived": false
    },
    "taskBoard": {
        "id": "944576305",
        "version": "8"
    },
    "customIcon": {
        "id": "944576317",
        "title": "Date Dependent",
        "cardColor": "#FFFFFF",
        "iconColor": "212121",
        "iconName": "lk_icons_final_01-13",
        "iconPath": "https://myaccount.leankit.com/customicons/24/212121/lk_icons_final_01-13.png",
        "policy": ""
    },
    "customId": {
        "value": "Card header text",
        "prefix": null,
        "url": null
    },
    "externalLinks": [
        {
            "label": "The link label",
            "url": "https://www.leankit.com"
        }
    ],
    "lane": {
        "cardLimit": 0,
        "description": null,
        "id": "944576326",
        "index": 0,
        "laneClassType": "active",
        "laneType": "ready",
        "orientation": "vertical",
        "title": "ToDo"
    },
    "type": {
        "id": "944576314",
        "title": "New Feature",
        "cardColor": "#B8CFDF"
    },
    "assignedUsers": [
        {
            "id": "478440842",
            "emailAddress": "user@leankit.com",
            "fullName": "First Last",
            "firstName": "First",
            "lastName": "Last",
            "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
        }
    ],
    "comments": [],
    "attachments": [],
    "parentCards": [],
    "createdBy": {
        "id": "478440842",
        "emailAddress": "user@leankit.com",
        "firstName": "First",
        "lastName": "Last",
        "fullName": "First Last",
        "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
    },
    "updatedBy": {
        "id": "478440842",
        "emailAddress": "user@leankit.com",
        "firstName": "First",
        "lastName": "Last",
        "fullName": "First Last",
        "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
    },
    "movedBy": null,
    "archivedBy": null
}
```

