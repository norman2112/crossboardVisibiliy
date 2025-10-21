---
title: Create an attachment
public: true
repo: core-leankit-api
---
# POST /io/card/:cardId/attachment
Create an attachment.

### Example Request
The payload is a `multipart/form-data` payload with a `description` and `file`.
```
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Length: 354

------WebKitFormBoundary7MA4YWxkTrZu0gW--,
Content-Disposition: form-data; name="description"

This is the description
------WebKitFormBoundary7MA4YWxkTrZu0gW--
Content-Disposition: form-data; name="file"; filename="sample.txt"
Content-Type: application/octet-stream

This is just a test doc.
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```
### Example Successful Response
201 Created

```json
{
    "id": "947451120",
    "attachmentSize": 13,
    "createdBy": {
        "id": "478440842",
        "emailAddress": "user@leankit.com",
        "fullName": "First Last",
        "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
    },
    "changedBy": null,
    "createdOn": "2019-12-11T21:00:34Z",
    "updatedOn": "2019-12-11T21:00:34Z",
    "description": "This is the description",
    "name": "sample.txt",
    "storageId": "XXXXXXX-XXXX-XXXX-XXXX-XXXXXXX"
}
```

