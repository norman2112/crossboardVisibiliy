---
title: Update a lane
public: true
repo: core-board-service
---
# PATCH /io/board/:boardId/lane/:laneId
Update a lane.

_Requires authentication with at least board manager role on the board specified._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|---|
|`title`|string|Set the lane title on the board||
|`type`||_not supported._ This property is no longer used and may be removed||
|`description`|string|Set the "lane policy" which is viewable when clicking the "i" on a lane. Expects html.||
|`wipLimit`|integer|Set the work in progress (WIP) limit. Appears in the top right of the lane title||
|`isDefaultDropLane`|boolean|Set to 'true' to use this lane as the default drop lane when adding cards. There can be only one default drop lane.||
|`isConnectionDoneLane`|boolean|Deprecated in favor of `cardStatus`: `finished`||
|`cardStatus`|string|`notStarted`, `started`, or `finished`||

For the body, you need only include the properties that you wish to edit. Properties not specified will not be changed.

### Example Requests

Setting a lane as a 'done' lane
```json
{
	"cardStatus": "finished"
}
```
Updating the lane's title and description
```json
{
	"title": "new lane title",
	"description": "the new lane policy"
}

```

### Example Successful Response

200 Success
```json
{
    "id": "10105826895",
    "boardId": "10100193219",
    "title": "Under Review",
    "type": "inProcess",
    "cardStatus": "started",
    "description": "<p>How to use this lane</p>",
    "wipLimit": 5,
    "isDefaultDropLane": false,
    "isConnectionDoneLane": false,
    "sortBy": "priority"
}
```
