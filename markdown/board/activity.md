---
title: Get recent board activity
public: false
repo: core-board-service
---

# GET /io/board/:boardId/activity
Get board activity.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`limit`|integer|Specify the number of events to receive|100|
|`eventId`|string|Support paging of events by specifying the last event id received.|null|
|`direction`|enumeration|Specify `older` posts as you scroll, or `newer`.|`older`|


### Example Requests

#### Defaults
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10100193219/activity' \
  -H 'Authorization: Basic base64encodedauth' \
```

####
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10100193219/activity?limit=25&eventId=457634234&direction=newer' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response
```json
{
    "events": [
        {
            "id": "10113988923",
            "type": "cardMoved",
            "timestamp": "2020-01-08T17:23:01Z",
            "user": {
                "id": "25019",
                "fullName": "John Martin",
                "avatar": "https://myaccount.leankit.com/avatar/show/25109/?s=25"
            },
            "data": {
                "card": {
                    "id": "10113988569",
                    "title": "Test card"
                },
                "fromLane": {
                    "id": "10113988905",
                    "title": "Doing Now: Dev"
                },
                "toLane": {
                    "id": "10113988921",
                    "title": "Doing Now: Review"
                }
            }
        }
    ]
}
```

#### Common Events
This is not a comprehensive list, but a sample of common event data objects.

#### cardCreated
```json
    {
        "card": {
            "id": "1234678",
            "title": "card title"
        },
        "lane": {
            "id": "88349234",
            "title": "Not Started - Incoming Requests"
        }
    }
```

#### cardChanged
```json
    {
        "card": {
            "id": "1234678",
            "title": "card title"
        },
        "fields": [
            {
                "name": "size",
                "oldValue": "0",
                "newValue": "4"
            },
            {
                "name": "priority",
                "oldValue": "normal",
                "newValue": "high"
            }
        ]
    }
```

#### cardChildConnectionCreated / cardChildConnectionDeleted
```json
    {
        "card": {
            "id": "1234678",
            "title": "card title"
        },
        "chilCard": {
            "id": "8675309",
            "title": "child 1"
        }
    }
```

#### cardDeleted
```json
    {
        "card": {
            "id": "1234678",
            "title": "card title"
        }
    }
```

#### cardMoved
```json
    {
        "card": {
            "id": "1234678",
            "title": "card title"
        },
        "fromLane": {
            "id": "1019342352",
            "title": "Ready"
        },
        "toLane": {
            "id": "1019342354",
            "title": "Working"
        }
    }
```

#### commentAdded
```json
    {
        "card": {
            "id": "1234678",
            "title": "card title"
        },
        "comment": "Well hello there"
    }
```

#### userAssigned / userUnassigned
```json
    {
        "card": {
            "id": "1234678",
            "title": "card title"
        },
        "user": {
            "id": "10113421486",
            "fullName": "Dan Hardington",
            "emailAddress": "danh@myco.com",
            "avatar": "https://myaccount.leankit.com/avatar/show/10112146/?s=25"
        }
    }
```
