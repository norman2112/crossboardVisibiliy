---
title: List board users
public: true
repo: core-leankit-api
---
# GET /io/board/:boardId/user
List board users and roles.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first user to be returned.|0|
|`limit`|integer|Set the number of users to be returned. max `100` |25|
|`search`|string|Specify a name or email to limit the results||
|`sortBy`|enumeration|Sort by one of:<br />- `name`<br />- `role`<br />- `WIP`<br />- `license`||
|`sortDir`|enumeration|Required when using `sortBy`. Either `asc` or `desc`||
|`roleFilterList`|enumeration array|Specify the roles (by value) to restrict results to those roles. Any of:<br />- `0` (No Access)<br />- `1` (boardReader)<br />- `2` (boardUser)<br />- `3` (boardManager)<br />- `4` (boardAdministrator)
|`licenseFilterList`|enumeration array|Specify the license types to restrict results to those types.<br />- `0` (full)<br />- `1` (focused)<br />- `2` (reader)

### Example Requests
#### Default usage
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113285944/user \
  -H 'Authorization: Basic base64encodedauth=' \
```
#### Searching for a specific user by email
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113285944/user?search=bob@myco.com \
  -H 'Authorization: Basic base64encodedauth=' \
```
#### Sorting Results
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113285944/user?sortBy=name&sortDir=desc \
  -H 'Authorization: Basic base64encodedauth=' \
```
#### Requesting only board managers
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113285944/user?roleFilterList[]=3 \
  -H 'Authorization: Basic base64encodedauth=' \
```
#### Requesting only reader license types
_Note the syntax for specifying multiple array items._
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113285944/user?licenseFilterList[]=1 \
  -H 'Authorization: Basic base64encodedauth=' \
```

### Example Response
200 Success
```json
{
    "pageMeta": {
        "totalRecords": 3,
        "offset": 0,
        "limit": 25,
        "startRow": 1,
        "endRow": 3
    },
    "boardUsers": [
        {
            "userId": "10112942343",
            "firstName": "Bob",
            "lastName": "Smith",
            "emailAddress": "Bob@myco.com",
            "boardId": "10113285944",
            "administrator": false,
            "WIP": 0,
            "id": "10113991953",
            "licenseType": "focused",
            "role": {
                "key": "boardReader",
                "value": 1,
                "label": "Reader"
            },
            "assignedBoards": [
                {
                    "id": "10113986361",
                    "title": "Hey I made a board from a template"
                }
            ]
        },
        {
            "userId": "10113421486",
            "firstName": "Dan",
            "lastName": "Hounshell",
            "emailAddress": "danh@planview.com",
            "boardId": "10113285944",
            "administrator": false,
            "WIP": 0,
            "id": "10113566956",
            "licenseType": "full",
            "role": {
                "key": "boardUser",
                "value": 2,
                "label": "User"
            }
        },
        {
            "userId": "25034",
            "firstName": "Doug",
            "lastName": "Neiner",
            "emailAddress": "doug.neiner@leankit.com",
            "boardId": "10113285944",
            "administrator": false,
            "WIP": 0,
            "id": "10113873057",
            "licenseType": "full",
            "role": {
                "key": "boardUser",
                "value": 2,
                "label": "User"
            }
        }
    ]
}
```
