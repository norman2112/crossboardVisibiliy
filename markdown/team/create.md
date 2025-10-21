---
title: Create a team
public: true
repo: core-account-service
---
# POST /io/team/
Create a team. Teams are enabled by default. Teams are not associated with any other teams, boards, or users when created. You must add parent teams, subteams, users and boards to the team after it is created.

_Requires authentication as account administrator or team manager._ /
_Team titles must be unique._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|----|
|`title`*|string|Team title, Min: 1, Max: 255||
|`description`|string|Team description, Max: 500|""|
|`enabled`|boolean|Enabled|true|

\* required

### Example Request
Minimum fields required
```
curl -X POST \
  https://myaccount.leankit.com/io/team' \
  -H 'Authorization: Basic base64encodedauth' \
  -d '{ "title": "The title of the team" }'
```

All fields
```
curl -X POST \
  https://myaccount.leankit.com/io/team' \
  -H 'Authorization: Basic base64encodedauth' \
  -d '{ "title": "The title of the team", "description": "My first team", "enabled": true }'
```

### Example Successful Response

201 Created
```json
{
    "id": "10626232120",
    "title": "Another Team",
    "description": null,
    "createdOn": "2023-09-25T13:28:20.497Z",
    "createdBy": {
        "id": "101040602",
        "emailAddress": "admin@company.com",
        "fullName": "Jane Doe"
    },
    "lastModifiedOn": "2023-09-25T13:28:20.497Z",
    "lastModifiedBy": {
        "id": "101040602",
        "emailAddress": "admin@company.com",
        "fullName": "Jane Doe"
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




