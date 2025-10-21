---
title: Get a list of attachments for a card
public: true
repo: core-leankit-api
---
# GET /io/card/:cardId/attachment
Get a list of attachments for a card.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206946/attachment \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "attachments": [
        {
            "id": "943867019",
            "createdOn": "2019-12-04T20:37:23Z",
            "createdBy": {
                "id": "478440842",
                "emailAddress": "user@leankit.com",
                "fullName": "First Last",
                "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
            },
            "text": "<p>This is a sample attachment</p>"
        }
    ]
}
```
