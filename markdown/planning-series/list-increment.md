---
title: Get a list of increments for a planning series
public: true
repo: core-account-service
openApi: true
operationId: listSeriesIncrements
---
# GET /io/series/:seriesId/increment
Get a list of increments and child increments for a planning series.

### Query Params
|Param|Type|Usage|Default|
|-----|-----|-----|-----|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|200|
|`sortBy`|enumeration|Set the ordering of the results.|dateAsc|

Valid `sortBy` options:
- dateDesc
- dateAsc

### Example Requests
```shell
curl -X GET \
  https://myaccount.leankit.com/io/series/12345/increment \
  -H 'Authorization: Basic base64encodedauthhere'

curl -X GET \
  https://myaccount.leankit.com/io/series/12345/increment?sortBy=dateDesc&limit=1&offset=1 \
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
    "increments": [
        {
            "id": "1014169191",
            "label": "PI-1",
            "planningSeriesId": "12345",
            "startDate": "2021-10-01",
            "endDate": "2021-11-15",
            "parentPlanningIncrementId": null
            "increments" [
                {
                    "id": "1014170402",
                    "label": "Sub-1",
                    "planningSeriesId": "12345",
                    "startDate": "2022-02-01",
                    "endDate": "2022-02-14",
                    "parentPlanningIncrementId": "1014169191"
                },
                {
                    "id": "1014170403",
                    "label": "Sub-2",
                    "planningSeriesId": "12345",
                    "startDate": "2022-02-15",
                    "endDate": "2022-02-28",
                    "parentPlanningIncrementId": "1014169191"
                }
            ]
        },
        {
            "id": "1014170401",
            "label": "PI-2",
            "planningSeriesId": "12345",
            "startDate": "2022-02-01",
            "endDate": "2022-02-28",
            "parentPlanningIncrementId": null,
            "increments": []
        }
    ]
}
```
