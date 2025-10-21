---
title: Delete a card type
public: true
repo: core-board-service
---
# DELETE /io/board/:boardId/cardType/:cardTypeId
Delete a card type on a board.

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/board/10113014456/cardType/10113014462 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response
204 No Content
