---
title: Get a list of cards using POST
public: true
repo: core-leankit-api
---
# POST /io/card/list
Get a list of cards.

See also: [GET /io/card](/markdown/card/list.md) for the GET version of this request.

### Request Body Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first card to be returned|0|
|`limit`|integer|Set the number of cards to be returned|200|
|`select`|enumeration|Only return <br /> `cards`<br /> `taskCards`<br /> `both`|cards|
|`board`|string|Filter to the specified board||
|`lanes`|string[]|Filter to the specified array of lane ids||
|`cards`|string[]|Filter to the specified array of card ids||
|`search`|string|Full text search on card title and external card id||
|`customId`|string|Filter using external card id (header). This field is deprecated, please use `customIds`.||
|`customIds`|string[]|Filter using the external card ids (headers)||
|`type`|string|Filter using the card type id. This field is deprecated, please use `types`.||
|`types`|string[]|Filter using the card type ids||
|`assignedUserIds`|string[]|Filter using the assigned user ids||
|`custom_icon`|string|Filter using custom icon id||
|`lane_class_types`|string[]|Only return cards in lane class types specified by array. Options are <br /> `backlog`<br /> `active`<br /> `archive`.
|`since`|datetime|Only return cards updated after this ISO8601 date||
|`deleted`|boolean|Return the card ids for deleted cards|
|`only`|string[]|Return only the fields specified by array||
|`omit`|string[]|Return all fields except those specified by array||
|`sort`|enumeration|Sort results by <br /> `activity`<br /> `rank`<br /> `title`<br /> Defaults to rank if there is a `search` param, otherwise activity.
|`include`|string[]|Include additional data. The possible options are: `customFields`, `parentCards`, `connectedCardStats`, `externalAssociations` and `dependencies`.||

### Example JSON Body Payloads
Get cards for a specific board
```json
{
  "board": "943188457"
}
```
Get cards for a set of lanes
```json
{
  "lanes": [ "943188474", "943188479"]
}
```
Get cards and task cards with the word "three" in the title or external card id field
```json
{
  "search": "three",
  "select": "both"
}
```
Get cards with the specified card type and custom icon in active or backlog lanes
```json
{
  "custom_icon": "943188468",
  "type": "943188463",
  "lane_class_types": [ "active", "backlog"]
}
```
Get the id and title of cards updated since 2019-12-05T21:52:12Z sorted by title
```json
{
  "since": "2019-12-05T21:52:12Z",
  "only": [ "title", "id" ],
  "sort": "title"
}
```
Get specific cards by id
```json
{
  "cards": [ "123456", "43212", "987656" ]
}
```


### Example Successful Response

