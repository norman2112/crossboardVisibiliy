---
title: Create an authentication token
public: true
repo: core-leankit-api
---
# POST /io/auth/token
Create an authentication token. Make sure that you choose a meaningful description when you post, and record the token received from this request. This is the only time it is displayed.

> __You can also manage your tokens by choosing the "My API Tokens" tab in your LeanKit User Profile.__

### Request Properties
|Param|Type|Usage|Default|
|-----|----|-----|-------|
|`description`*|string|Description of the token||

### Sample Request
```json
{
    "description": "The token description"
}
```

### Example Successful Response
201 Created

```json
{
    "id": "101000029635727",
    "token": "theauthtoken",
    "description": "test token",
    "createdOn": "2020-01-14T22:28:10.798Z"
}
```

