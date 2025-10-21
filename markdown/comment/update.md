---
title: Update a comment
public: true
repo: core-card-service
---
# PUT /io/card/:cardId/comment/:commentId
Update a comment.

### Example Request
```json
{
    "text": "Sample comment body with updates"
}
```

### Example Successful Response
200 OK

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
    "text": "Sample comment body with updates"
}
```

