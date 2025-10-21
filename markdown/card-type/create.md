---
title: Create a card type
public: true
repo: core-board-service
---
# POST /io/board/:boardId/cardType
Create a card type on a board.

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|---|
|`name`*|string|Name of the card type||
|`colorHex`*|string|Background color for cards of this card type||
|`isCardType`|boolean|Determines if card type will be used for standard cards on a board|`false`|
|`isTaskType`|boolean|Determines if card type will be used for task cards|`false`|

### Minimal Request
Minimum fields required
```json
{
    "name": "New Card Type",
    "colorHex": "#f0f0f0"
}
```

### Full Request
```json
{
    "name": "New Card Type",
    "colorHex": "#f0f0f0",
    "isCardType": true,
    "isTaskType": false
}
```

### Example Successful Response
201 Created

```json
{
    "id": "947429871",
    "name": "New Card Type",
    "colorHex": "#f0f0f0",
    "isCardType": true,
    "isTaskType": false,
    "isDefaultTaskType": false
}
```

