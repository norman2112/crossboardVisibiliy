---
title: Delete a card scoring template
public: false
repo: core-board-service
---

# DELETE /io/board/:boardId/scoring/template/:templateId
Deletes the board-level template

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/board/:boardId/scoring/template/:templateId \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Response
```
204 No Content
```