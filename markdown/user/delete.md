---
public: true
title: Delete a user
repo: core-account-service
---
# DELETE /io/user/:userId
Delete a user.

_Requires account administrator access._

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/user/25012' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

204 No Content
