---
title: Get a card scoring template for a board
public: false
repo: core-board-service
---

# GET /io/board/:boardId/scoring/template/:templateId
Get a specific template. The requested template must be accessible to the board

### Example Request
``` shell
curl -X GET \
  https://myaccount.leankit.com/io/board/:boardId/scoring/template/:templateId \
  -H 'Authorization: Basic base64encodedauthhere' \
  -H 'Content-Type: application/json'
```

### Example Response
``` json
    {
        "id": "5051414",
        "version": 1,
        "title": "Custom Template",
        "description": "This template is accessible through the board",
        "isSystemTemplate": false,
        "isOrgTemplate": false,
        "isBoardTemplate": true,
        "metrics": [
            {
                "id": "5051415",
                "label": "Metric 1",
                "prompt": "What is the first metric?",
                "abbreviation": "FM",
                "weight": 0.8,
                "isInverted": false
            },
            {
                "id": "5051416",
                "label": "Metric 2",
                "prompt": "What is the second metric?",
                "abbreviation": "SM",
                "weight": 0.2,
                "isInverted": false
            }
        ]
    }
```