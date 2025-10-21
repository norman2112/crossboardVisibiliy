---
title: Delete a board
public: true
repo: core-board-service
---
# DELETE /io/board/:boardId
Delete a board in your organization.

_Requires the Account Administrator account role._

### Example Request

```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/board/10113986378 \
  -H 'Authorization: Basic base64encodedauth='
```

### Example Successful Response

204 No Content

