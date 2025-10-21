---
title: Create a drill through board connection to another board
deprecated: true
public: false
repo: core-leankit-api
---
# PUT /io/card/:cardId/connection/:boardId
Create a drill through board connection to another board.

```shell
curl -X PUT \
  https://myaccount.leankit.com/io/card/943206946/connection/944515478 \
  -H 'Authorization: Basic base64encodedauthhere' \
  -H 'Content-Type: application/json'
```

### Example Successful Response
200 OK
```json
{
    "cardId": "943206946",
    "boardId": "944515478",
    "boardTitle": "Child board",
    "isFollowable": true,
    "isArchived": false,
    "isRemovable": true,
    "parentBoardVersion": "95",
    "boardVersion": "2"
}
```

