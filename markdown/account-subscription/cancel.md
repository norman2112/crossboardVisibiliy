---
title: Cancel leankit subscription
public: false
repo: core-account-service
---
# DELETE /io/account/subscription
Cancel your LeanKit account subscription.
Only available for monthly-pay accounts and trial accounts.

_Requires an Account Owner user._
### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/account/subscription' \
  -H 'Authorization: Basic base64encodedauth'
```
### Example Response
204 No Content

