---
title: List card faces
preview: true
public: true
repo: core-leankit-api
---
# GET /io/board/:boardId/card
Get cards on a board. Sometimes referred to as the "card face" endpoint, this is used to populate the card faces when loading a LeanKit board.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`lanes`|string|Specify a comma-delimited list of lane Ids to limit the result to these lanes.||
|`cards`|string|Specify a comma-delimited list of card Ids to limit the result to these cards only.||
|`ignoreArchiveDate`|boolean|Set to 'true' to include cards that have already been archived and would not normally appear on the board.|false|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|200|

### Example Request
```shell
curl -X GET \
  https://acmeco.leankit.com/io/board/10100193219/card?limit=10&lanes=10106271134,10112558841' \
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
            "id": "29392943",
            "title": "Title for 10105790505",
            "index": 1,
            "laneId": "10106271134",
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
            "isDone": false,
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
            "customId": {
                "value": "Sample Card",
                "prefix": null,
                "url": null
            },
            "taskBoardStats": null,
            "containingCardId": null,
            "cardType": {
                "id": "10100191335",
                "name": "CardType for 10100191335"
            },
            "subscriptionId": null,
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
            "scoring": {
                "isTemplateChanged": false,
                "scoreTotal": 48.91,
                "scoreOverride": null,
                "confidenceTotal": 55.62,
                "scores": [
                    {
                        "metricId": "1",
                        "score": 31.86,
                        "confidence": 68.21
                    },
                    {
                        "metricId": "2",
                        "score": 57.74,
                        "confidence": 50.28
                    },
                    {
                        "metricId": "3",
                        "score": 41.98,
                        "confidence": 61.53
                    },
                    {
                        "metricId": "4",
                        "score": 43.52,
                        "confidence": 41.40
                    }
                ]
            },
            "canView": true
        },
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
|`color`|hex value||
|`tags`|string array|for example: `[ "bob", "sam" ]`|
|`size`|integer|The user-determined size of card (or task).|
|`priority`|priority value|"low", "normal", "high", or "critical"|
|`plannedStart`|date||
|`plannedFinish`|date||
|`actualStart`|||
|`actualFinish`|||
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
|`customId.value`|string or integer|Similar to customHeader, this is included backward compatibility.|
|`customId.prefix`|string|The configured prefix for the customId / header.|
|`customId.url`|string|When configured, displays the url link for the header.|
|`taskBoardStats.totalCount`|integer||
|`taskBoardStats.completedCount`|integer||
|`taskBoardStats.totalSize`|integer||
|`taskBoardStats.completedSize`|integer||
|`containingCardId`|integer|This is populated when the current object is a task.|
|`cardType.id`|integer||
|`cardType.name`|string||
|`subscriptionId`|integer|This is for internal subscription tracking only; do not use.|
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
|`canView`|boolean|Returns `true` if the current user can view the card. This is generally useful in relationship to parent cards. In some cases, a user might know that a particular parent card exists, but does not have permission on that card's board to view the card. |

