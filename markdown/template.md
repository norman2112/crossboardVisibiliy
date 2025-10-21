---
title: Same short title
public: false # Set to 'true' to include this in our customer-facing documentation. Most endpoints should be public, eventually.
repo: fill-this-in
# optional (default is false)
# deprecated: (true|false)
# preview: (true|false)
# openApi: (true|false) Set this to true only to include this endpoint in openApi schema generation.

---
# GET /the/path
BRIEF description of the functionality. Interesting factiod is fine as well. List use cases if needed. If there is a newer way to perform this action link it here.

(ONLY INCLUDE IF SPECIAL CASE; EDIT TO REFLECT AUTHORIZATION AND OR ROLES REQUIRED): _Requires authentication with at least reader role on the board specified._

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first card to be returned.|0|
|`limit`|integer|Set the number of cards to be returned.|200|

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|----|
|`somevalue`*|integer|Required value example in the post body|1|

\* required

### Example Request
```
curl -X GET \
  https://myaccount.leankit.com/io/board/10100193219/card?limit=10&lanes=10106271134,10112558841' \
  -H 'Authorization: Basic base64encodedauth' \
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
|`index`|integer|position of card in current lane|
|`laneId`|integer|internal unique id of current lane|
|`color`|hex value||
|`tags`|string array|for example: `[ "bob", "sam" ]`|
|`externalLinks`|externalLink array| `{ label: "instagram", url: "http://instagram.com" }`|
|`parentCards`|array of parentCard| example: `{ id: 123, title: "A parent card" }`|
|`assignedUsers`|array of users| example: `{ id: 123, fullName: "John Smith", avatar: (link to avatar), emailAddress: "john@myco.com" }`|
|`connectedCardStats.startedCount`|integer||
|`connectedCardStats.startedSize`|integer||
|`connectedCardStats.notStartedCount`|integer||

### Notable Error Responses
(NOTE: ONLY INCLUDE IF CONFUSING OR NON-STANDARD)

| Status Code              | Error Message     | Reason                                 |
|--------------------------|-------------------|----------------------------------------|
| `422 Unprocessable Entity` | Confusing message | Better definition of confusing message |

