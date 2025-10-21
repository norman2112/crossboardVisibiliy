---
public: false
title: Get users with explicit rate limits within an account
repo: core-account-service
---
# GET /io/admin/user/rateLimit
Returns basic info about a list of users who have explicit rate limits set

_Requires system administrator access._

### Example Successful Response

200 Success

```json
{
  "users": [
    {
      "id": "25012",
      "firstName": "User",
      "lastName": "One",
      "emailAddress": "user1@mycompany.com",
      "avatar": "https://mycompany.leankit.com/avatar/show/25012/?s=25",
      "organization": {
        "id": "10101",
        "title": "My Org",
        "hostname": "myorg",
        "accountId": "20202"
      },
      "requestsPerWindow": 10
    }
  ]
}
```

### Response Properties
|Property|Type|Note|
|--------|----|----|
|`id`|string id||
|`firstName`|string||
|`lastName`|string||
|`emailAddress`|string||
|`avatar`|string||
|`organization.id`|string id||
|`organization.title`|string||
|`organization.hostname`|string||
|`organization.accountId`|string id||
|`requestsPerWindow`|int||
