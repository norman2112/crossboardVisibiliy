---
title: Get a list of custom fields on a board
public: true
repo: core-leankit-api
---
# GET /io/board/:boardId/customfield
Get a list of custom fields on a board.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113014456/customfield \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "limit": 8,
    "customFields": [
        {
            "id": "10113041726",
            "index": 0,
            "type": "text",
            "label": "Field Name",
            "helpText": "Here is some helpful text",
            "createdOn": "2020-01-10T20:50:43Z",
            "createdBy": "25035"
        }
    ]
}
```

_Note: `limit` is the maximum number of custom fields that can be created for the board_
