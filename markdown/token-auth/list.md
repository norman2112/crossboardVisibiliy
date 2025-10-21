---
title: Get the list of authentication tokens
public: true
repo: core-leankit-api
---
# GET /io/auth/token
Get the list of authentication tokens.

> __You can also manage your tokens by choosing the "My API Tokens" tab in your LeanKit User Profile.__

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/auth/token \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "tokens": [
        {
            "id": "1",
            "description": "Test Token",
            "createdOn": "2001-01-01T00:00:00Z"
        },
        {
            "id": "10112979107",
            "description": "Postman Token",
            "createdOn": "2017-08-29T19:09:43Z"
        }
    ]
}
```
