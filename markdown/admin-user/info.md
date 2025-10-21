---
public: false
title: Get info for a list user ids
repo: core-account-service
---
# POST /io/admin/user/info
Returns basic info about a list of users

_Requires system administrator access._

### Request Properties
|Param|Type|Usage|
|-----|-----|-------|
|`userIds`|string[]|List of userIds to return. Maximum of 100||

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
      }
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
