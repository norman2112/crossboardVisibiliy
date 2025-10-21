---
public: false
title: Update the requesting user's settings
repo: core-account-service
---
# POST /io/user/setting
Update the settings of the requesting user.

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`name`*|`string`|||
|`value`*|varies|||

This endpoint is different from most of our other endpoints because it has multiple uses and, therefore, different schemas. The `name` of the setting determines the shape of the `value`.

Acceptable `name` values:

* `CollapsedLanes`
* `RecentBoards`
* `FirstAccess`
* `showSimulationTutorial`
* `UseMondayForCalendarWeekViewStart`
* `AvatarBounds`
* `NonPaymentDialogShownForDate`
* `DialogShownForRange`
* `SavedFilters`
* `ParentPanel`
* `FavoriteBoards`

### `CollapsedLanes`

|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`boardId`*|`integer`|||
|`value`*|array|A list of laneIds||

#### Example Request
```json
{
  "name": "CollapsedLanes",
  "boardId": "20022002",
  "value": ["11100111", "11100112"]
}
```

### `RecentBoards`

|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`value`*|integer|A board id to add to the recent boards list||

#### Example Request
```json
{
  "name": "RecentBoards",
  "value": "20022002"
}
```

### `FirstAccess`, `showSimulationTutorial`, `UseMondayForCalendarWeekViewStart`,

|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`value`*|boolean|||

#### Example Request
```json
{
  "name": "showSimulationTutorial",
  "value": true
}
```

### `AvatarBounds`

|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`value`*|array|List of integers describing avatar bounds||

#### Example Request
```json
{
  "name": "AvatarBounds",
  "value": [100, 200, 300, 400]
}
```

### `NonPaymentDialogShownForDate`

|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`value`*|datetime|||

#### Example Request
```json
{
  "name": "NonPaymentDialogShownForDate",
  "value": "2019-06-19T08:30:06.283185Z"
}
```

### `DialogShownForRange`

|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`value`*|string|Options:<br />`First`<br />`Second`<br />`Third`<br />`Forth`<br />`Fifth`||

#### Example Request
```json
{
  "name": "DialogShownForRange",
  "value": "First"
}
```

### `SavedFilters`

|Param|Type|Usage|Default|
|-----|-----|-------|---|
|`boardId`*|integer|||
|`value.selectedFilterId`|integer|id of the selected filter||
|`value.mode`*|string|`off`, `highlight` or `showOnly`||
|`value.cardTypes`|string array|List of card type ids||
|`value.classOfServices`|string array|List of classes of service ids, `-1` can be used for `Not Assigned`|||
|`value.priorities`|integer array|List of priority values<br />`0` (Normal) <br /> `1` (Low) <br /> `2` (High) <br /> `3` (Critical)||
|`value.blocks`|integer array|`1` indicates blocked cards, `0` is cards that are not blocked||
|`value.parentCards`|string array|List of parent card ids, `-1` can be used for `Not Assigned`|||
|`value.parentCardView`|enumeration|Controls parent card filter display, not currently used||
|`value.users`|string array|List of assigned user ids||
|`value.startDate`|integer|Planned start date is before this number of days from now||
|`value.finishDate`|integer|Planned finish date is before this number of days from now||
|`value.title`|string|Title or custom id match||
|`value.tags`|string array|List of tags||
|`value.plannedStartRange.start`|date|Planned start date is on or after this date||
|`value.plannedStartRange.end`|date|Planned start date is on or before this date||
|`value.plannedFinishRange.start`|date|Planned finish date is on or after this date||
|`value.plannedFinishRange.end`|date|Planned finish date is on or before this date||
|`value.FilterTagByOr`|boolean|Should the tags filter use AND or OR||
|`value.FilterStaleness`|boolean|Should the filter include stale cards||
|`value.FilterStalenessDays`|integer|Number of days to consider a card as "stale"||
|`value.activity.mode`|enumeration|Possible values are <br />`noActivity` <br />`withActivity` <br /> `notMoved` <br />`haveMoved`||
|`value.activity.days`|integer|Number of days applied to the activity mode||
|`value.customFields.id`|string|Id of the custom field being filtered||
|`value.customFields.type`|enumeration|Possible values are <br />`text` <br />`number` <br />`date` <br />`choice` <br />`multi`||
|`value.customFields.filterMethod`|string|Describes the method with which the filter will be applied||
|`value.customFields.value`|string or string array|The value or list of values for the filter||
|`value.cardScoring.min`|integer|Minimum card scoring range value||
|`value.cardScoring.max`|integer|Maximum card scoring range value||

#### Example Request
```json
{
  "name": "SavedFilters",
  "boardId": "20022002",
  "value": {
    "mode": "highlight",
    "title": "some title"
  }
}
```

### `ParentPanel`

|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`boardId`*|`integer`|||
|`value.panelOpen`|boolean|Should the parent panel be open or closed||
|`value.mode`|string|`both`, `cards` or `boards`||
|`value.connectionsVisible`|boolean|Should the connection yarn be shown||

#### Example Request
```json
{
  "name": "ParentPanel",
  "boardId": "20022002",
  "value": {
    "panelOpen": true,
    "mode": "cards",
    "connectionsVisible": true
  }
}
```

### `FavoriteBoards`

|Param|Type|Usage|Default|
|-----|-----|-----|-------|
|`value`*|array|A list of boardIds||

#### Example Request
```json
{
  "name": "FavoriteBoards",
  "value": [ "10011001", "20022002" ]
}
```
