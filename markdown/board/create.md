---
title: Create a new board
public: true
repo: core-board-service
---
# POST /io/board
Create a new board.

_Requires at least Board Creator account role._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|---|
|`title`*|string|The title of the new board.||
|`description`|string|Description is included on the board toolbar below the title.||
|`isShared`|boolean|Set to `true` to share the board with other users by default**|`false`|
|`sharedBoardRole`|enumeration|Specify the default board role users will have when shared. One of:<br />`none`<br />`boardReader`, <br />`boardUser`,<br />`boardManager`<br />`boardAdministrator`|`none`|
|`templateId`|string|Enter a template id to base the board on a template||
|`fromBoardId`||||
|`includeCards`|boolean|Specify `true` to make copies of the cards from the source board or template|`false`|
|`includeExistingUsers`|boolean|Specify `true` to use the same users as the source board|`false`|
|`baseWipOnCardSize`|boolean|Specify `true` to factor in card size when calculating work in progress|`false`|
|`excludeCompletedAndArchiveViolations`|boolean|Specify `true` to exclude completed and archive lanes from WIP calculations|`false`|

\* Required<br />
\** Not recommended for large organizations. Consider copying from another board or template with the correct users for your team.

### Example Requests

#### Default usage
```json
{
	"title": "My new board"
}
```
#### Creating from a template
```json
{
	"title": "Hey I made a board with cards from a template",
	"templateId": "10113986377",
	"includeCards": true
}
```
#### From a board with cards, users and other options
```json
{
	"title": "Hey I copied this board from another one",
	"description": "This should have cards, custom fields and users from the source board and should exclude wip limits and use card size. Custom field values for all source cards will be copied too!",
	"fromBoardId": "10113285944",
	"includeCards": true,
	"includeExistingUsers": true,
	"excludeCompletedAndArchiveViolations": true,
	"baseWipOnCardSize": true
}
```
### Example Successful Response

200 Success
```json
{
    "id": "10116186847"
}
```

