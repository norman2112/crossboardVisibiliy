---
title: Get a list of parent board connections
public: true
repo: core-leankit-api
---
# GET /io/card/:cardId/connection/parent-boards
Get a list of parent board connections. This is the unique set of parent boards related to the parent card.

|Param|Usage|Default|
|-----|-----|-------|
|offset|Set the "start row" number of the first card to be returned.|0|
|limit|Set the number of boards to be returned.|25|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206946/connection/parent-boards \
  -H 'Authorization: Basic base64encodedauthhere' \
  -H 'Content-Type: application/json'
```

### Example Successful Response
200 OK
```json
{
    "pageMeta": {
        "totalRecords": 2,
        "offset": 0,
        "limit": 200,
        "startRow": 1,
        "endRow": 2
    },
    "boards": [
        {
            "boardId": "943188457",
            "boardTitle": "Example board",
            "canView": true,
            "isArchived": false
        },
        {
            "boardId": "943926001",
            "boardTitle": "Parent board",
            "canView": true,
            "isArchived": false
        }
    ]
}
```
