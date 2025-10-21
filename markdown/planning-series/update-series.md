---
title: Update an existing planning series
public: true
repo: core-account-service
---
# PATCH /io/series/:seriesId
Update an existing planning series.

_Requires the Account Administrator or Team Organizer account role._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|---|
|`label`*|string|The label for the new series.||
|`timeZone`|string|One of [valid timezones](/markdown/01-overview/time-zones.md).||
|`allowAllBoards`|boolean|Set to `true` to make the series available to all boards in your organization.|`false`|
|`boardIds`|array|Specify board ids (as string) that will use this series|[]|

\* Required<br />

### Example Request
```shell
curl PATCH 'https://myaccount.leankit.com/io/series/10214170098' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic base64encodedauthhere' \
--data-raw '{
    "label": "Edited Series label",
    "allowAllBoards": true
}'
```

### Example Response
```json
{
  "id": "10214170098",
  "label": "Edited Series label",
  "timeZone": "Etc/GMT",
  "allowAllBoards": true,
  "organizationId": "10000000000",
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
