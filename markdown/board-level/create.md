---
title: Create, update, or delete board levels
public: true
repo: core-board-service
---
# PUT /io/boardLevel
Create, update, or delete board levels.

All levels need to be included in the payload. Levels without an id will be created. Missing levels will be deleted.

### Request Properties
|Param|Type|Usage|Default|
|-----|----|-----|-------|
|`id`|string|Id of the board level||
|`label`*|string|Label of the board level used for display||
|`color`*|string|Hexadecimal color of the level||
|`depth`*|integer|Level depth, values 1-4 are allowed||

### Example Request
```json
{
	"boardLevels": [
		{
			"id": "951195396",
			"label": "Portfolioo",
			"color": "#2966a3",
			"depth": 1
		},
		{
			"id": "951195397",
			"label": "Program",
			"color": "#328048",
			"depth": 2
		},
		{
			"id": "951195398",
			"label": "Team",
			"color": "#ff841f",
			"depth": 3
		},
		{
			"label": "Test Level",
			"color": "#5b499e",
			"depth": 4
		}
	]
}
```

### Example Successful Response
200 OK

```json
{
	"levelIds": [
		"951195396",
		"951195397",
		"951195398",
		"960989143"
	]
}
```

