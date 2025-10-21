---
title: Rename or merge tags on a board
public: true
repo: core-board-service
---
# POST /io/board/:boardId/tag/replace
Rename or merge tags on a board.

_Requires `enableTagManagement` to be `true` for the account and the requesting user to be a `boardAdministrator`._

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`tags`*|string array|List of tags to be replaced||
|`replaceWith`*|string|The new tag to replace with||


### Example Request
```json
{
    "tags": [ "tag1", "tag2" ],
    "replaceWith": "newTag"
}
```

### Example Successful Response
204 No Content

