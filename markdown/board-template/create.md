---
public: true
title: Create a board template
repo: core-board-service
---
# POST /io/template
Create a board template from a board.

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-------|---|
|`boardId`*|string|Id of the board to base the template on||
|`templateName`*|string|Name of the template||
|`templateDescription`|string|Description of the template||
|`includeCards`|string|Should the cards on the board be included in the template|false|

### Example Requests
```json
{
	"boardId": "566725739",
	"templateName": "This is a template",
	"templateDescription": "The description is here",
	"includeCards": true
}
```

### Example Successful Response

201 Created
```json
{
    "id": "961080549"
}
```
