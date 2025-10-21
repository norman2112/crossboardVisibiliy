---
public: true
title: Update the requesting user
repo: core-account-service
---
# PATCH /io/user/me
Update the requesting user.

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`firstName`|string|||
|`lastName`|string|||
|`timeZone`|string|See [valid timezones](/markdown/01-overview/time-zones.md).|Etc/GMT|
|`dateFormat`|enumeration|`MM/dd/yyyy`, `dd/MM/yyyy`, or `yyyy/MM/dd`||
|`locale`|enumeration|||
|`useMondayForStartOfWeek`|boolean|||

Supported locales:
* `en-US`
* `en-GB`
* `en-CA`
* `fr-FR`
* `fr-CA`

### Example Request
```json
{
  "firstName": "SomeOne",
  "lastName": "Else",
  "timeZone": "America/New_York",
  "locale": "en-US",
  "useMondayForStartOfWeek": true
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
  "administrator": false,
  "enabled": true,
  "deleted": false,
  "organizationId": "10187654101",
  "boardCreator": false,
  "timeZone": "America/New_York",
  "licenseType": "full",
  "externalUserName": null,
  "avatar": "https://bigfood.localkanban.com/avatar/show/10113041625/?s=25",
  "settings": {
    "locale": "en-US",
    "useMondayForCalendarWeekViewStart": true
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


