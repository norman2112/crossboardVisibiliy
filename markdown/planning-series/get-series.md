---
title: Get a specified planning series
public: true
repo: core-account-service
openApi: true
operationId: getPlanningSeries
---
# GET /io/series/:seriesId
Get a planning series by id.


### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/series/1234 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example successful response
200 OK
```json
{
    "id": "10114170098",
    "label": "Planning Series 2",
    "timeZone": "Etc/GMT",
    "allowAllBoards": false,
    "organizationId": "48392349",
    "boards": [
        {
            "id": "101000032066894",
            "title": "test board",
            "level": {
                "id": "101000034443626",
                "depth": 2,
                "maxDepth": 3,
                "label": "test label",
                "color": "#2966a3"
            }
        }
    ]
}
```
