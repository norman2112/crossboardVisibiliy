---
title: Delete a card by id
public: true
repo: core-leankit-api
---
# DELETE /io/card/:cardId
Delete a card by id. The board setting "Allow users to delete cards" must be checked.

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/card/943206946 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

204 No Content

