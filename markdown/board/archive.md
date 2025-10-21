---
title: Archive a board
public: true
repo: core-board-service
---
# POST /io/board/:boardId/archive
Archive a board. Administrators will retain read-only access.

### Example Request
```shell
curl -X POST \
  https://myaccount.leankit.com/io/board/10113986616/archive \
  -H 'Authorization: Basic base64encodedauthhere='
```
### Example Response

204 No Content

