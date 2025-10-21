---
title: Update a board's layout
public: true
repo: core-board-service
---
# PUT /io/board/:boardId/layout
Update a board's layout by replacing the entire layout object.

_Requires at least manager role on the board specified._

### Example Request Body
```json
{
    "lanes": [
        {
            "id": "10113986293",
            "title": "Not Started - Future Work",
            "type": "ready",
            "classType": "backlog",
            "index": 0,
            "columns": 3,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "children": [
                {
                    "id": "10113986298",
                    "title": "New Requests",
                    "type": "ready",
                    "classType": "backlog",
                    "index": 0,
                    "columns": 1,
                    "orientation": "vertical",
                    "isConnectionDoneLane": false,
                    "isDefaultDropLane": true,
                    "children": [],
                    "wipLimit": 0,
                    "description": null
                }
            ],
            "wipLimit": 0,
            "description": null
        },
        {
            "id": "10113986295",
            "title": "Doing Now",
            "type": "inProcess",
            "classType": "active",
            "index": 1,
            "columns": 2,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "children": [],
            "wipLimit": 0,
            "description": null
        },
        {
            "title": "NEW LANE",
            "type": "untyped",
            "classType": "active",
            "index": 4,
            "columns": 1,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "children": [],
            "wipLimit": 0
        },
        {
            "id": "10113986294",
            "title": "Finished - Ready to Archive",
            "type": "completed",
            "classType": "archive",
            "index": 6,
            "columns": 3,
            "orientation": "vertical",
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "children": [],
            "wipLimit": 0,
            "description": null
        }
    ],
    "layoutChecksum": "2f03a0170a3a51b45e0e8fa3710cf755"
}
```

### Notes
* The lanes object and layoutChecksum are retrieved via the [board GET endpoint](/markdown/board/get.md)
* The layoutChecksum is used to validate that the board layout has not been edited by another user since it was last retrieved.

### Example Successful Response

200 Success
```json
{
    "lanes": [
        {
            "id": "10113986293",
            "title": "Not Started - Future Work",
            "wipLimit": 0,
            "columns": 3,
            "orientation": "vertical",
            "index": 0,
            "type": "ready",
            "classType": "backlog",
            "cardStatus": "notStarted",
            "description": null,
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false,
            "children": [
                {
                    "id": "10113986298",
                    "title": "New Requests",
                    "wipLimit": 0,
                    "columns": 1,
                    "orientation": "vertical",
                    "index": 0,
                    "type": "ready",
                    "classType": "backlog",
                    "cardStatus": "notStarted",
                    "description": null,
                    "isConnectionDoneLane": false,
                    "isDefaultDropLane": true
                }
            ]
        },
        {
            "id": "10113986295",
            "title": "Doing Now",
            "wipLimit": 0,
            "columns": 2,
            "orientation": "vertical",
            "index": 1,
            "type": "inProcess",
            "classType": "active",
            "cardStatus": "started",
            "description": null,
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false
        },
        {
            "id": "10113989209",
            "title": "NEW LANE",
            "wipLimit": 0,
            "columns": 1,
            "orientation": "vertical",
            "index": 2,
            "type": "untyped",
            "classType": "active",
            "cardStatus": "started",
            "description": null,
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false
        },
        {
            "id": "10113986296",
            "title": "Recently Finished",
            "wipLimit": 0,
            "columns": 2,
            "orientation": "vertical",
            "index": 3,
            "type": "completed",
            "classType": "active",
            "cardStatus": "finished",
            "description": null,
            "isConnectionDoneLane": true,
            "isDefaultDropLane": false
        },
        {
            "id": "10113986294",
            "title": "Finished - Ready to Archive",
            "wipLimit": 0,
            "columns": 3,
            "orientation": "vertical",
            "index": 4,
            "type": "completed",
            "classType": "archive",
            "cardStatus": "finished",
            "description": null,
            "isConnectionDoneLane": false,
            "isDefaultDropLane": false
        }
    ],
    "layoutChecksum": "b41c4d1deb7e46b2180a636020b2e5cf"
}
```

