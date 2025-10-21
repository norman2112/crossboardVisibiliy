---
title: Create a comment
public: true
repo: core-card-service
---
# POST /io/card/:cardId/comment
Create a comment.

### Example Request
```json
{
    "text": "Sample comment body"
}
```

### Example Successful Response
201 Created

```json
{
    "id": "947429871",
    "createdOn": "2019-12-11T20:23:17Z",
    "createdBy": {
        "id": "478440842",
        "emailAddress": "user@leankit.com",
        "fullName": "First Last",
        "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
    },
    "text": "Sample comment body"
}
```

