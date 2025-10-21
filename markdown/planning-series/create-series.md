---
title: Create a new planning series
public: true
repo: core-account-service
---
# POST /io/series
Create a new planning series.

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
curl POST 'https://myaccount.leankit.com/io/series' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic base64encodedauthhere' \
--data-raw '{
    "label": "New Series"
}'
```

### Example Response
```json
{
  "id": "10214170098",
  "label": "New Series",
  "timeZone": "Etc/GMT",
  "allowAllBoards": false,
  "organizationId": "10000000000",
  "boards": [
    {
      "id": "101000032066894",
      "title": "test board",
      "level": {
        "id": "101000034443626",
        "depth": 2,
        "maxDepth": 3,
        "label": "level one",
        "color": "#2966a3"
      }
    }
  ]
}
```
