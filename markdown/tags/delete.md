---
title: Delete a tag on a board
public: true
repo: core-board-service
---
# DELETE /io/board/:boardId/tag
Delete a tag on a board.

_Requires `enableTagManagement` to be `true` for the account and the requesting user to be a `boardAdministrator`._

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`tags`*|string array|List of tags to remove||


### Example Request
```json
{
    "tags": [ "tag1", "tag2" ]
}
```

### Example Successful Response
204 No Content

