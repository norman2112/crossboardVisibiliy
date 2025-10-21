---
title: Create a new card scoring template
public: false
repo: core-board-service
---

# POST /io/board/:boardId/scoring/template
Create a new custom board-level card scoring template.

### Request Properties

|Param|Type|Usage|Default|
|-----|----|-----|-------|
|`title`|string|The title of the scoring template||
|`description`|string|A Description of the scoring template||
|`metrics`|object array|An array of objects describing the metrics used for scoring cards. The metric weights must sum to exactly 1||

### Example Request
``` json
{
    "title": "Custom Template Name",
    "description": "this is optional",
    "metrics": [
        {
            "label": "Metric 1",
            "prompt": "What does this measure?",
            "abbreviation": "TS",
            "weight": 1.0,
            "isInverted": false
        }
        // more metrics here
    ]
}
```

### Example Response
``` json
{
    "id": "5051818",
    "version": 1,
    "boardId": "5050202",
    "enabled": true
}
```