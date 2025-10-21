---
title: Delete a planning increment by id
public: true
repo: core-account-service
---
# DELETE /io/series/:seriesId/increment/:incrementId
Delete a planning increment by id.

_Requires the Account Administrator or Team Organizer account role._

### Example Request
```shell
curl -X DELETE https://myaccount.leankit.com/io/series/394206946/increment/99343503 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

204 No Content

