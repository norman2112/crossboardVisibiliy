---
public: true
title: Change a user's password
repo: core-account-service
---
# PATCH /io/user/:userId/password
Change a user's password.

_Requires account administrator access._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|---|
|`password`*|string|The user's password|

### Example Request
```json
{
  "password": "anotherSecurePassword"
}
```

### Example Successful Response

200 Success
```json
{
  "id": "10113041625",
  "username": "someone@mycompany.com",
  "firstName": "SomeOne",
  "lastName": "Else",
  "fullName": "SomeOne Else",
  "emailAddress": "someone@mycompany.com",
  "lastAccess": null,
  "dateFormat": "MM/dd/yyyy",
  "administrator": true,
  "enabled": false,
  "deleted": false,
  "organizationId": "10187654101",
  "boardCreator": true,
  "timeZone": "America/New_York",
  "licenseType": "full",
  "externalUserName": null,
  "avatar": "https://bigfood.localkanban.com/avatar/show/10113041625/?s=25",
  "settings": {},
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
|`timeZone`|string|See [valid timezones](/markdown/01-overview/time-zones.md).|
|`licenseType`|string|`full`, `reader`, or `focused`. Only present if `reader` or `focused` users are enabled for the account|
|`externalUserName`|string||
|`avatar`|string||
|`settings`|object|Contains a key/value hash of user settings|
|`boardRoles`|array|Contains the user's access information for the organization's boards|


