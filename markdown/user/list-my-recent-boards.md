---
public: true
title: Get the requesting user's favorite and most recently accessed boards
repo: core-leankit-api
---
# GET /io/user/me/board/recent
Returns a list of the requesting user's favorite and most recently accessed boards. It will return alphabetically-sorted favorite boards first and then recently accessed boards ordered by access date. The list will have a maximum of 10 results.

### Example Request
```
curl -X GET \
  https://myaccount.leankit.com/io/user/me/board/recent' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

200 Success

```json
{
    "boards": [
        {
            "id": "10113014456",
            "title": "Board One",
            "description": "Where we do some work!",
            "isWelcome": false,
            "isArchived": false,
            "isFavorite": true,
            "boardRole": "boardAdministrator"
        },
        {
            "id": "10112879419",
            "title": "Board Two",
            "description": null,
            "isWelcome": false,
            "isArchived": false,
            "isFavorite": false,
            "boardRole": "boardAdministrator"
        }
    ]
}
```
