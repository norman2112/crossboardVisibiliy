---
title: Get a list of custom icons for a board
public: true
repo: core-board-service
---
# GET /io/board/:boardId/customIcon
Get a list of custom icons for a board.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113014456/customIcon \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "customIcons": [
        {
            "id": "10113014777",
            "name": "API Testing",
            "policy": null,
            "iconPath": "/customicons/24/212121/someIcon.png",
            "iconColor": "212121",
            "iconName": "someIcon"
        },
        {
            "id": "10113014778",
            "name": "Standard",
            "policy": "",
            "iconPath": "/Content/Images/Icons/Library/blank.gif",
            "iconColor": null,
            "iconName": null
        }
    ]
}
```
