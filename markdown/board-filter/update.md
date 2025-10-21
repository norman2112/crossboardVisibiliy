---
title: Update a board filter
public: true
repo: core-board-service
---
# PATCH /io/board/:boardId/filter/:filterId
Update a board filter

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|---|
|`name`|string|Name of the filter||
|`isShared`|boolean|Share the filter with other users|false|
|`filters.filterTagByOr`|boolean|Should the tags filter use AND or OR||
|`filters.parentCards`|string array|List of parent card ids, `-1` can be used for `Not Assigned`|||
|`filters.parentCardView`|enumeration|Controls parent card filter display, not currently used||
|`filters.cardTypes`|string array|List of card type ids||
|`filters.classOfServices`|string array|List of custom icon ids, `-1` can be used for `Not Assigned`|||
|`filters.blocks`|integer array|`1` indicates blocked cards, `0` is cards that are not blocked||
|`filters.priorities`|integer array|List of priority values<br />`0` (Normal) <br /> `1` (Low) <br /> `2` (High) <br /> `3` (Critical)||
|`filters.users`|string array|List of assigned user ids||
|`filters.title`|string|Title or custom id match||
|`filters.startDate`|integer|Planned start date is before this number of days from now||
|`filters.finishDate`|integer|Planned finish date is before this number of days from now||
|`filters.plannedStartRange.start`|date|Planned start date is on or after this date||
|`filters.plannedStartRange.end`|date|Planned start date is on or before this date||
|`filters.plannedFinishRange.start`|date|Planned finish date is on or after this date||
|`filters.plannedFinishRange.end`|date|Planned finish date is on or before this date||
|`filters.tags`|string array|List of tags||
|`filters.activity.mode`|enumeration|Possible values are <br />`noActivity` <br />`withActivity` <br /> `notMoved` <br />`haveMoved`||
|`filters.activity.days`|integer|Number of days applied to the activity mode||
|`filters.customFields.id`|string|Id of the custom field being filtered||
|`filters.customFields.type`|enumeration|Possible values are <br />`text` <br />`number` <br />`date` <br />`choice` <br />`multi`||
|`filters.customFields.filterMethod`|string|Describes the method with which the filter will be applied||
|`filters.customFields.value`|string or string array|The value or list of values for the filter||
|`filters.cardScoring.min`|integer|Minimum card scoring range value||
|`filters.cardScoring.max`|integer|Maximum card scoring range value||

### Example Request
Minimal request
```json
{
  "filters": {
    "tags": [ "two" ]
  }
}
```
All fields
```json
{
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
        "blocks": [
            1
        ],
        "priorities": [
            2,
            0
        ],
        "users": [
          "478440842"
        ],
        "title": "sample title",
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
            "one",
            "two"
        ],
        "activity": {
            "mode": "withActivity",
            "days": 14
        },
        "customFields": [
            { "id": "123", "type": "text", "filterMethod": "contains|notContain", "value": "value" },
            { "id": "234", "type": "number", "filterMethod": "is|greater|less", "value": "5" },
            { "id": "345", "type": "date", "filterMethod": "is|after|before", "value": "2020-01-13" },
            { "id": "456", "type": "choice", "filterMethod": "contains|notContain", "value": ["value","another"] },
            { "id": "567", "type": "multi", "filterMethod": "contains|notContain", "value": ["5","6"] },
        ],
        "cardScoring": {
          "min": 1,
          "max": 99
        }
    }
}
```

### Example Successful Response
200 OK

```json
{
    "id": "956623925",
    "boardId": "621306390",
    "name": "Sample filter",
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
        "blocks": [
          1
        ],
        "priorities": [
            2,
            0
        ],
        "users": [
            "478440842"
        ],
        "title": "sample title",
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
        "customFields": [
            { "id": "123", "type": "text", "filterMethod": "contains|notContain", "value": "value" },
            { "id": "234", "type": "number", "filterMethod": "is|greater|less", "value": "5" },
            { "id": "345", "type": "date", "filterMethod": "is|after|before", "value": "2020-01-13" },
            { "id": "456", "type": "choice", "filterMethod": "contains|notContain", "value": ["value","another"] },
            { "id": "567", "type": "multi", "filterMethod": "contains|notContain", "value": ["5","6"] },
        ],
        "cardScoring": {
          "min": 1,
          "max": 99
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

