---
public: true
title: Get the requesting user
repo: core-account-service
openApi: true
operationId: getCurrentUser
---
# GET /io/user/me
Returns data for the requesting user.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/user/me' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

200 Success

```json
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
    "avatar": "https://mycompany.leankit.com/avatar/show/25012/?s=25",
    "settings": {
        "useMondayForCalendarWeekViewStart": false,
        "avatarBounds": "\"145, 90, 303, 248\"",
        "recentBoards": [
            10100191700,
            10112868410
        ],
        "favoriteBoards": [
            20200292700,
            20222868410
        ]
    },
    "boardRoles": [
        {
            "boardId": "10100000505",
            "WIP": null,
            "role": {
                "key": "boardReader",
                "value": 1,
                "label": "Reader"
            }
        }
    ]
}
```

### Response Properties
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
|`settings`|object|Contains a key/value hash of user settings|
|`boardRoles`|array|Contains the user's access information for the organization's boards|
