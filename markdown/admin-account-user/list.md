---
public: false
title: Get a list of users in any organization
repo: core-account-service
---
# GET /io/admin/account/:accountId/user
Returns a paginated list of users in any organization.

_Requires system administrator access._

### Query Params
|Param|Type|Usage|Default|
|-----|-----|------|-------|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|25|
|`sortBy`|enumeration|Set the ordering of the results|lastName|
|`search`|string|Keyword search for by user name and email address||

Valid `sortBy` options:
* newUsers
* enabled
* disabled
* firstNameDesc
* firstNameAsc
* licenseTypeAsc
* licenseTypeDesc
* lastName

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/admin/account/0000/user?limit=10&offset=50' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

200 Success

```json
{
    "pageMeta": {
        "totalRecords": 99,
        "offset": 0,
        "limit": 25,
        "startRow": 1,
        "endRow": 25
    },
    "users": [
        {
            "id": "25012",
            "fullName": "User One",
            "emailAddress": "user1@mycompany.com",
            "enabled": true,
            "licenseType": "full",
            "requestsPerWindow": -1
        },
        {
            "id": "25013",
            "fullName": "User Two",
            "emailAddress": "user2@mycompany.com",
            "enabled": true,
            "licenseType": "full",
            "requestsPerWindow": -1
        }
    ]
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
