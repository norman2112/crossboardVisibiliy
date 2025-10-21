---
title: List card faces
preview: true
public: false
repo: core-card-service
---
# GET /io/cardface/
Get cards on a board. This is used to populate the card faces when loading a LeanKit board.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`board`|string|(required) The board for which to get card faces.||
|`lanes`|string|Specify a comma-delimited list of lane Ids to limit the result to these lanes.||
|`cards`|string|Specify a comma-delimited list of card Ids to limit the result to these cards only.||
|`ignoreArchiveDate`|boolean|Set to 'true' to include cards that have already been archived and would not normally appear on the board.|false|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|200|

### Example Request
```shell
curl -X GET \
  https://acmeco.leankit.com/io/cardface?board=10100193219&limit=10&lanes=10106271134,10112558841' \
  -H 'Authorization: Basic ZGFuaEBwbGFudmlldy4jb206dGVzdDEyMzQ=' \
  -H 'Content-Type: application/json' \
```

### Example Successful Response

200 Success
```json
{
    "pageMeta": {
        "totalRecords": 18,
        "offset": 0,
        "limit": 10,
        "startRow": 1,
        "endRow": 10
    },
    "cards": [
        {
            "id": "10105790505",
            "title": "Title for 10105790505",
            "index": 1,
            "laneId": "10106271134",
            "boardId": "10100193219",
            "color": "#9AB6FD",
            "tags": [
                "Tag1"
            ],
            "size": 2,
            "priority": "high",
            "plannedStart": "2019-11-25",
            "plannedFinish": "2019-11-27",
            "actualStart": "2015-09-08T21:36:37Z",
            "actualFinish": null,
            "archivedOn": null,
            "isDone": false,
            "createdOn": "2015-12-01T12:22:34.000Z",
            "movedOn": "2015-12-09T23:27:48.000Z",
            "updatedOn": "2019-11-26T21:33:32.000Z",
            "externalLinks": [
                {
                    "label": "LeanKit",
                    "url": "http://leankit.com/"
                }
            ],
            "customIconLabel": "Class of Service",
            "blockedStatus": {
                "isBlocked": false,
                "reason": null
            },
            "customIcon": null,
            "customHeader": {
                "value": "Sample Card",
                "header": "Sample Card",
                "url": null
            },
            "taskBoardStats": null,
            "containingCardId": null,
            "cardType": {
                "id": "10100191335",
                "name": "CardType for 10100191335"
            },
            "subscriptionId": null,
            "scoring": {
              "confidenceTotal": 33.5,
              "scoreOverride": 76,
              "scoreTotal": 43.1,
              "isTemplateChanged": false,
              "scores": [
                  {
                      "metricId": "1",
                      "score": 27.1,
                      "confidence": 45.7
                  },
                  {
                      "metricId": "2",
                      "score": 88.1,
                      "confidence": 98.7
                  }
              ],
            },
            "parentCards": [],
            "assignedUsers": [],
            "connectedCardStats": {
                "startedCount": 2,
                "startedSize": 2,
                "notStartedCount": 0,
                "notStartedSize": 0,
                "completedCount": 1,
                "completedSize": 1,
                "blockedCount": 0,
                "totalCount": 3,
                "totalSize": 3,
                "plannedStart": null,
                "plannedFinish": null,
                "actualStart": "2019-11-26T16:43:34Z",
                "actualFinish": null,
                "pastDueCount": 0,
                "projectedLateCount": 0
            },
            "customFields": {
                "943852689": "Custom Field value",
                "10113041726": "Another value"
            },
            "planningIncrementIds": [
              "10114179392",
              "10114179393"
            ],
            "dependencyStats": {
              "incomingCount": 5,
              "incomingResolvedCount": 2,
              "incomingExceptionCount": 1,
              "incomingUnresolvedBlockedCount": 1,
              "outgoingCount": 4,
              "outgoingResolvedCount": 1,
              "outgoingExceptionCount": 1,
              "outgoingUnresolvedBlockedCount": 1,
              "totalCount": 9,
              "totalResolvedCount": 3,
              "totalExceptionCount": 2,
              "totalUnresolvedBlockedCount": 2
            }
        }
		{
			// more cards here
		}
	]
}
```
### Response Properties
|Property|Type|Note|
|--------|----|----|
|`id`|integer id|internal unique id|
|`title`|string||
|`index`|integer|The position of card (or task) in current lane.|
|`laneId`|integer|The internal unique id of current lane.|
|`boardId`|integer|The internal unique id of board.|
|`color`|hex value||
|`tags`|string array|for example: `[ "bob", "sam" ]`|
|`size`|integer|The user-determined size of card (or task).|
|`priority`|priority value|"low", "normal", "high", or "critical"|
|`plannedStart`|date||
|`plannedFinish`|date||
|`actualStart`|date||
|`actualFinish`|date||
|`archivedOn`|date||
|`isDone`|boolean|Returns `true` when the card has been moved to archive or a `done` lane.|
|`movedOn`|date||
|`updatedOn`|date||
|`externalLinks`|externalLink array| `{ label: "instagram", url: "http://instagram.com" }`|
|`customIcon.id`|integer id||
|`customIcon.cardColor`|hex value||
|`customIcon.iconColor`|hex value||
|`customIcon.iconName`|string||
|`customIcon.iconPath`|stromg||
|`blockedStatus.isBlocked`|boolean||
|`blockedStatus.reason`|string||
|`customHeader.value`|string|Depending on configuration, this may appear in the card or task header.|
|`customHeader.header`|string|The computed value of the card's header. It is the `value` prefixed with `customId.prefix` below.|
|`customHeader.url`|string|When configured, displays the url link for the header.|
|`taskBoardStats.totalCount`|integer||
|`taskBoardStats.completedCount`|integer||
|`taskBoardStats.totalSize`|integer||
|`taskBoardStats.completedSize`|integer||
|`containingCardId`|integer|This is populated when the current object is a task.|
|`cardType.id`|integer||
|`cardType.name`|string||
|`subscriptionId`|integer|This is for internal subscription tracking only; do not use.|
|`scoring`|object|Card scoring data, Example: `{ confidenceTotal: 34, scoreOverride: 99, scoreTotal: 72, isTemplateChanged: false, scores: [ { metricId: 1, score: 27.1, confidence: 45.7 } ] }`|
|`parentCards`|array of parentCard|Example: `{ id: 123, title: "A parent card" }`|
|`assignedUsers`|array of users|Example: `{ id: 123, fullName: "John Smith", avatar: (link to avatar), emailAddress: "john@myco.com" }`|
|`connectedCardStats.startedCount`|integer||
|`connectedCardStats.startedSize`|integer||
|`connectedCardStats.notStartedCount`|integer||
|`connectedCardStats.notStartedSize`|integer||
|`connectedCardStats.completedCount`|integer||
|`connectedCardStats.completedSize`|integer||
|`connectedCardStats.blockedCount`|integer||
|`connectedCardStats.totalCount`|integer||
|`connectedCardStats.totalSize`|integer||
|`connectedCardStats.plannedStart`|date||
|`connectedCardStats.plannedFinish`|date||
|`connectedCardStats.actualStart`|date||
|`connectedCardStats.actualFinish`|date||
|`connectedCardStats.pastDueCount`|integer||
|`connectedCardStats.projectedLateCount`|integer||
|`customFields`|object| The object keys are the custom field id, and the values are the custom field value.  Example: `{ 943852689: "Custom Field Value" }`|
|`planningIncrementIds`|array of planning increment ids||
|`dependencyStats.incomingCount`|integer|Incoming dependencies are cards that this card depends on|
|`dependencyStats.incomingResolvedCount`|integer|Incoming dependencies that are already resolved|
|`dependencyStats.incomingExceptionCount`|integer|Unresolved incoming dependencies that have exceptions (blocked, date mismatches, late to start or finish) |
|`dependencyStats.incomingUnresolvedBlockedCount`|integer|Unresolved incoming dependencies that are blocked |
|`dependencyStats.outgoingCount`|integer|Outgoing dependencies are cards that depend on this card|
|`dependencyStats.outgoingResolvedCount`|integer|Outgoing dependencies that are already resolved by this card|
|`dependencyStats.outgoingExceptionCount`|integer|Unresolved outgoing dependencies that have exceptions (blocked, date mismatches, late to start or finish)|
|`dependencyStats.outgoingUnresolvedBlockedCount`|integer|Unresolved outgoing dependencies that are blocked|
|`dependencyStats.totalCount`|integer|Total of incoming and outgoing dependencies|
|`dependencyStats.totalResolvedCount`|integer|Total resolved|
|`dependencyStats.totalExceptionCount`|integer|Total exceptions|
|`dependencyStats.totalUnresolvedBlockedCount`|integer|Total unresolved blocked dependencies|
