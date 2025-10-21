---
title: List board levels
public: true
repo: core-board-service
---
# GET /io/boardLevel
List board levels.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/boardLevel \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "boardLevels": [
        {
            "id": "961018244",
            "depth": 1,
            "maxDepth": 4,
            "label": "Portfolioo",
            "color": "#2966a3",
            "unarchivedBoardCount": 1,
            "archivedBoardCount": 0
        },
        {
            "id": "961018245",
            "depth": 2,
            "maxDepth": 4,
            "label": "Program",
            "color": "#328048",
            "unarchivedBoardCount": 2,
            "archivedBoardCount": 0
        },
        {
            "id": "961018246",
            "depth": 3,
            "maxDepth": 4,
            "label": "Team",
            "color": "#ff841f",
            "unarchivedBoardCount": 2,
            "archivedBoardCount": 0
        },
        {
            "id": "961018247",
            "depth": 4,
            "maxDepth": 4,
            "label": "Test Level",
            "color": "#5b499e",
            "unarchivedBoardCount": 1,
            "archivedBoardCount": 0
        }
    ]
}
```
