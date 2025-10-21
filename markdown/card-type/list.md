---
title: Get a list of card types for a board
public: true
repo: core-board-service
---
# GET /io/board/:boardId/cardType
Get a list of card types for a board.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113014456/cardType \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "cardTypes": [
        {
            "id": "10113014460",
            "name": "Defect",
            "colorHex": "#F1C7C5",
            "isDefault": false,
            "isCardType": true,
            "isTaskType": true,
            "isDefaultTaskType": false
        },
        {
            "id": "10113014462",
            "name": "Feature",
            "colorHex": "#BFDFC2",
            "isDefault": true,
            "isCardType": true,
            "isTaskType": true,
            "isDefaultTaskType": false
        }
    ]
}
```
