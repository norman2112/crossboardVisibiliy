---
title: List all boards
public: true
repo: core-board-service
openApi: true
operationId: listBoards
---
# GET /io/board
List all boards.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of boards to be returned.|200|
|`search`|string|Filter boards that match the title provided. ||
|`boards`|string|Select only the specified boards by Id||
|`invert`|boolean|Return boards in reverse alphabetical order by title|false|
|`minimumAccess`|enumeration|Return boards where users have this role or greater. Possible roles: none: 0, reader: 1, user: 2, manager: 3 administrator: 4||
|`archived`|boolean|Include archived boards in results. _note: requires organization administrator access_|false|

### Example Request
List all boards
```
curl -X GET \
  https://myaccount.leankit.com/io/board' \
  -H 'Authorization: Basic base64encodedauth' \
```
List boards that have "sample" in the title where the user's access is "manager" or greater
```
curl -X GET \
  https://myaccount.leankit.com/io/board?search=sample&minimumAccess=3' \
  -H 'Authorization: Basic base64encodedauth' \
```
Select board titles by specified id
```
curl -X GET \
  https://myaccount.leankit.com/io/board?boards=12345,9876,423664&only=id,title' \
  -H 'Authorization: Basic base64encodedauth' \
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
    "boards": [
        {
            "id": "621306392",
            "title": "Board number 1",
            "description": null,
            "boardRoleId": 4,
            "isWelcome": false,
            "boardRole": "boardAdministrator"
        },
        {
            "id": "814278941",
            "title": "board number 2",
            "description": "Work management board",
            "boardRoleId": 4,
            "isWelcome": false,
            "boardRole": "boardAdministrator"
        }
    ],
    "inaccessibleBoards": {
        {
            "id": "10100032120",
            "isDeleted": false,
            "isArchived": true,
            "hasAccess": true
        }
    }
}
```

Note: "inaccessibleBoards" is included only when requesting boards by Id.

### Response Properties
|Property|Type|Note|
|--------|----|----|
|`id`|string|The board id|
|`title`|string|The board title|
|`description`|string|The board description|
|`boardRoleId`|integer|The board role id|
|`isWelcome`|boolean|Indicates if the board is a welcome board|
|`boardRole`|string|The string representation of the board role|
