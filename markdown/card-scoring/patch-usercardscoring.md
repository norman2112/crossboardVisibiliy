---
title: Set the current scoring template and/or cards to score for a board
preview: true
public: false
repo: core-board-service
---
# PATCH /io/board/:boardId/scoring
Set the current scoring template and/or cards to score for a board.

The payload of `cardIds` is an exclusive list of cards currently being scored.
- Any cards currently being scored that are not on the list will be removed from card scoring.
- Any cards not currently being scored that are in the list will be added to scoring with default values.
- Any cards currently being scored that are in the list will remain unchanged.
- Sending an empty array will remove all cards from the current scoring session.

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-------|---|
| `template` |object| The id and version of the template being set for the user's card scoring session ||
| `cardIds` |array of card ids| The ids of the cards to be used for the user's card scoring session ||

### Example Requests
```json
{
    "template": {
        "id": "1",
        "version": "1"
    },
    "cardIds": [
        "10001",
        "10002"
    ]
}
```

### Example Successful Response

204 No Content



