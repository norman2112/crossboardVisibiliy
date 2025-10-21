---
title: Get board details
public: true
repo: core-board-service
---
# GET /io/board/:boardId
Get the details of a board.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/943188457' \
  -H 'Authorization: Basic base64encodedauth' \
```
### Example Successful Response

200 Success
```json
{
    "users": [
        {
            "id": "478440842",
            "username": "user@leankit.com",
            "firstName": "First",
            "lastName": "Last",
            "fullName": "First Last",
            "emailAddress": "user@leankit.com",
            "gravatarLink": null,
            "avatar": null,
            "lastAccess": "2019-12-12T22:24:00.436Z",
            "dateFormat": "MM/dd/yyyy",
            "organizationId": "478671678",
            "boardId": "943188457",
            "wip": 0,
            "roleTypeId": 5,
            "settings": {},
            "boardRoles": []
        }
    ],
    "classesOfService": [
        {
            "id": "943188466",
            "name": "Date Dependent",
            "iconPath": "/customicons/24/212121/lk_icons_final_01-13.png",
            "policy": ""
        },
        {
            "id": "943188467",
            "name": "Expedite",
            "iconPath": "/customicons/24/e35027/lk_icons_final_01-03.png",
            "policy": ""
        },
        {
            "id": "943188468",
            "name": "Regulatory",
            "iconPath": "/customicons/24/49bbd6/lk_icons_final_05-11.png",
            "policy": ""
        },
        {
            "id": "943188469",
            "name": "Standard",
            "iconPath": "/customicons/24/212121/blank_icon.png",
            "policy": ""
        }
    ],
    "tags": [
        "tagone",
        "tagtwo"
    ],
    "customFields": [
        {
            "id": "943852689",
            "index": 0,
            "type": "text",
            "label": "Sample Label",
            "helpText": "Sample Text"
        }
    ],
    "id": "943188457",
    "title": "Example board",
    "description": "",
    "creationDate": "2019-12-12T22:24:00.436Z",
    "classOfServiceEnabled": true,
    "customIconFieldLabel": "Class of Service",
    "organizationId": "478671825",
    "version": "118",
    "cardColorField": 1,
    "isCardIdEnabled": true,
    "isHeaderEnabled": true,
    "isHyperlinkEnabled": false,
    "isPrefixEnabled": false,
    "prefix": null,
    "format": null,
    "isPrefixIncludedInHyperlink": false,
    "baseWipOnCardSize": false,
    "excludeCompletedAndArchiveViolations": false,
    "isDuplicateCardIdAllowed": true,
    "isAutoIncrementCardIdEnabled": false,
    "currentExternalCardId": "0",
    "isWelcome": false,
    "isShared": true,
    "isArchived": false,
    "sharedBoardRole": "3",
    "customBoardMoniker": null,
    "isPermalinkEnabled": false,
    "isExternalUrlEnabled": false,
    "allowUsersToDeleteCards": true,
    "allowPlanviewIntegration": false,
    "subscriptionId": null,
    "boardRole": "boardManager",
    "effectiveBoardRole": "boardManager",
    "cardTypes": [
        {
            "id": "943188459",
            "name": "Other Work",
            "colorHex": "#FFFFFF",
            "isCardType": true,
            "isTaskType": false
        },
        {
            "id": "943188460",
            "name": "Defect",
            "colorHex": "#F1C7C5",
            "isCardType": true,
            "isTaskType": false
        },
        {
            "id": "943188461",
            "name": "Documentation",
            "colorHex": "#D0CCE0",
            "isCardType": true,
            "isTaskType": false
        },
        {
            "id": "943188462",
            "name": "Improvement",
            "colorHex": "#BFDFC2",
            "isCardType": true,
            "isTaskType": false
        },
        {
            "id": "943188463",
            "name": "New Feature",
            "colorHex": "#B8CFDF",
            "isCardType": true,
            "isTaskType": false
        },
        {
            "id": "943188464",
            "name": "Risk / Issue",
            "colorHex": "#FAD7B2",
            "isCardType": true,
            "isTaskType": false
        },
        {
            "id": "943188465",
            "name": "Subtask",
            "colorHex": "#FFF8DF",
            "isCardType": false,
            "isTaskType": true
        }
    ],
    "laneClassTypes": [
        {
            "id": 0,
            "name": "active"
        },
        {
            "id": 2,
            "name": "archive"
        },
        {
            "id": 1,
            "name": "backlog"
        }
    ],
    "lanes": [
        {
            "id": "943188470",
            "name": "Not Started - Future Work",
            "description": null,
            "cardStatus": "notStarted",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 0,
            "parentLaneId": null,
            "activityId": null,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "columns": 3,
            "wipLimit": 0,
            "cardCount": 3,
            "cardSize": 3,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "backlog",
            "laneType": "ready",
            "isCollapsed": true
        },
        {
            "id": "943188475",
            "name": "New Requests",
            "description": null,
            "cardStatus": "notStarted",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 0,
            "parentLaneId": "943188470",
            "activityId": null,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": true,
            "columns": 1,
            "wipLimit": 0,
            "cardCount": 2,
            "cardSize": 2,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "backlog",
            "laneType": "ready",
            "isCollapsed": false
        },
        {
            "id": "943188478",
            "name": "Finished As Planned",
            "description": null,
            "cardStatus": "finished",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 0,
            "parentLaneId": "943188471",
            "activityId": null,
            "orientation": "horizontal",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "columns": 3,
            "wipLimit": 0,
            "cardCount": 0,
            "cardSize": 0,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "archive",
            "laneType": "untyped",
            "isCollapsed": false
        },
        {
            "id": "943188472",
            "name": "Doing Now",
            "description": null,
            "cardStatus": "started",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 1,
            "parentLaneId": null,
            "activityId": null,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "columns": 2,
            "wipLimit": 0,
            "cardCount": 3,
            "cardSize": 3,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "active",
            "laneType": "inProcess",
            "isCollapsed": false
        },
        {
            "id": "943188477",
            "name": "Started but not Finished",
            "description": null,
            "cardStatus": "finished",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 1,
            "parentLaneId": "943188471",
            "activityId": null,
            "orientation": "horizontal",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "columns": 3,
            "wipLimit": 0,
            "cardCount": 0,
            "cardSize": 0,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "archive",
            "laneType": "untyped",
            "isCollapsed": false
        },
        {
            "id": "943188474",
            "name": "Approved",
            "description": null,
            "cardStatus": "notStarted",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 2,
            "parentLaneId": "943188470",
            "activityId": null,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "columns": 1,
            "wipLimit": 0,
            "cardCount": 1,
            "cardSize": 1,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "backlog",
            "laneType": "ready",
            "isCollapsed": false
        },
        {
            "id": "943188476",
            "name": "Discarded Requests / Ideas",
            "description": null,
            "cardStatus": "finished",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 2,
            "parentLaneId": "943188471",
            "activityId": null,
            "orientation": "horizontal",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "columns": 3,
            "wipLimit": 0,
            "cardCount": 0,
            "cardSize": 0,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "archive",
            "laneType": "untyped",
            "isCollapsed": false
        },
        {
            "id": "943188479",
            "name": "Under Review",
            "description": null,
            "cardStatus": "started",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 2,
            "parentLaneId": null,
            "activityId": null,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "columns": 2,
            "wipLimit": 0,
            "cardCount": 2,
            "cardSize": 2,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "active",
            "laneType": "inProcess",
            "isCollapsed": false
        },
        {
            "id": "943188473",
            "name": "Recently Finished",
            "description": null,
            "cardStatus": "finished",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 3,
            "parentLaneId": null,
            "activityId": null,
            "orientation": "vertical",
            "isConnectionDoneLane": true,
            "isDefaultDropLane": false,
            "columns": 2,
            "wipLimit": 0,
            "cardCount": 2,
            "cardSize": 4,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "active",
            "laneType": "completed",
            "isCollapsed": false
        },
        {
            "id": "943188480",
            "name": "Ready to Start",
            "description": null,
            "cardStatus": "notStarted",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 3,
            "parentLaneId": "943188470",
            "activityId": null,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "columns": 1,
            "wipLimit": 0,
            "cardCount": 0,
            "cardSize": 0,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "backlog",
            "laneType": "ready",
            "isCollapsed": false
        },
        {
            "id": "943188471",
            "name": "Finished - Ready to Archive",
            "description": null,
            "cardStatus": "finished",
            "active": true,
            "cardLimit": 0,
            "creationDate": "2019-12-03T23:15:30.040Z",
            "index": 4,
            "parentLaneId": null,
            "activityId": null,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "columns": 3,
            "wipLimit": 0,
            "cardCount": 0,
            "cardSize": 0,
            "archiveCardCount": 0,
            "subscriptionId": null,
            "laneClassType": "archive",
            "laneType": "completed",
            "isCollapsed": true
        }
    ],
    "laneTypes": [
        {
            "id": 3,
            "name": "completed"
        },
        {
            "id": 99,
            "name": "untyped"
        },
        {
            "id": 1,
            "name": "ready"
        },
        {
            "id": 2,
            "name": "inProcess"
        }
    ],
    "userSettings": {},
    "priorities": [
        {
            "id": 3,
            "name": "critical"
        },
        {
            "id": 2,
            "name": "high"
        },
        {
            "id": 1,
            "name": "normal"
        },
        {
            "id": 0,
            "name": "low"
        }
    ],
    "planningSeries": [
        {
            "id": "10114168786",
            "label": "Planning Series 1"
        },
        {
            "id": "10114168787",
            "label": "Planning Series 2"
        },
    ],
    "layoutChecksum": "0d0b0c57501dc09ed27e0d82aa750b9c",
    "defaultCardTypeId": "943188459",
    "defaultTaskTypeId": "943188465"
}
```
