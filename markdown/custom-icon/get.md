---
title: Get a single custom icon on a board
public: true
repo: core-board-service
---
# GET /io/board/:boardId/customIcon/:customIconId
Get a single custom icon on a board.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113014456/customIcon/10113014778 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "id": "10113014777",
    "name": "API Testing",
    "policy": null,
    "iconPath": "/customicons/24/212121/someIcon.png",
    "iconColor": "212121",
    "iconName": "someIcon"
}
```
