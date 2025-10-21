---
title: Get user's card scoring for a board
preview: false
public: true
repo: core-board-service
---
# GET /io/board/:boardId/scoring
Get the current state of the user's card scoring for a board.


### Example Request
```shell
curl -X GET \
  https://acmeco.leankit.com/io/board/10100193219/scoring' \
  -H 'Authorization: Basic ZGFuaEBwbGFudmlldy4jb206dGVzdDEyMzQ=' \
  -H 'Content-Type: application/json' \
```

### Example Successful Response

200 Success
```json
{
    "template": {
        "id": "1001",
        "version": "1",
        "isTemplateChanged": false,
        "title": "Weighted Shortest Job First (WSJF)",
        "description": "Weighted Shortest Job First (WSJF)",
        "metrics": [
            {
                "id": "1",
                "label": "Value",
                "prompt": "How valuable is this work?",
                "abbreviation": "V",
                "weight": 0.2,
                "isInverted": false
            },
            {
                "id": "2",
                "label": "Time Criticality",
                "prompt": "How critical is it to do this work now?",
                "abbreviation": "TC",
                "weight": 0.2,
                "isInverted": false
            },
            {
                "id": "3",
                "label": "Risk Reduction",
                "prompt": "How much does this work reduce future risk?",
                "abbreviation": "RR",
                "weight": 0.2,
                "isInverted": false
            },
            {
                "id": "4",
                "label": "Effort",
                "prompt": "How much effort is involved in this work?",
                "abbreviation": "E",
                "weight": 0.4,
                "isInverted": true
            }
        ]
    },
    "cards": [
        {
            "cardId": "10105790505",
            "scoreTotal": 43.1,
            "scoreOverride": 76,
            "confidenceTotal": 33.5,
            "scores": [
                {
                    "metricId": "1",
                    "score": 27.1,
                    "confidence": 45.7
                }
                // more scores here
            ]
        },
			  // more cards here
	]
}
```
### Response Properties
|Property|Type|Note|
|--------|----|----|
|`template`|object|The definition of the current template used for the card scoring|
|`cards`|array of card|The cards that have been scored with score and confidence totals and component scores|


