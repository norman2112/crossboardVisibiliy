---
title: Delete all connections by board id
public: true
repo: core-leankit-api
---
# DELETE /io/card/:cardId/connection/:boardId
Delete every connection to child cards on the specified board.

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/card/943206946/connection/943929912 \
  -H 'Authorization: Basic base64encodedauthhere' \
  -H 'Content-Type: application/json'
```

### Example Successful Response
200 OK
```json
{
    "parentBoardVersion": "86",
    "boardVersion": "14"
}
```

