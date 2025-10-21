---
public: false
title: Upload a user avatar
repo: core-account-service
---
# POST /io/user/avatar
Upload an avatar image for a user.

### Validation

Uploaded avatar will be validated against the following criteria:
|attribute|validation|
|---|---|
|`width`| min `128px`, max `1024px`|
|`height`| min `128px`, max `1024px`|
|`file type`| must be a `jpg`, `jpeg`, or `png`|
|`file size`| must not exceed `10mb`|


### Example Request
The payload is a `multipart/form-data` payload with a `attachmentFile` form field name.
```
Content-Type: multipart/form-data; boundary=boundary
Content-Length: 354

--boundary--
Content-Disposition: form-data; name="attachmentFile"; filename="avatar.png"
Content-Type: application/octet-stream

<avatar.png>
--boundary--
```

### Example Successful Response

204 No Content
