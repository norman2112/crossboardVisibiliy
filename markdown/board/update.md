---
title: Update board settings
public: true
repo: core-board-service
---
# PATCH /io/board/:boardId
Update the settings of a board.

_Requires at least Board Manager account role._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|---|
|`title`|string|The title of the new board.||
|`description`|string|Description is included on the board toolbar below the title.||
|`isShared`|boolean|Set to `true` to share the board with other users by default*||
|`sharedBoardRole`|enumeration|Specify the default board role users will have when shared. One of:<br />`none`<br />`boardReader`, <br />`boardUser`,<br />`boardManager`<br />`boardAdministrator`|`none`||
|`baseWipOnCardSize`|boolean|Specify `true` to factor in card size when calculating work in progress|`false`||
|`excludeCompletedAndArchiveViolations`|boolean|Specify `true` to exclude completed and archive lanes from WIP calculations||`false`||
|`customBoardUrl`|string|Set a custom url to this board. (i.e. `https://myaccount.leankit.com/myCoolBoard`)||
|`enableCustomIcon`|boolean|`true` / `false`||
|`customIconFieldLabel`|string|Set the label for custom icons.||
|`allowUsersToDeleteCards`|boolean|`true` / `false`||
|`defaultCardType`|string|cardTypeId||
|`defaultTaskType`|string|cardTypeId||
|`allowPlanviewIntegration`|boolean|Allow this board to integrate with Planview Enterprise One. (`true` / `false`)||
|`level`|integer|Specify a board level (1-4). Requires the board levels feature.||

\* Not recommended for large organizations. Consider copying from another board or template with the correct users for your team.

Only send the properties that you wish to modify. You must send at least one change. Excluded properties will remain unchanged. Some options depend on specific features that may not be available.

### Example Requests

#### Default usage
```json
{
	"title": "My new board"
}
```
#### Modifying other settings
```json
{
  "excludeCompletedAndArchiveViolations": true,
  "baseWipOnCardSize": true,
  "customBoardUrl": "teamWildcats"
}
```
### Example Successful Response

204 No Content
```json
{
    "id": "10116186847"
}
```
