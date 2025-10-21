---
title: Revoke an open user invitation
public: true
repo: core-account-service
---
# PATCH /io/invitation/:invitationId
Revoke an open user invitation. (You can also un-revoke if you like.)
### Example Request Body
```json
{
    "isRevoked": true
}
```
### Successful Response
204 No Content
