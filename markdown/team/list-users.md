---
title: Get a list of team's users
public: true
repo: core-account-service
---
# GET /io/team/:teamId/user
Get a list of users assigned directly to the team - does not include users assigned to subteams.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first user to be returned|0|
|`limit`|integer|Set the number of users to be returned|200|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/team/100100/user?offset=0?limit=10 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "pageMeta": {
        "totalRecords": 3,
        "offset": 0,
        "limit": 10,
        "startRow": 1,
        "endRow": 3
    },
    "users": [
        {
            "id": "10626208486",
            "emailAddress": "bob@company.com",
            "enabled": true,
            "firstName": "Bob",
            "lastName": "User",
            "includedOn": "2023-06-22T18:36:08.070Z",
            "externalUserName": "",
            "licenseType": 0
        }, {
            "id": "10626208487",
            "emailAddress": "jane@company.com",
            "enabled": true,
            "firstName": "Jane",
            "lastName": "Doe",
            "includedOn": "2023-06-22T18:36:08.070Z",
            "externalUserName": "",
            "licenseType": 0
        }, {
            "id": "10626208488",
            "emailAddress": "john@company.com",
            "enabled": true,
            "firstName": "John",
            "lastName": "Smith",
            "includedOn": "2023-06-22T18:36:08.070Z",
            "externalUserName": "",
            "licenseType": 0
        }
    ]
}
```

### Response Properties
|Property|Type|Note|
|--------|----|----|
|`pageMeta`|object||
|`pageMeta.totalRecords`|integer|total number of users|
|`pageMeta.offset`|integer|offset used in query|
|`pageMeta.limit`|integer|limit used in query|
|`pageMeta.startRow`|integer|start row of returned users|
|`pageMeta.endRow`|integer|end row of returned users|
|`users`|array of users||
|`users[].id`|integer id|internal unique id|
|`users[].emailAddress`|string||
|`users[].enabled`|boolean||
|`users[].firstName`|string||
|`users[].lastName`|string||
|`users[].includedOn`|date||
|`users[].externalUserName`|string||
|`users[].licenseType`|int|0 = `full`, 2 = `reader`|
