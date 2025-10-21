---
title: Update a custom icon
public: true
repo: core-board-service
---
# PATCH /io/board/:boardId/customIcon/:customIconId
Update a custom icon on a board.

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
    "iconColor": "#000000"
}
```

### Full Request
```json
{
    "name": "New custom icon",
    "iconColor": "#000000",
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
    "iconColor": "#000000",
    "policy": "Some notes about when to use this icon",
    "iconName": "selected_icon.png"
}
```
