---
title: Get a list of team's subteams
public: true
repo: core-account-service
---
# GET /io/team/:teamId/subteam
Get a list of subteams assigned directly to the team.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first subteam to be returned|0|
|`limit`|integer|Set the number of subteams to be returned|200|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/team/100100/subteam?offset=0&limit=10 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "pageMeta": {
        "totalRecords": 2,
        "offset": 0,
        "limit": 10,
        "startRow": 1,
        "endRow": 2
    },
    "teams": [
        {
            "id": "10626208490",
            "title": "Team A",
            "description": null,
            "createdOn": "2023-06-22T18:40:52.623Z",
            "createdBy": {
                "id": "101040602",
                "emailAddress": "admin@company.com",
                "fullName": "John Smith"
            },
            "lastModifiedOn": "2023-06-22T18:40:52.623Z",
            "lastModifiedBy": {
                "id": "101040602",
                "emailAddress": "admin@company.com",
                "fullName": "John Smith"
            },
            "enabled": true,
            "organizationId": "101040097",
            "includedOn": "2023-06-22T18:41:54.840Z",
            "totalUserCount": 5,
            "subteamCount": 1,
            "teamType": {
                "key": "standard",
                "label": "Standard"
            }
        }, {
            "id": "10626208491",
            "title": "Team B",
            "description": null,
            "createdOn": "2023-06-22T18:40:52.623Z",
            "createdBy": {
                "id": "101040602",
                "emailAddress": "admin@company.com",
                "fullName": "Jane Doe"
            },
            "lastModifiedOn": "2023-06-22T18:40:52.623Z",
            "lastModifiedBy": {
                "id": "101040602",
                "emailAddress": "admin@company.com",
                "fullName": "Jane Doe"
            },
            "enabled": true,
            "organizationId": "101040097",
            "includedOn": "2023-06-22T18:41:54.840Z",
            "totalUserCount": 4,
            "subteamCount": 2,
            "teamType": {
                "key": "standard",
                "label": "Standard"
            }
        }
    ]
}
```

### Response Properties
|Property|Type|Note|
|--------|----|----|
|`pageMeta`|object||
|`pageMeta.totalRecords`|integer|total number of subteams|
|`pageMeta.offset`|integer|offset used in query|
|`pageMeta.limit`|integer|limit used in query|
|`pageMeta.startRow`|integer|start row of returned subteams|
|`pageMeta.endRow`|integer|end row of returned subteams|
|`teams`|array of subteams||
|`teams[].id`|integer id|internal unique id|
|`teams[].title`|string||
|`teams[].description`|string||
|`teams[].createdOn`|date||
|`teams[].createdBy`|object|example: `{ id: "101040602", emailAddress: "admin@company.com", fullName: "Jane Doe" }`|
|`teams[].lastModifiedOn`|date||
|`teams[].lastModifiedBy`|object|example: `{ id: "101040602", emailAddress: "admin@company.com", fullName: "Jane Doe" }`|
|`teams[].enabled`|boolean|team is enabled/disabled|
|`teams[].organizationId`|integer|internal unique id of organization|
|`teams[].includedOn`|date|date when the team was added as a subteam|
|`teams[].totalUserCount`|integer|number of distinct users in the subteam and all nested subteams|
|`teams[].subteamCount`|integer|number of subteams, not including nested subteams|
|`teams[].teamType`|enum|key is one of: `everyone`, `external`, `standard`, label is text equivalent|
