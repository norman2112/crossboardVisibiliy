---
public: true
title: Get a board template
repo: core-board-service
---
# GET /io/template/:templateId
Get a board template by id.


### Example Request
```
curl -X GET \
  https://myaccount.leankit.com/io/template/961080549' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

200 OK
```json
{
    "id": "961065792",
    "name": "This is a sample template",
    "description": "The description is here",
    "template": {
        "classOfServiceEnabled": false,
        "customIconFieldLabel": "Class of Service",
        "cardColorField": 1,
        "baseWipOnCardSize": false,
        "cardTypes": [
            {
                "id": "567272386",
                "name": "Other Work",
                "colorHex": "#FFFFFF",
                "isDefault": true,
                "isCardType": true,
                "isTaskType": false,
                "isDefaultTaskType": false
            },
            {
                "id": "567272387",
                "name": "Defect",
                "colorHex": "#FE7676",
                "isDefault": false,
                "isCardType": true,
                "isTaskType": false,
                "isDefaultTaskType": false
            },
            {
                "id": "567272388",
                "name": "Improvement",
                "colorHex": "#D6FA98",
                "isDefault": false,
                "isCardType": true,
                "isTaskType": false,
                "isDefaultTaskType": false
            },
            {
                "id": "567272389",
                "name": "Risk / Issue",
                "colorHex": "#FDD29A",
                "isDefault": false,
                "isCardType": true,
                "isTaskType": false,
                "isDefaultTaskType": false
            },
            {
                "id": "567272390",
                "name": "New Feature",
                "colorHex": "#93E0E6",
                "isDefault": false,
                "isCardType": true,
                "isTaskType": false,
                "isDefaultTaskType": false
            },
            {
                "id": "567272391",
                "name": "Subtask",
                "colorHex": "#F8F7D2",
                "isDefault": false,
                "isCardType": false,
                "isTaskType": true,
                "isDefaultTaskType": true
            }
        ],
        "customIcons": [
            {
                "id": "567288729",
                "title": "Date Dependent",
                "policy": "",
                "iconPath": "../../Content/Images/Icons/Library/calculator.png",
                "customIconName": null,
                "customIconColor": null
            },
            {
                "id": "567288730",
                "title": "Expedite",
                "policy": "",
                "iconPath": "../../Content/Images/Icons/Library/arrow_right.png",
                "customIconName": null,
                "customIconColor": null
            },
            {
                "id": "567288731",
                "title": "Regulatory",
                "policy": "",
                "iconPath": "../../Content/Images/Icons/Library/check.png",
                "customIconName": null,
                "customIconColor": null
            },
            {
                "id": "567288732",
                "title": "Standard",
                "policy": "",
                "iconPath": "../../Content/Images/Icons/Library/blank.gif",
                "customIconName": null,
                "customIconColor": null
            }
        ],
        "format": null,
        "isCardIdEnabled": true,
        "isDuplicateCardIdAllowed": true,
        "isHeaderEnabled": true,
        "isHyperlinkEnabled": false,
        "isPrefixEnabled": false,
        "isPrefixIncludedInHyperlink": false,
        "prefix": null,
        "boardLevelId": "961018244",
        "lanes": [
            {
                "id": "-567306602",
                "index": 0,
                "description": null,
                "name": "Not Started - Future Work",
                "title": "Not Started - Future Work",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": false,
                "cards": [],
                "columns": 3,
                "orientation": "vertical",
                "laneClassType": "backlog",
                "laneType": "ready"
            },
            {
                "id": "-567306603",
                "index": 2,
                "description": null,
                "name": "Approved",
                "title": "Approved",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": false,
                "cards": [],
                "parentLaneId": "-567306602",
                "columns": 1,
                "orientation": "vertical",
                "laneClassType": "backlog",
                "laneType": "ready"
            },
            {
                "id": "-567306604",
                "index": 0,
                "description": null,
                "name": "New Requests",
                "title": "New Requests",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": false,
                "cards": [],
                "parentLaneId": "-567306602",
                "columns": 1,
                "orientation": "vertical",
                "laneClassType": "backlog",
                "laneType": "ready"
            },
            {
                "id": "-567306605",
                "index": 3,
                "description": null,
                "name": "Ready to Start",
                "title": "Ready to Start",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": false,
                "cards": [],
                "parentLaneId": "-567306602",
                "columns": 1,
                "orientation": "vertical",
                "laneClassType": "backlog",
                "laneType": "ready"
            },
            {
                "id": "-567306606",
                "index": 4,
                "description": null,
                "name": "Finished - Ready to Archive",
                "title": "Finished - Ready to Archive",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": false,
                "cards": [],
                "columns": 3,
                "orientation": "vertical",
                "laneClassType": "archive",
                "laneType": "completed"
            },
            {
                "id": "-567306607",
                "index": 2,
                "description": null,
                "name": "Discarded Requests / Ideas",
                "title": "Discarded Requests / Ideas",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": false,
                "cards": [],
                "parentLaneId": "-567306606",
                "columns": 3,
                "orientation": "horizontal",
                "laneClassType": "archive",
                "laneType": "untyped"
            },
            {
                "id": "-567306608",
                "index": 1,
                "description": null,
                "name": "Started but not Finished",
                "title": "Started but not Finished",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": false,
                "cards": [],
                "parentLaneId": "-567306606",
                "columns": 3,
                "orientation": "horizontal",
                "laneClassType": "archive",
                "laneType": "untyped"
            },
            {
                "id": "-567306609",
                "index": 0,
                "description": null,
                "name": "Finished As Planned",
                "title": "Finished As Planned",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": false,
                "cards": [],
                "parentLaneId": "-567306606",
                "columns": 3,
                "orientation": "horizontal",
                "laneClassType": "archive",
                "laneType": "untyped"
            },
            {
                "id": "-567306610",
                "index": 1,
                "description": null,
                "name": "Doing Now",
                "title": "Doing Now",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": false,
                "cards": [],
                "columns": 2,
                "orientation": "vertical",
                "laneClassType": "active",
                "laneType": "inProcess"
            },
            {
                "id": "-567306611",
                "index": 2,
                "description": null,
                "name": "Under Review",
                "title": "Under Review",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": false,
                "cards": [],
                "columns": 4,
                "orientation": "vertical",
                "laneClassType": "active",
                "laneType": "inProcess"
            },
            {
                "id": "-567306612",
                "index": 3,
                "description": null,
                "name": "Recently Finished",
                "title": "Recently Finished",
                "cardLimit": 0,
                "isDefaultDropLane": false,
                "isConnectionDoneLane": true,
                "cards": [],
                "columns": 2,
                "orientation": "vertical",
                "laneClassType": "active",
                "laneType": "completed"
            }
        ]
    },
    "isDefault": false,
    "isUserCategory": true
}
```
