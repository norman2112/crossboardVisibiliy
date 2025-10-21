---
title: Get a team
public: true
repo: core-account-service
---
# GET /io/team/:teamId
Get a team.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/team/100100 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "id": "100100",
    "title": "First Team",
    "description": null,
    "createdOn": "2023-06-22T18:32:02.843Z",
    "createdBy": {
        "id": "101040602",
        "emailAddress": "admin@company.com",
        "fullName": "Jane Doe"
    },
    "lastModifiedOn": "2023-06-22T18:32:02.843Z",
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