200 Success
```json
{
    "cards": [
        {
            "assignedUsers": [
                {
                    "id": "478440842",
                    "fullName": "First Last",
                    "emailAddress": "user@leankit.com",
                    "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
                }
            ],
            "assignedTeams": [],
            "id": "943206946",
            "index": 1,
            "version": "26",
            "title": "Card Three",
            "description": "<p>The card three description</p>",
            "priority": "high",
            "size": 2,
            "plannedStart": "2019-12-20",
            "plannedFinish": "2019-12-23",
            "actualFinish": "2019-12-05T21:52:12Z",
            "actualStart": "2019-12-05T21:52:10Z",
            "createdOn": "2019-12-03T23:27:44Z",
            "archivedOn": null,
            "updatedOn": "2019-12-05T21:52:12Z",
            "movedOn": "2019-12-05T21:52:12Z",
            "tags": [
                "tagone",
                "tagtwo"
            ],
            "containingCardId": null,
            "color": "#B8CFDF",
            "iconPath": null,
            "customIconLabel": "Class of Service",
            "customIcon": {
                "id": "943188468",
                "title": "Regulatory",
                "cardColor": "#FFFFFF",
                "iconColor": "49bbd6",
                "iconName": "lk_icons_final_05-11",
                "iconPath": "https://myaccount.leankit.com/customicons/24/49bbd6/lk_icons_final_05-11.png"
            },
            "blockedStatus": {
                "isBlocked": true,
                "reason": "Blocked card reason",
                "date": "2019-12-04T20:38:33Z"
            },
            "board": {
                "id": "943188457",
                "title": "Example board",
                "version": "103",
                "isArchived": false
            },
            "customId": {
                "value": "The card header text",
                "prefix": null,
                "url": null
            },
            "externalLinks": [
                {
                    "label": "Link Title",
                    "url": "https://www.leankit.com"
                }
            ],
            "lane": {
                "cardLimit": 0,
                "description": null,
                "id": "943188473",
                "index": 3,
                "laneClassType": "active",
                "laneType": "completed",
                "orientation": "vertical",
                "title": "Recently Finished",
                "taskBoard": null,
                "cardStatus": "finished"
            },
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
            "planningIncrements": [
              {
                "id": "350",
                "label": "PI-3"
              },
              {
                "id": "375",
                "label": "PI-4"
              }
            ],
            "customFields": [
                {
                    "id": "5355212",
                    "value": "abc"
                },
                {
                    "id": "5355213",
                    "value": "123"
                }
            ],
            "dependencies": {
              "incoming": [
                {
                  "cardId": "5259070",
                  "timing": "finishToFinish",
                  "createdOn": "2025-08-05T16:09:27.310Z",
                  "boardId": "4322217"
                }
              ],
              "outgoing": [
                {
                  "cardId": "5258472",
                  "timing": "finishToStart",
                  "createdOn": "2025-07-24T14:24:23.680Z",
                  "boardId": "4693321"
                }
              ]
            }
        },
        {
            "assignedUsers": [],
            "assignedTeams": [
                {
                    "id": "5051621",
                    "title": "Team A"
                }
            ],
            "id": "944509659",
            "index": 1,
            "version": "3",
            "title": "2",
            "description": null,
            "priority": "normal",
            "size": 0,
            "plannedStart": null,
            "plannedFinish": null,
            "actualFinish": null,
            "actualStart": "2019-12-05T15:48:02Z",
            "createdOn": "2019-12-05T15:48:02Z",
            "archivedOn": null,
            "updatedOn": "2019-12-05T17:39:52Z",
            "movedOn": "2019-12-05T15:48:02Z",
            "tags": [],
            "containingCardId": null,
            "color": "#FFFFFF",
            "iconPath": null,
            "customIconLabel": "Class of Service",
            "customIcon": null,
            "blockedStatus": {
                "isBlocked": false,
                "reason": null,
                "date": null
            },
            "board": {
                "id": "943188457",
                "title": "Example board",
                "version": "103",
                "isArchived": false
            },
            "customId": {
                "value": null,
                "prefix": null,
                "url": null
            },
            "externalLinks": [],
            "lane": {
                "cardLimit": 0,
                "description": null,
                "id": "943188472",
                "index": 1,
                "laneClassType": "active",
                "laneType": "inProcess",
                "orientation": "vertical",
                "title": "Doing Now",
                "taskBoard": null,
                "cardStatus": "started"
            },
            "type": {
                "id": "943188459",
                "title": "Other Work",
                "cardColor": "#FFFFFF"
            },
            "taskBoardStats": null,
            "planningIncrements": [],
            "customFields": [],
            "dependencies": {
              "incoming": [],
              "outgoing": []
            }
        }
    ],
    "pageMeta": {
        "totalRecords": 668,
        "offset": 0,
        "limit": 2,
        "startRow": 1,
        "endRow": 2
    },
    "inaccessibleCards": [
      {
        "id": "1014559398",
        "isDeleted": true,
        "hasAccess": true
      }
    ]
}

Note:
"inaccessibleCards" is included only when requesting specific cards by id using the `cards` property.
"customFields" are included only when requesting with the `include` parameter.

```
| Status Code              | Error Message     | Reason                                 |
|--------------------------|-------------------|----------------------------------------|
| `422 Unprocessable Entity` | Invalid request: Failed \"enum\" criteria (pointer: #/select) | One of the query properties doesn't match a valid value. e.g. `"select": "taskcard"` is not valid but `"select": "taskCards"` is valid |
