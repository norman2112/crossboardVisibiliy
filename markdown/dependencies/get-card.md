---
title: Get a list of dependencies for a card
public: true
repo: core-leankit-api
---
# GET /io/card/:cardId/dependency
Get a list of dependencies for a card

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`includeFaces`|boolean|Pass "true" to also include the card face with each result|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206946/dependency?includeFaces=true \
  -H 'Authorization: Basic base64encodedauthhere' \
  -H 'Content-Type: application/json'
```

Note: dependency `direction` field can either be `incoming` or `outgoing`. An `incoming` dependency is one where the original card (from the url) depends on the card listed in the dependency. An `outgoing` dependency is one where the original card (from the url) is depended on by the card listed in the dependency.

**Timing values**:

- *startToStart* - Dependency can’t start until the card starts
- *startToFinish* - Dependency can’t finish until the card starts
- *finishToStart* - Dependency can’t start until the card finishes
- *finishToFinish* - Dependency can’t finish until the card finishes

### Example Successful Response
200 OK
```json
{
	"dependencies": [
		{
			"direction": "outgoing",
			"cardId": "5252812",
			"timing": "finishToFinish",
			"createdOn": "2025-06-10T19:32:57.237Z",
			"face": {
				"id": "5252812",
				"title": "3",
				"index": 2,
				"laneId": "5147995",
				"boardId": "5147970",
				"cardStatus": "started",
				"color": "#BA7070",
				"tags": [],
				"size": 0,
				"priority": "normal",
				"plannedStart": null,
				"plannedFinish": null,
				"actualStart": "2025-06-10T19:30:59Z",
				"actualFinish": null,
				"isDone": false,
				"movedOn": "2025-06-10T19:30:59.053Z",
				"updatedOn": "2025-06-10T19:40:51.150Z",
				"externalLinks": [],
				"customIconLabel": "Class of Service",
				"isMirroredCard": false,
				"blockedStatus": {
					"isBlocked": false,
					"reason": null
				},
				"customIcon": null,
				"customHeader": {
					"value": null,
					"header": null,
					"url": null
				},
				"taskBoardStats": null,
				"containingCardId": null,
				"cardType": {
					"id": "5147974",
					"name": "Architectural Enabler Story"
				},
				"subscriptionId": null,
				"attachmentsCount": 0,
				"commentsCount": 0,
				"archivedOn": null,
				"parentCards": [],
				"assignedUsers": [],
				"connectedCardStats": null,
				"customFields": {},
				"planningIncrements": [],
				"reactions": [],
				"assignedTeams": [],
				"policyRuleFieldIdViolations": []
			}
		}
	]
}
```

### Response Properties
|Property|Type|Note|
|--------|----|----|
|`direction`|string|`outgoing` (depends on the `:cardId`) or `incoming` (depended on by the `:cardId`)|
|`cardId`|integer id|internal unique id|
|`timing`|enumeration|Possible values: `startToStart`, `startToFinish`, `finishToStart` or `finishToFinish`|
|`createdOn`|date|The date that the dependency was created|
|`face.id`|integer id|internal unique id|
|`face.title`|string||
|`face.index`|integer|The position of card (or task) in current lane.|
|`face.laneId`|integer|The internal unique id of current lane.|
|`face.boardId`|integer|The internal unique id of board.|
|`face.color`|hex value||
|`face.tags`|string array|for example: `[ "bob", "sam" ]`|
|`face.size`|integer|The user-determined size of card (or task).|
|`face.priority`|priority value|"low", "normal", "high", or "critical"|
|`face.plannedStart`|date||
|`face.plannedFinish`|date||
|`face.actualStart`|date||
|`face.actualFinish`|date||
|`face.archivedOn`|date||
|`face.isDone`|boolean|Returns `true` when the card has been moved to archive or a `done` lane.|
|`face.movedOn`|date||
|`face.updatedOn`|date||
|`face.externalLinks`|externalLink array| `{ label: "instagram", url: "http://instagram.com" }`|
|`face.customIcon.id`|integer id||
|`face.customIcon.cardColor`|hex value||
|`face.customIcon.iconColor`|hex value||
|`face.customIcon.iconName`|string||
|`face.customIcon.iconPath`|stromg||
|`face.blockedStatus.isBlocked`|boolean||
|`face.blockedStatus.reason`|string||
|`face.customHeader.value`|string|Depending on configuration, this may appear in the card or task header.|
|`face.customHeader.header`|string|The computed value of the card's header. It is the `value` prefixed with `customId.prefix` below.|
|`face.customHeader.url`|string|When configured, displays the url link for the header.|
|`face.taskBoardStats.totalCount`|integer||
|`face.taskBoardStats.completedCount`|integer||
|`face.taskBoardStats.totalSize`|integer||
|`face.taskBoardStats.completedSize`|integer||
|`face.containingCardId`|integer|This is populated when the current object is a task.|
|`face.cardType.id`|integer||
|`face.cardType.name`|string||
|`face.subscriptionId`|integer|This is for internal subscription tracking only; do not use.|
|`scoring`|object|Card scoring data, Example: `{ confidenceTotal: 34, scoreOverride: 99, scoreTotal: 72, isTemplateChanged: false, scores: [ { meface.tricId: 1, score: 27.1, confidence: 45.7 } ] }`|
|`face.parentCards`|array of parentCard|Example: `{ id: 123, title: "A parent card" }`|
|`face.assignedUsers`|array of users|Example: `{ id: 123, fullName: "John Smith", avatar: (link to avatar), emailAddress: "john@myco.com" }`|
|`face.connectedCardStats.startedCount`|integer||
|`face.connectedCardStats.startedSize`|integer||
|`face.connectedCardStats.notStartedCount`|integer||
|`face.connectedCardStats.notStartedSize`|integer||
|`face.connectedCardStats.completedCount`|integer||
|`face.connectedCardStats.completedSize`|integer||
|`face.connectedCardStats.blockedCount`|integer||
|`face.connectedCardStats.totalCount`|integer||
|`face.connectedCardStats.totalSize`|integer||
|`face.connectedCardStats.plannedStart`|date||
|`face.connectedCardStats.plannedFinish`|date||
|`face.connectedCardStats.actualStart`|date||
|`face.connectedCardStats.actualFinish`|date||
|`face.connectedCardStats.pastDueCount`|integer||
|`face.connectedCardStats.projectedLateCount`|integer||
|`customFields`|object| The object keys are the custom field id, and the values are the custom field value.  Example: `{ 943852689: "Custom Field Vaface.lue" }`|
|`face.planningIncrementIds`|array of planning increment ids||
|`face.dependencyStats.incomingCount`|integer|Incoming dependencies are cards that this card depends on|
|`face.dependencyStats.incomingResolvedCount`|integer|Incoming dependencies that are already resolved|
|`dependencyStats.incomingExceptionCount`|integer|Unresolved incoming dependencies that have exceptions (blocked, date mismatches, late to start or fiface.nish) |
|`face.dependencyStats.outgoingCount`|integer|Outgoing dependencies are cards that depend on this card|
|`face.dependencyStats.outgoingResolvedCount`|integer|Outgoing dependencies that are already resolved by this card|
|`dependencyStats.outgoingExceptionCount`|integer|Unresolved outgoing dependencies that have exceptions (blocked, date mismatches, late to start or fiface.nish)|
|`face.dependencyStats.totalCount`|integer|Total of incoming and outgoing dependencies|
|`face.dependencyStats.totalResolvedCount`|integer|Total resolved|
|`face.dependencyStats.totalExceptionCount`|integer|Total exceptions|
