---
title: Create a drill through board connection to the card's current board
deprecated: true
public: false
repo: core-leankit-api
---
# PUT /io/card/:cardId/connection/same
Create a drill through board connection to the card's current board

```shell
curl -X PUT \
  https://myaccount.leankit.com/io/card/943206946/connection/same \
  -H 'Authorization: Basic base64encodedauthhere' \
  -H 'Content-Type: application/json'
```

### Example Successful Response
200 OK
```json
{
    "cardId": "944607454",
    "boardId": "944576308",
    "boardTitle": "Current Board",
    "isFollowable": true,
    "isArchived": false,
    "isRemovable": true,
    "parentBoardVersion": "3"
}
```

