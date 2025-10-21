---
title: Update a card
public: true
repo: core-card-service
---
# PATCH /io/card/:cardId
Update a card's fields. This endpoint supports [ISO 6902 JSON Patch](https://tools.ietf.org/html/rfc6902). Concurrency checks are implemented via a version number that may be specified either in an `x-lk-resource-version` header or in a json patch `test` operation against path `/version` in the body. If no version number is specified, the concurrency check will be skipped.

### Operations
| Operation | Description |
|---|---|
|`replace`|Update the field value.|
|`add`|Add the field value. `replace` and `add` are interchangeable in many cases. |
|`remove`|Remove the field value.|
|`test`|Check the field value for a match. This is most commonly used with `version` to handle concurrency issues.|

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-------|---|
| `title` |string| The card title. ||
| `typeId` |string| The card type. ||
| `assignedUserIds` |string array| Collection of assigned users. ||
| `blockReason` |string| The block reason. This should be specified with the `isBlocked` property operation in the same request. ||
| `customIconId` |string| The custom icon. ||
| `customId` |string| The card header. ||
| `customFields` |object array| Collection of custom fields. Each field has a string `fieldId` and string `value` property. ||
| `description` |string| The card description ||
| `externalLink` |object| External link object with string `label` and string `url` fields. ||
| `index` |integer| The position of the card in the lane starting at 0 as the first position. ||
| `isBlocked` |boolean| The blocked state of the card. Should be specified with the `blockReason` property operation in the same request. ||
| `laneId` |string| The lane id that the card should be moved to. ||
| `parentCardId` |string| The parent card. ||
| `plannedStart` |date| The planned start date in the format YYYY-MM-DD ||
| `plannedFinish` |date| The planned finish date in the format YYYY-MM-DD. ||
| `planningIncrementIds` |string array| Collection of planning increment ids.||
| `mirrorSourceCardId` |string| The card that is the source for mirroring title, description and customId to this card. ||
| `size` |string| The card size. ||
| `tags` |string array| Collection of tags. ||
| `wipOverrideComment` |string| The WIP override comment. This should be specified with a `laneId` update operation that would violate a WIP limit. ||
| `version` |string| The card version. This can not be set. It is used with a `test` operation to validate that the card was not modified. ||

### Example Request
Updating a single field
```json
[
  { "op": "replace", "path": "/title", "value": "updated card title" }
]
```
Change two fields at once
```json
[
  { "op": "replace", "path": "/description", "value": "updated card description" },
  { "op": "replace", "path": "/typeId", "value": "944576315" }
]
```
All fields that can be updated
```json
[
  { "op": "replace", "path": "/title", "value": "Title here" },
  { "op": "replace", "path": "/typeId", "value": "944576315" },
  { "op": "add", "path": "/assignedUserIds/1", "value": "583458214" },
  { "op": "add", "path": "/blockReason", "value": "This card is blocked" },
  { "op": "replace", "path": "/customIconId", "value": "944576318" },
  { "op": "replace", "path": "/customId", "value": "The header" },
  { "op": "add", "path": "/customFields/0", "value": {
  	"fieldId": "945250752",
  	"value": "Custom field value"
  } },
  { "op": "replace", "path": "/description", "value": "The description" },
  { "op": "add", "path": "/externalLink", "value": {
  	"label": "Link label",
  	"url": "https://www.leankit.com"
  } },
  { "op": "replace", "path": "/index", "value": 0 },
  { "op": "replace", "path": "/isBlocked", "value": true },
  { "op": "replace", "path": "/laneId", "value": "944576328" },
  { "op": "replace", "path": "/parentCardId", "value": "945265884" },
  { "op": "replace", "path": "/plannedStart", "value": "2024-01-01" },
  { "op": "replace", "path": "/plannedFinish", "value": "2024-12-31" },
  { "op": "remove", "path": "/mirrorSourceCardId", "value": "945265884" },
  { "op": "replace", "path": "/size", "value": 5 },
  { "op": "remove", "path": "/tags/0" },
  { "op": "replace", "path": "/wipOverrideComment", "value": "Override wip" },
  { "op": "add", "path": "/planningIncrementIds/-", "value": "94114176565" }
  { "op": "test", "path": "/version", "value": "11" }
]
```
Verify the card hasn't changed before updating the custom header id. If the version specified in the test operation does not match the server version a http `428 Unknown` response will be returned with the message `Optimistic concurrency check failed`.
```json
[
  { "op": "test", "path": "/version", "value": "8"  },
  { "op": "replace", "path": "/customId", "value": "new card header"  }
]

```
### Working With Collections

This example removes the first tag. Positions start at 0.
```json
[
  { "op": "remove", "path": "/tags/0" }
]
```
This example removes a tag by value. It will remove the tag `"red"`, regardless of where it appears in the tag list.
```json
[
  { "op": "remove", "path": "/tags", "value": "red"}
]
```
Specifying `-` as the position adds an item to the end of the collection.
```json
[
  { "op": "add", "path": "/tags/-", "value": "end tag" }
]
```
Edit the tag in the second position.
```json
[
  { "op": "replace", "path": "/tags/1", "value": "edit tag" }
]
```

### Example Successful Response
200 OK
```json
{
    "actualFinish": "2019-12-06T21:25:45Z",
    "actualStart": "2019-12-06T21:25:45Z",
    "blockedStatus": {
        "isBlocked": true,
        "reason": "The block reason",
        "date": "2019-12-06T21:07:34Z"
    },
    "board": {
        "id": "944576308",
        "title": "Sample Board",
        "version": "65",
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
    "plannedFinish": null,
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
    "index": 2,
    "lane": {
        "cardLimit": 0,
        "description": null,
        "id": "944576330",
        "index": 2,
        "laneClassType": "active",
        "laneType": "inProcess",
        "orientation": "vertical",
        "title": "Under Review",
        "taskBoard": null,
        "cardStatus": "started"
    },
    "updatedOn": "2019-12-06T22:50:32Z",
    "movedOn": "2019-12-06T21:37:11Z",
    "priority": "normal",
    "size": 1,
    "plannedStart": null,
    "tags": [
        "tagOne",
        "tagTwo"
    ],
    "title": "updated card title",
    "version": "8",
    "type": {
        "id": "944576314",
        "title": "New Feature",
        "cardColor": "#B8CFDF"
    },
    "taskBoardStats": {
        "totalCount": 1,
        "completedCount": 0,
        "totalSize": 1,
        "completedSize": 0
    },
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
    "movedBy": {
        "id": "478440842",
        "emailAddress": "user@leankit.com",
        "fullName": "First Last",
        "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
    },
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
    "mirrorSourceCardId": "945265884",
    "customFields": [
        {
            "fieldId": "945250752",
            "type": "text",
            "label": "Custom Field Label",
            "value": "This is the field value"
        }
    ],
    "planningIncrements": [
        {
          "id": "94114176565",
          "label": "PI-2",
          "startDate": "2021-12-01T00:00:00.000Z",
          "endDate": "2021-12-25T00:00:00.000Z",
          "series": {
              "id": "94114169089",
              "label": "Series 1",
              "timeZone": "Etc/GMT"
          },
          "parent": null
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
    }
}
```
### Notable Error Responses
| Status Code              | Error Message     | Reason                                 |
|--------------------------|-------------------|----------------------------------------|
| `428 Unknown` | Optimistic concurrency check failed | A version test operation was sent and failed because the card was modified by another transaction. |
