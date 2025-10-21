---
title: Get lane counts
public: true
repo: core-board-service
---
# GET /io/board/:boardId/laneCount
Get the count of cards in a board's lanes.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`lanes`|string|Specify a comma-separated list of lanes for which you want counts.|all lanes on board|

### Example Request
```shell
curl -X GET \
  'https://myaccount.leankit.com/io/board/10113285944/laneCount?lanes=10113286046,10113286050' \
  -H 'Authorization: Basic base64encodedauthhere'
  ```

  ### Example Response
  ```json
  {
    "lanes": {
        "10113286046": {
            "cardCount": 2,
            "cardSize": "4"
        },
        "10113286050": {
            "cardCount": 0,
            "cardSize": "0"
        }
    }
  }
  ```
