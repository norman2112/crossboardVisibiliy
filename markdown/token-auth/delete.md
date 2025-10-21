---
title: Delete an authentication token
public: true
repo: core-leankit-api
---
# DELETE /io/auth/token/:tokenId
Delete an authentication token.

> __You can also manage your tokens by choosing the "My API Tokens" tab in your LeanKit User Profile.__

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/auth/token/124321442234 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response
204 No Content
