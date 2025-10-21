---
title: Get a board filter
public: true
repo: core-board-service
---
# GET /io/board/:boardId/filter/:filterId
Get a board filter by id.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/943206946/filter/29234888 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "id": "956623925",
    "boardId": "621306390",
    "name": "test",
    "filters": {
        "filterTagByOr": false,
        "parentCards": [
            "682817489"
        ],
        "parentCardView": "textView",
        "cardTypes": [
            "622011857",
            "622011860"
        ],
        "classOfServices": [
            "622033247",
            -1
        ],
        "blocks": [],
        "priorities": [
            2,
            0
        ],
        "users": [
            "478440842"
        ],
        "title": "oof",
        "startDate": 2,
        "finishDate": 4,
        "plannedStartRange": {
            "start": "2020-01-07",
            "end": "2020-01-09"
        },
        "plannedFinishRange": {
            "start": "2020-01-09",
            "end": "2020-01-11"
        },
        "tags": [
            "one"
        ],
        "activity": {
            "mode": "withActivity",
            "days": 14
        },
        "customFields": {
            "id": "82048732",
            "type": "text",
            "filterMethod": "contains",
            "value": "search string"
        }
    },
    "isShared": true,
    "user": {
        "id": "478440842",
        "firstName": "First",
        "lastName": "Last",
        "avatar": "https://myaccount.leankit.com/avatar/show/478440842/?s=25"
    }
}
```
