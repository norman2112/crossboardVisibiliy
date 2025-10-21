---
title: Get board changes
public: false
repo: core-board-service
---

# GET /io/board/:boardId/changes
Get board changes since a specific version.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`version`*|string|Specify your current version of the board to get all changes after this version||

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10100193219/changes?version=321' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

200 Success
```json
    "boardId": "10113285944",
    "version": "457",
    "updateCount": 10,
    "boardUpdated": true,
    "boardUsersUpdated": false,
    "updatedCardIds": [
        "10113878673",
        "10113968520",
        "10113968551"
    ],
    "createdCardIds": [],
    "deletedCardIds": [],
    "affectedLanes": [
        "10113286053",
        "10113987086"
    ],
    "parentCardsUpdated": false,
    "assignmentChanged": false,
    "updatedParentCardIds": [],
    "updatedChildCardIds": [
        "10113968520",
        "10113968551"
    ],
    "affectedLaneCounts": [
        "10113286053",
        "10113987086"
    ]
}
```

### Response Properties
|property|note|
|--------|----|
|`boardId`|Id of updated board||
|`version`|current version||
|`updateCount`|Count of changes since specified version|
|`boardUpdated`|boolean indicating whether there were layout changes|
|`boardUsersUpdated`|boolean indicating whether there were changes to users|
|`updatedCardIds`|Array of card ids with changes|
|`createdCardIds`|Array of ids for new cards|
|`deletedCardIds`|Array of ids for deleted cards|
|`affectedLanes`|Array of lanes that whose set of cards or position has changed |
|`parentCardsUpdated`|Boolean indicating one or more parent cards changed|
|`assignmentChanged`|Boolean indicating one or more user assignments changed|
|`updatedParentCardIds`|Array of parent card ids with changes|
|`updatedChildCardIds`|Array of child card ids with changes|
|`affectedLaneCounts`|Array of lanes whose card count (or card size) has changed|

### Notes
If the version you specify is greater than the latest version of the board, you'll receive `204 No Content`.
