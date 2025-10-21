---
title: Update staged card score for a card
preview: true
public: false
repo: core-board-service
---
# PUT /io/board/:boardId/scoring/card/:cardId
Update the staged card score for a card.

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-------|---|
| `scoreTotal` |float| The combined total score for the card ||
| `scoreOverride` |float| Score override when score is manually applied ||
| `confidenceTotal` |float| The combined confidence total for the card's score ||
| `scores` |array of metric score objects| The individual component scores for each of the template's metric ||

### Example Requests
```json
{
    "scoreTotal": 43.1,
    "scoreOverride": null,
    "confidenceTotal": 33.5,
    "scores": [
        {
            "metricId": 1,
            "score": 27.3,
            "confidence": 95.9
        }
        // more scores for metrics go here
    ]
}
```

### Example Successful Response

204 No Content

