---
public: false
title: Get a user avatar
repo: core-account-service
---
# GET /io/user/:userId/avatar
Returns avatar image for a given user.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`s`|integer|Specify the size in pixels of the avatar to be returned ( max 256px )|25|


### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/user/25012/avatar' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

Possible response content types are image/jpeg, and image/png.

200 Success
```
(avatar contents)
```
