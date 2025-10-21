---
title: Delete a custom icon
public: true
repo: core-board-service
---
# DELETE /io/board/:boardId/customIcon/:customIconId
Delete a custom icon on a board.

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/board/10113014456/customIcon/10113014462 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response
204 No Content
