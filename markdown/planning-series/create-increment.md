---
title: Create a new planning increment
public: true
repo: core-account-service
---
# POST /io/series/:seriesId/increment
Create a new planning increment.

_Requires the Account Administrator or Team Organizer account role._

### Request Body Properties
|Param|Type|Usage|
|---|---|---|
|`label`*|string|Increment label.|
|`startDate`*|string|Start date of this increment (e.g. "2022-01-01")|
|`endDate`*|string|End date of this increment (e.g. "2022-01-31")|
|`parentPlanningIncrementId`|nullable string|IncrementId to specify as this increment's parent.|

\* Required<br />

### Example Request
```shell
curl POST 'https://myaccount.leankit.com/io/series/10214170098/increment' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic base64encodedauthhere' \
--data-raw '{
    "label": "PI-1",
    "startDate": "2021-05-01",
    "endDate": "2021-06-24",
    "parentPlanningIncrementId": "93942034"
}'
```

### Example Response
```json
{
  "id": "10114169191",
  "label": "PI-1",
  "planningSeriesId": "10214170098",
  "startDate": "2021-05-01",
  "endDate": "2021-06-24",
  "parentPlanningIncrementId": "93942034"
}
```
