---
title: Get a list of planning series for an account
public: true
repo: core-account-service
openApi: true
operationId: listPlanningSeries
---

# GET /io/series
Get a list of planning series for an account.

### Query Params
|Param|Type|Usage|Default|
|-----|-----|------|-------|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|100|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/series \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example successful response

200 OK
```json
{
    "pageMeta": {
        "totalRecords": 2,
        "offset": 0,
        "limit": 100,
        "startRow": 1,
        "endRow": 2
    },
    "series": [
        {
            "id": "10114168785",
            "label": "Planning Series 1",
            "timeZone": "Etc/GMT",
            "allowAllBoards": false,
            "organizationId": "10100000101",
            "hideOutdatedIncrements": false
        },
        {
            "id": "10114168786",
            "label": "Planning Series 2",
            "timeZone": "Etc/GMT",
            "allowAllBoards": false,
            "organizationId": "10100000101",
            "hideOutdatedIncrements": true
        }
    ]
}
```
