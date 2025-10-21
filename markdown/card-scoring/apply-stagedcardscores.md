---
title: Apply the user's staged card scores to specified cards
preview: true
public: false
repo: core-board-service
---
# POST /io/board/:boardId/scoring/apply
Apply the user's staged card scores to specified cards

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-------|---|
| `cardIds` |array of card ids| The ids of the cards to have their staged scores applied to the card ||

### Example Requests
```json
{
    "cardIds": [
        "104896580",
        "104896584",
        "104904160"
    ]
}
```

### Example Successful Response

204 No Content



