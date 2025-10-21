---
title: Delete an account
public: false
repo: core-account-service
---
# DELETE /io/admin/account/:accountId

Queue a job to delete an account and all related data (transactional and reporting). Account must be suspended or merged.

_Requires system administrator access._

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/admin/account/0000' \
  -H 'Authorization: Basic base64encodedauth'
```

### Example Successful Response

202 Accepted
