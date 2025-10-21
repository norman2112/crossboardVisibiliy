---
title: Update existing card scoring template
public: false
repo: core-board-service
---

# PUT /io/board/:boardId/scoring/template/:templateId
Update an existing board-level card scoring template.

### Request Properties
|Param|Type|Usage|Default|
|-----|----|-----|-------|
|`title`|string|The title of the scoring template||
|`description`|string|A Description of the scoring template||
|`enabled`|boolean|enabled or disabled this template||
|`metrics`|object array|An array of objects describing the metrics used for scoring cards. You must provide the metric id when updating metrics. The metric weights must sum to exactly 1||

### Example Request
``` json
    {
        "title": "Custom Template Name 123",
        "description": "this is optional",
        "enabled": true,
        "metrics": [
            {
                "id": "5051418", // will update the metric
                "label": "Metric 1",
                "prompt": "This is the first metric",
                "abbreviation": "M1",
                "weight": 0.4,
                "isInverted": false
            },
            {
                "label": "Metric 2", // will create this metric
                "prompt": "This is metric 2",
                "abbreviation": "M2",
                "weight": 0.6,
                "isInverted": false
            }
            // more metric updates or creates here
        ]
    }
```

### Example Response
If there were changes present in the payload
``` json
{
    "id": "5051414",
    "version": 2,
    "boardId": "5050202",
    "enabled": true
}
```

Otherwise,
``` 
204 No Content
```

