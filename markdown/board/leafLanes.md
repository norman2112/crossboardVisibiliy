---
title: Get a list of leaf lanes for a board (lanes that can hold cards)
public: true
repo: core-board-service
---
# GET /io/board/:boardId/leafLanes
Get details about the lanes on a board that can hold cards

### Example Request
```shell
curl -X GET \
  'https://myaccount.leankit.com/io/board/10113285944/leafLanes' \
  -H 'Authorization: Basic base64encodedauthhere'
```

  ### Example Response
  ```json
{
    "lanes": [
        {
            "id": "5054565",
            "title": "New Requests",
            "expandedTitle": "Not Started - Future Work:New Requests"
        },
        {
            "id": "5054564",
            "title": "Approved",
            "expandedTitle": "Not Started - Future Work:Approved"
        }
    ]
}
  ```
