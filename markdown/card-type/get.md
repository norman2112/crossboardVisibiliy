---
title: Get a single card type on a board
public: true
repo: core-board-service
---
# GET /io/board/:boardId/cardType/:cardTypeId
Get a single card type on a board.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113014456/cardType/10113014462 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
  "id": "10113014462",
  "name": "Feature",
  "colorHex": "#BFDFC2",
  "isDefault": true,
  "isCardType": true,
  "isTaskType": true,
  "isDefaultTaskType": false
}
```
