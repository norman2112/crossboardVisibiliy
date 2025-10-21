---
title: Get an attachment's contents
public: true
repo: core-leankit-api
---
# GET /io/card/:cardId/attachment/:attachmentId/content
Get an attachment's contents.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206946/attachment/947451120/content \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 OK
```
(attachment contents)
```
