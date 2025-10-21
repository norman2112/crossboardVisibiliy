---
title: Create a card
public: true
repo: core-leankit-api
---
# POST /io/card/
Create a card.

_Note: `copiedFromCardId` does not copy the source card's details but will replicate the taskboard and task cards from the source card._

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`returnFullRecord`|boolean|Returns the full card record|false|

### Example Requests

#### Minimum Board
Card will be created at the end of the default drop lane with the default card type.
```json
{
  "destination": { "boardId": "1234" },
  "title": "The title of the card"
}
```

#### Minimum Lane
Card will be created at the end of the specified lane with the default card type.
```json
{
  "destination": { "laneId": "2345" },
  "title": "The title of the card"
}
```

#### Minimum Taskboard
Card will be created at the end of the "TODO" lane on the taskboard of the specified card with the default task card type.
```json
{
  "destination": { "cardId": "3456" },
  "title": "The title of the card"
}
```

#### All fields
```json
{
    "destination": { // One of the properties (boardId, laneId, cardId) is required
      "boardId": "1234",
      "laneId": "2345",
      "cardId": "3456",
      "index": 1, // default: -1 (end of lane)
      "laneTitle": "doing" // Used when destination is a card. Options: todo,doing,done; default: todo
    },
    "title": "The title of the card",
    "typeId": "944576314",
    "assignedUserIds": [ "478440842" ],
    "description": "The card description",
    "size": 1,
    "connections": {
      "parents": ["945202295"],
      "children": ["945250930"]
    },
    "dependencies": [
      {
        "cardId": "945202296",
        "direction": "incoming",
        "timing": "finishToStart" // timing is optional and defaults to finishToStart
      },
      {
        "cardId": "945202297",
        "direction": "outgoing",
        "timing": "startToStart"
      }
    ],
    "mirrorSourceCardId": "945202295",
    "copiedFromCardId": "945261794",
    "blockReason": "The block reason",
    "priority": "normal",
    "customIconId": "944576317",
    "customId": "Card header text",
    "externalLink": {
        "label": "The link label",
        "url": "https://www.leankit.com"
    },
    "plannedStart": "2020-01-20",
    "plannedFinish": "2020-02-01",
    "tags": [
        "tagOne",
        "tagTwo"
    ],
    "wipOverrideComment": "The override reason",
    "customFields": [ {
      "fieldId": "945250752",
      "value": "This is the field value"
    } ],
    "planningIncrementIds": [
        "10114179391",
        "10114169190"
    ]
}
```
__Note:__ `boardId`, `laneId`, `index` properties have been moved into the `destination` object. For backwards compatibility, when they are provided at the top level, a valid `destination` is generated.

### Example Successful Response
When returnFullRecord is false (default)

201 Created
```json
{
    "id": "945250932"
}
```

When returnFullRecord is true

201 Created
```json
{
    "actualFinish": null,
    "actualStart": null,
    "blockedStatus": {
        "isBlocked": true,
        "reason": "The block reason",
        "date": "2019-12-06T21:07:34Z"
    },
    "board": {
        "id": "944576308",
        "title": "Sample Board",
        "version": "42",
        "isArchived": false
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
    "customIconLabel": "Class of Service",
    "color": "#B8CFDF",
    "iconPath": null,
    "createdOn": "2019-12-06T21:07:34Z",
    "archivedOn": null,
    "description": "The card description",
    "plannedFinish": "2020-02-01",
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
    "id": "945261794",
    "index": 1,
    "lane": {
        "cardLimit": 0,
        "description": null,
        "id": "944576326",
        "index": 0,
        "laneClassType": "backlog",
        "laneType": "ready",
        "orientation": "vertical",
        "title": "New Requests",
        "taskBoard": null,
        "cardStatus": "notStarted"
    },
    "updatedOn": "2019-12-06T21:07:34Z",
    "movedOn": "2019-12-06T21:07:34Z",
    "priority": "normal",
    "size": 1,
    "plannedStart": "2020-01-20",
    "tags": [
        "tagOne",
        "tagTwo"
    ],
    "title": "The title of the card",
    "version": "2",
    "type": {
        "id": "944576314",
        "title": "New Feature",
        "cardColor": "#B8CFDF"
    },
    "taskBoardStats": null,
    "subscriptionId": "945261795",
    "createdBy": {
        "id": "478440842",
        "emailAddress": "user@leankit.com",
        "fullName": "First Last",
        "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
    },
    "updatedBy": {
        "id": "478440842",
        "emailAddress": "user@leankit.com",
        "fullName": "First Last",
        "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
    },
    "movedBy": null,
    "archivedBy": null,
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
    "attachments": [],
    "comments": [],
    "parentCards": [
        {
            "cardId": "945202295",
            "boardId": "944576308"
        }
    ],
    "mirrorSourceCardId": "945202295",
    "customFields": [
        {
            "fieldId": "945250752",
            "type": "text",
            "label": "Custom Field Label",
            "value": "This is the field value"
        }
    ],
    "connectedCardStats": {
        "startedCount": 0,
        "startedSize": 0,
        "notStartedCount": 1,
        "notStartedSize": 1,
        "completedCount": 0,
        "completedSize": 0,
        "blockedCount": 0,
        "totalCount": 1,
        "totalSize": 1,
        "plannedStart": null,
        "plannedFinish": null,
        "actualStart": null,
        "actualFinish": null,
        "pastDueCount": 0,
        "projectedLateCount": 0
    },
    "planningIncrements": [
        {
            "id": "10114179391",
            "label": "PI-1a",
            "startDate": "2021-11-01T00:00:00.000Z",
            "endDate": "2021-11-14T00:00:00.000Z",
            "series": {
                "id": "10114169089",
                "label": "Series 2",
                "timeZone": "Etc/GMT"
            },
            "parent": {
                "id": "10114169189",
                "label": "PI-1"
            }
        },
        {
            "id": "10114169190",
            "label": "PI-2",
            "startDate": "2021-12-01T00:00:00.000Z",
            "endDate": "2021-12-25T00:00:00.000Z",
            "series": {
                "id": "10114169089",
                "label": "Series 2",
                "timeZone": "Etc/GMT"
            },
            "parent": null
        }
    ]
}
```

