---
title: Get a list of teams
public: true
repo: core-account-service
---
# GET /io/team
Get a list of all teams for the organization.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first team to be returned|0|
|`limit`|integer|Set the number of teams to be returned|200|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/team?offset=0&limit=10 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
  {
    "pageMeta": {
          "totalRecords": 5,
          "offset": 0,
          "limit": 10,
          "startRow": 1,
          "endRow": 5
    },
    "teams": [ {
          "id": "10626168169",
          "title": "Everyone",
          "description": "Built-in team of all the organization’s users",
          "createdOn": "2022-10-06T18:44:48.870Z",
          "createdBy": {
              "id": "11000011",
              "emailAddress": "systemuser@leankit.com",
              "fullName": "System User"
          },
          "lastModifiedOn": "2022-10-06T18:44:48.870Z",
          "lastModifiedBy": {
              "id": "11000011",
              "emailAddress": "systemuser@leankit.com",
              "fullName": "System User"
          },
          "enabled": true,
          "organizationId": "101040097",
          "teamType": {
              "key": "everyone",
              "label": "Everyone"
        } }, {
          "id": "10626168170",
          "title": "External",
          "description": "Built-in team of all external users",
          "createdOn": "2022-10-06T18:44:48.873Z",
          "createdBy": {
              "id": "11000011",
              "emailAddress": "systemuser@leankit.com",
              "fullName": "System User"
          },
          "lastModifiedOn": "2022-10-06T18:44:48.873Z",
          "lastModifiedBy": {
              "id": "11000011",
              "emailAddress": "systemuser@leankit.com",
              "fullName": "System User"
          },
          "enabled": true,
          "organizationId": "101040097",
          "teamType": {
              "key": "external",
              "label": "External Users"
        } }, {
          "id": "10626208490",
          "title": "First Team",
          "description": null,
          "createdOn": "2023-06-22T18:40:52.623Z",
          "createdBy": {
              "id": "101040602",
              "emailAddress": "myadmin@company.com",
              "fullName": "Jane Doe"
          },
          "lastModifiedOn": "2023-06-22T18:40:52.623Z",
          "lastModifiedBy": {
              "id": "101040602",
              "emailAddress": "myadmin@company.com",
              "fullName": "Jane Doe"
          },
          "enabled": true,
          "organizationId": "101040097",
          "teamType": {
              "key": "standard",
              "label": "Standard"
          } },
          ... other teams ...
      ]
}
```


### Response Properties
|Property|Type|Note|
|--------|----|----|
|`pageMeta`|object||
|`pageMeta.totalRecords`|integer|total number of teams|
|`pageMeta.offset`|integer|offset used in query|
|`pageMeta.limit`|integer|limit used in query|
|`pageMeta.startRow`|integer|start row of returned teams|
|`pageMeta.endRow`|integer|end row of returned teams|
|`teams`|array of teams||
|`teams[].id`|integer id|internal unique id|
|`teams[].title`|string||
|`teams[].description`|string||
|`teams[].createdOn`|date||
|`teams[].createdBy`|object|example: `{ id: "101040602", emailAddress: "admin@company.com", fullName: "Jane Doe" }`|
|`teams[].lastModifiedOn`|date||
|`teams[].lastModifiedBy`|object|example: `{ id: "101040602", emailAddress: "admin@company.com", fullName: "Jane Doe" }`|
|`teams[].enabled`|boolean|team is enabled/disabled|
|`teams[].organizationId`|integer|internal unique id of organization|
|`teams[].teamType`|enum|key is one of: `everyone`, `external`, `standard`, label is text equivalent|
