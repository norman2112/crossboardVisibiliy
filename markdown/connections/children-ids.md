---
title: Get a list of child cards' ids only
public: false
repo: core-card-service
---
# GET /io/card/:cardId/connection/children/ids
Get a list of child card ids for a parent card.

Note: This is an internal endpoint. It was created as a performance enhancement for Tasktop integrations.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|200|

### Example Request
```
curl -X GET \
  https://myaccount.leankit.com/io/card/999999999/connection/children/ids' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

200 Success
```json
{
    "pageMeta": {
        "totalRecords": 3,
        "offset": 0,
        "limit": 200,
        "startRow": 1,
        "endRow": 3
    },
    "ids": [
        "888888888",
        "777777666",
        "666666666"
    ]
}```

