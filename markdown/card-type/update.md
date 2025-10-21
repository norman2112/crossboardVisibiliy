---
title: Update a card type
public: true
repo: core-board-service
---
# PATCH /io/board/:boardId/cardType/:cardTypeId
Update a card type on a board.

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|---|
|`name`|string|Name of the card type||
|`colorHex`|string|Background color for cards of this card type||
|`isCardType`|string|Determines if card type will be used for standard cards on a board|`false`|
|`isTaskType`|boolean|Determines if card type will be used for task cards|`false`|


### Example Request
```json
{
    "colorHex": "#ffffff"
}
```

### Example Successful Response
200 OK

```json
{
    "id": "947429871",
    "name": "New Card Type",
    "colorHex": "#ffffff",
    "isCardType": true,
    "isTaskType": false,
    "isDefaultTaskType": false
}
```

