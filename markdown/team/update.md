---
title: Update a team
public: true
repo: core-account-service
---
# PATCH /io/team/:teamId
Update a team. The team title, the team description and the enabled status can be updated.

_Requires authentication as account administrator or team manager who created the team._ \
_Team titles must be unique._ \
_Teams that are not enabled cannot be edited, they can only be re-enabled._ \
_Cannot disable built-in teams: Everyone and External Users._ \
_Teams that are not enabled are treated as if they do not exist. However, if they are re-enabled they will retain all users, subteams and board permissions._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|----|
|`title`|string|Team title, Min: 1, Max: 255||
|`description`|string|Team description, Max: 500|""|
|`enabled`|boolean|Enabled|true|

### Example Request
```
curl -X PATCH \
  https://myaccount.leankit.com/io/team/12345678' \
  -H 'Authorization: Basic base64encodedauth' \
  -d '{ "title": "Updated team", "description": "My first team is updated", "enabled": true }'
```

### Example Successful Response

200 Success
```json
{
    "id": "10626232120",
    "title": "My Team",
    "description": null,
    "createdOn": "2023-09-25T13:28:20.497Z",
    "createdBy": {
        "id": "101040602",
        "emailAddress": "admin@company.com",
        "fullName": "John Smith"
    },
    "lastModifiedOn": "2023-09-25T13:31:43.960Z",
    "lastModifiedBy": {
        "id": "101040602",
        "emailAddress": "admin@company.com",
        "fullName": "John Smith"
    },
    "enabled": true,
    "organizationId": "101040097",
    "teamType": {
        "key": "standard",
        "label": "Standard"
    }
}
```
### Response Properties
|Property|Type|Note|
|--------|----|----|
|`id`|integer id|internal unique id|
|`title`|string||
|`description`|string||
|`createdOn`|date||
|`createdBy`|object|example: `{ id: "101040602", emailAddress: "admin@company.com", fullName: "Jane Doe" }`|
|`lastModifiedOn`|date||
|`lastModifiedBy`|object|example: `{ id: "101040602", emailAddress: "admin@company.com", fullName: "Jane Doe" }`|
|`enabled`|boolean|team is enabled/disabled|
|`organizationId`|integer|internal unique id of organization|
|`teamType`|enum|key is one of: `everyone`, `external`, `standard`, label is text equivalent|


