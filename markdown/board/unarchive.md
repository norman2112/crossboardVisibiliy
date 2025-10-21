---
title: Unarchive a board
public: true
repo: core-board-service
---
# POST /io/board/:boardId/unarchive
Restore a board from the board archive.

_Requires the Account Administrator account role._

### Example Request
```shell
curl -X POST \
  https://myaccount.leankit.com/io/board/10113986616/unarchive \
  -H 'Authorization: Basic base64encodedauthhere='
```

### Example Response
204 No Content

