---
public: true
title: Get a list of users in an organization
repo: core-account-service
---
# GET /io/user
Returns a paginated list of users in an organization. The list will have a maximum of 1000 results.

_Requires account administrator access._

### Query Params
|Param|Type|Usage|Default|
|-----|-----|------|-------|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of users to be returned.|100|
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
  https://myaccount.leankit.com/io/user?limit=10&offset=50' \
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
            "username": "user1@mycompany.com",
            "firstName": "User",
            "lastName": "One",
            "fullName": "User One",
            "emailAddress": "user1@mycompany.com",
            "lastAccess": "2018-10-19T19:47:24.890Z",
            "dateFormat": "MM/dd/yyyy",
            "administrator": true,
            "enabled": true,
            "deleted": false,
            "organizationId": "10187654101",
            "boardCreator": true,
            "timeZone": "America/Los_Angeles",
            "licenseType": "full",
            "externalUserName": "user1@mycompany.com",
            "createdOn": "2015-04-14T20:48:58.283Z",
            "accountOwner": false,
            "avatar": "https://mycompany.leankit.com/avatar/show/25012/?s=25"
        },
        {
            "id": "25013",
            "username": "user2@mycompany.com",
            "firstName": "User",
            "lastName": "Two",
            "fullName": "User Two",
            "emailAddress": "user2@mycompany.com",
            "lastAccess": "2018-10-19T19:47:24.890Z",
            "dateFormat": "MM/dd/yyyy",
            "administrator": true,
            "enabled": true,
            "deleted": false,
            "organizationId": "10187654101",
            "boardCreator": true,
            "timeZone": "America/Los_Angeles",
            "licenseType": "full",
            "externalUserName": "user1@mycompany.com",
            "createdOn": "2015-04-14T20:48:58.283Z",
            "accountOwner": false,
            "avatar": "https://mycompany.leankit.com/avatar/show/25013/?s=25"
        }
    ]
}
```

### User Properties
|Property|Type|Note|
|--------|----|----|
|`id`|string id||
|`username`|string||
|`firstName`|string||
|`lastName`|string||
|`fullName`|string||
|`emailAddress`|string||
|`lastAccess`|date||
|`dateFormat`|string||
|`administrator`|boolean||
|`enabled`|boolean||
|`deleted`|boolean||
|`organizationId`|string||
|`boardCreator`|boolean||
|`timeZone`|string||
|`licenseType`|string|`full`, `reader`, or `focused`. Only present if `reader` or `focused` users are enabled for the account|
|`externalUserName`|string||
|`avatar`|string||
