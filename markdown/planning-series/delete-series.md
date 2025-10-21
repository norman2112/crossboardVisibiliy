---
title: Delete a series by id
public: true
repo: core-account-service
---
# DELETE /io/series/:seriesId
Delete a series by id.

_Requires the Account Administrator or Team Organizer account role._

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/series/394206946 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

204 No Content

