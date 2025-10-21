---
title: Get card details by card id
public: true
repo: core-card-service
openApi: true
---
# GET /io/card/:cardId
Get card details by card id.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`excludeComments`|boolean|Set to true to omit comments from response|false|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206946 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "actualFinish": "2019-12-05T21:52:12Z",
    "actualStart": "2019-12-05T21:52:10Z",
    "blockedStatus": {
        "isBlocked": true,
        "reason": "Blocked card reason",
        "date": "2019-12-04T20:38:33Z"
    },
    "board": {
        "id": "943188457",
        "title": "Example board",
        "version": "103",
        "isArchived": false
    },
    "customIcon": {
        "id": "943188468",
        "title": "Regulatory",
        "cardColor": "#FFFFFF",
        "iconColor": "49bbd6",
        "iconName": "lk_icons_final_05-11",
        "iconPath": "https://myaccount.leankit.com/customicons/24/49bbd6/lk_icons_final_05-11.png",
        "policy": ""
    },
    "customIconLabel": "Class of Service",
    "color": "#B8CFDF",
    "iconPath": null,
    "createdOn": "2019-12-03T23:27:44Z",
    "archivedOn": null,
    "description": "<p>The card three description</p>",
    "plannedFinish": "2019-12-23",
    "customId": {
        "value": "The card header text",
        "prefix": null,
        "url": null
    },
    "externalLinks": [
        {
            "label": "Link Title",
            "url": "https://www.leankit.com"
        }
    ],
    "id": "943206946",
    "index": 1,
    "lane": {
        "cardLimit": 0,
        "description": null,
        "id": "943188473",
        "index": 3,
        "laneClassType": "active",
        "laneType": "completed",
        "orientation": "vertical",
        "title": "Recently Finished",
        "taskBoard": null,
        "cardStatus": "finished"
    },
    "updatedOn": "2019-12-05T21:52:12Z",
    "movedOn": "2019-12-05T21:52:12Z",
    "priority": "high",
    "size": 2,
    "plannedStart": "2019-12-20",
    "tags": [
        "tagone",
        "tagtwo"
    ],
    "title": "Card Three",
    "version": "26",
    "type": {
        "id": "943188463",
        "title": "New Feature",
        "cardColor": "#B8CFDF"
    },
    "taskBoardStats": {
        "totalCount": 2,
        "completedCount": 1,
        "totalSize": 2,
        "completedSize": 1
    },
    "subscriptionId": "943850307",
    "createdBy": {
        "id": "478440842",
        "emailAddress": "user@leankit.com",
        "fullName": "First Last",
        "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
    },
    "updatedBy": {
        "id": "478440842",
        "emailAddress": "user@leankit.com",
        "fullName": "First Last",
        "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
    },
    "movedBy": {
        "id": "478440842",
        "emailAddress": "user@leankit.com",
        "fullName": "First Last",
        "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
    },
    "archivedBy": null,
    "assignedUsers": [
        {
            "id": "478440842",
            "emailAddress": "user@leankit.com",
            "fullName": "First Last",
            "firstName": "First",
            "lastName": "Last",
            "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25",

        }
    ],
    "assignedTeams": [
        {
            "id": "478440889",
            "title": "Team A",
            "hasAccess": true,
            "addedOn": "2020-08-08T12:59:59.027Z"
        }
    ],
    "attachments": [
        {
            "id": "943837391",
            "attachmentSize": 13,
            "createdBy": {
                "id": "478440842",
                "emailAddress": "user@leankit.com",
                "fullName": "First Last",
                "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
            },
            "changedBy": null,
            "createdOn": "2019-12-04T20:38:18Z",
            "updatedOn": "2019-12-04T20:38:18Z",
            "description": "Sample file description",
            "name": "sample.txt",
            "storageId": "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxx"
        }
    ],
    "commentsCount": 1,
    "childCommentsCount": 0,
    "planningIncrements": [
      {
        "id": "94385077777",
        "label": "Child Planning Increment 1",
        "startDate": "2022-01-01T00:00:00Z",
        "endDate": "2022-06-01T00:00:00Z",
        "series": {
            "id": "94385077775",
            "label": "Series With Boards",
            "timeZone": "Etc/GMT"
        },
        "parent": {
            "id": "94385077776",
            "label": "Higher Level Increment"
        }
      },
      {
        "id": "94385077888",
        "label": "Child Planning Increment 2",
        "startDate": "2022-07-01T00:00:00Z",
        "endDate": "2022-10-01T00:00:00Z",
        "series": {
            "id": "94385077775",
            "label": "Series With Boards",
            "timeZone": "Etc/GMT"
        },
        "parent": {
            "id": "94385077776",
            "label": "Higher Level Increment"
        }
      }
    ],
    "comments": [
        {
            "id": "943867019",
            "createdOn": "2019-12-04T20:37:23Z",
            "createdBy": {
                "id": "478440842",
                "emailAddress": "user@leankit.com",
                "fullName": "First Last",
                "avatar": "https://myaccount.leankit.com/avatar/Show/478440842?s=25"
            },
            "text": "<p>This is a sample comment</p>"
        }
    ],
    "parentCards": [
        {
            "cardId": "943926922",
            "boardId": "943188457"
        },
        {
            "cardId": "943941780",
            "boardId": "943926001"
        }
    ],
    "customFields": [
        {
            "fieldId": "943852689",
            "type": "text",
            "label": "Sample Label",
            "value": "Sample custom field value"
        }
    ],
    "scoring": {
        "isTemplateChanged": false,
        "scoreTotal": null,
        "scoreOverride": 99,
        "confidenceTotal": null,
        "scores": [
            {
                "metricId": "5",
                "score": 45.21,
                "confidence": 22.12
            },
            {
                "metricId": "6",
                "score": 88.35,
                "confidence": 90.09
            }
        ]
    },
    "connectedCardStats": {
        "startedCount": 2,
        "startedSize": 2,
        "notStartedCount": 1,
        "notStartedSize": 1,
        "completedCount": 1,
        "completedSize": 2,
        "blockedCount": 1,
        "totalCount": 4,
        "totalSize": 5,
        "plannedStart": "2019-12-05",
        "plannedFinish": "2019-12-11",
        "actualStart": "2019-12-04T20:26:34Z",
        "actualFinish": null,
        "pastDueCount": 0,
        "projectedLateCount": 0
    }
}
```
