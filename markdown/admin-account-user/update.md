---
public: false
title: Update a user
repo: core-account-service
---
# PATCH /io/admin/account/:accountId/user/:userId
Returns a user in an organization.

_Requires system administrator access._

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-------|---|
| `requestsPerWindow` |integer| Number of requests per time window that the user can make |Defaults to `-1` which will use default rate limit values. Setting to `0` will block the user immediately.|

### Example Request
```json
{
  "requestsPerWindow": 10
}
```

### Example Successful Response

200 Success

```json
{
    "id": "25012",
    "fullName": "User One",
    "emailAddress": "user1@mycompany.com",
    "enabled": true,
    "licenseType": "full",
    "requestsPerWindow": 10
}
```

### User Properties
|Property|Type|Note|
|--------|----|----|
|`id`|string id||
|`fullName`|string||
|`emailAddress`|string||
|`enabled`|boolean||
|`licenseType`|string|`full`, `reader`, or `focused`|
|`requestsPerWindow`|integer||
