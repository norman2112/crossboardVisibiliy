---
title: Get a list of child board connections
public: true
repo: core-leankit-api
---
# GET /io/card/:cardId/connection
Get a list of child board connections. This is the unique set of child boards related to the parent card.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206946/connection \
  -H 'Authorization: Basic base64encodedauthhere' \
  -H 'Content-Type: application/json'
```

### Example Successful Response
200 OK
```json
{
    "connections": [
        {
            "cardId": "943206946",
            "boardId": "943929912",
            "boardTitle": "Child board",
            "isFollowable": true,
            "isRemovable": true,
            "isArchived": false
        },
        {
            "cardId": "943206946",
            "boardId": "943188457",
            "boardTitle": "Example board",
            "isFollowable": true,
            "isRemovable": true,
            "isArchived": false
        }
    ]
}
```
