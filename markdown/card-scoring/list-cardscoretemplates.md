---
title: List card scoring templates for a board
public: false
repo: core-board-service
---
# GET /io/board/:boardId/scoring/template
List all the card scoring template available for use on a board

### Example Request
``` shell
curl -X GET \
  https://myaccount.leankit.com/io/board/:boardId/scoring/template \
  -H 'Authorization: Basic base64encodedauthhere' \
  -H 'Content-Type: application/json'
```

### Example Response
``` json
[
    {
        "id": "1001",
        "version": 1,
        "title": "Weighted Shortest Job First (WSJF)",
        "description": "Weighted Shortest Job First (WSJF)",
        "isSystemTemplate": true,
        "isOrgTemplate": false,
        "isBoardTemplate": false,
        "metrics": [
            {
                "id": "1",
                "label": "Value",
                "abbreviation": "V",
                "prompt": "How valuable is this work?",
                "weight": 0.2,
                "isInverted": false
            },
            {
                "id": "2",
                "label": "Time Criticality",
                "abbreviation": "TC",
                "prompt": "How critical is it to do this work now?",
                "weight": 0.2,
                "isInverted": false
            },
            {
                "id": "3",
                "label": "Risk Reduction",
                "abbreviation": "RR",
                "prompt": "How much does this work reduce future risk?",
                "weight": 0.2,
                "isInverted": false
            },
            {
                "id": "4",
                "label": "Effort",
                "abbreviation": "E",
                "prompt": "How much effort is involved in this work?",
                "weight": 0.4,
                "isInverted": true
            }
        ]
    },
    {
        "id": "1002",
        "version": 1,
        "title": "Value vs Cost",
        "description": "Value vs Cost",
        "isSystemTemplate": true,
        "isOrgTemplate": false,
        "isBoardTemplate": false,
        "metrics": [
            {
                "id": "5",
                "label": "Value",
                "abbreviation": "V",
                "prompt": "How valuable is this work?",
                "weight": 0.5,
                "isInverted": false
            },
            {
                "id": "6",
                "label": "Cost",
                "abbreviation": "C",
                "prompt": "How much will it cost to do this work?",
                "weight": 0.5,
                "isInverted": true
            }
        ]
    },
    {
        "id": "1003",
        "version": 1,
        "title": "Three Buckets",
        "description": "Three Buckets",
        "isSystemTemplate": true,
        "isOrgTemplate": false,
        "isBoardTemplate": false,
        "metrics": [
            {
                "id": "7",
                "label": "Strategy Alignment",
                "abbreviation": "SA",
                "prompt": "How aligned is this work toward our strategy?",
                "weight": 0.5,
                "isInverted": false
            },
            {
                "id": "8",
                "label": "Change Required",
                "abbreviation": "CR",
                "prompt": "How much change is required for this work?",
                "weight": 0.3,
                "isInverted": true
            },
            {
                "id": "9",
                "label": "End User Importance",
                "abbreviation": "EUI",
                "prompt": "How important is this work to the end user?",
                "weight": 0.2,
                "isInverted": false
            }
        ]
    },
    {
        "id": "5051010",
        "version": 1,
        "title": "Custom Board template Name",
        "description": "this is optional",
        "isSystemTemplate": false,
        "isOrgTemplate": false,
        "isBoardTemplate": true,
        "metrics": [
            {
                "label": "A Custom Metric",
                "prompt": "What does the metric show?",
                "abbreviation": "ACM",
                "weight": 1,
                "isInverted": false,
                "id": "5051011"
            }
        ]
    }
]
```