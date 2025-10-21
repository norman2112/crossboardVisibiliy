---
title: Delete applied card scores
preview: true
public: false
repo: core-card-service
---
# DELETE /io/card/scoring
Delete applied card scores

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-------|---|
| `boardId` |integer| The id of the board with the cards to have their scores removed ||
| `cardIds` |array of card ids| The ids of the cards to have their scores removed ||

### Example Requests
```json
{
    "boardId": "1201",
    "cardIds": [
        "10001",
        "10002"
    ]
}
```

### Example Successful Response

204 No Content


