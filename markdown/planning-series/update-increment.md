---
title: Update an existing planning increment
public: true
repo: core-account-service
---
# PATCH /io/series/:seriesId/increment/:incrementId
Update an existing planning increment.

_Requires the Account Administrator or Team Organizer account role._

### Request Body Properties
|Param|Type|Usage|
|---|---|---|
|`label`|string|Increment label.|
|`startDate`|string|Start date of this increment (e.g. "2022-01-01")|
|`endDate`|string|End date of this increment (e.g. "2022-01-31")|

Note: _All properties are optional, but at least one must be included._

### Example Request
```shell
curl PATCH 'https://myaccount.leankit.com/io/series/10214170098/increment/30420342' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic base64encodedauthhere' \
--data-raw '{
    "label": "Edited Increment label",
    "startDate": "2022-02-01"
}'
```

### Example Response
```json
{
    "id": "10114169191",
    "label": "PI-1",
    "planningSeriesId": "10114168786",
    "startDate": "2022-01-01",
    "endDate": "2022-01-31",
    "parentPlanningIncrementId": null
}
```
