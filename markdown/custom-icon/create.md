---
title: Create a custom icon
public: true
repo: core-board-service
---
# POST /io/board/:boardId/customIcon
Create a custom icon on a board.

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|---|
|`name`|string|Name of the custom icon||
|`iconColor`|string|Color of the icon| `#212121`|
|`policy`|string|Text that describes the policy for using this icon||
|`iconName`|string|The name of the chosen icon| `blank_icon`|

### Minimal Request
Minimum fields required
```json
{
    "name": "New custom icon"
}
```

### Full Request
```json
{
    "name": "New custom icon",
    "iconColor": "#f0f0f0",
    "policy": "Some notes about when to use this icon",
    "iconName": "selected_icon.png"
}
```

### Example Successful Response
201 Created

```json
{
    "id": "947429871",
    "name": "New custom icon",
    "iconColor": "#f0f0f0",
    "policy": "Some notes about when to use this icon",
    "iconName": "selected_icon.png"
}
```

