---
title: Get a list of tags on a board
public: true
repo: core-board-service
---
# GET /io/board/:boardId/tag
Get a list of tags on a board. The response contains a key for each tag where the value is the number of times the tag is used on the board.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113014456/tag \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "tags": {
        "tag2": 2,
        "tag3": 1,
        "tag1": 1
    }
}
```
