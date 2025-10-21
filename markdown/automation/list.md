---
title: Get the list of card automations for a board
public: true
repo: automation-service
---
# GET /io/board/:boardId/automation
Get the list of card automations for a board.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/1234/automation \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "cardAutomations": [
        {
            "id": "7795679304",
            "boardId": "917601939",
            "userId": "902179392",
            "description": "Post to Slack when a Card is ready for testing",
            "enabled": true,
            "events": [
                "movedTo"
            ],
            "filter": {
                "cardTypes": [],
                "lanes": [
                    "918189498"
                ],
                "priorities": [],
                "tags": []
            },
            "action": {
                "type": "postToSlack",
                "params": {
                    "url": "https://my-incoming-slack-url",
                    "messagePrefix": "Ready for testing",
                    "includeDescription": false
                }
            },
            "hasSecrets": false,
            "latestStatus": 1,
            "latestStatusTime": "2023-02-13T20:38:14.883Z"
        },
        {
            "id": "7870054303",
            "userId": "902167085",
            "boardId": "917601939",
            "actionType": 2,
            "description": "Ping QE if in Ready to test for more than a day",
            "enabled": true,
            "configuration": {
                "events": [
                    "scheduled"
                ],
                "schedule": {
                    "timeOfDayUtc": "15:00",
                    "daysOfTheWeek": [
                        "monday",
                        "tuesday",
                        "wednesday",
                        "thursday",
                        "friday"
                    ]
                },
                "cardTypes": [],
                "lanes": [
                    "918189498"
                ],
                "priorities": [],
                "tags": [],
                "action": {
                    "url": "https://my-incoming-slack-url",
                    "messagePrefix": "****This Card has been waiting on TESTING for more than 1 day***",
                    "includeDescription": false
                },
                "dateFilter": {
                    "field": "lastActivity",
                    "comparison": "greaterThan",
                    "value": 1,
                    "direction": "daysBeforeNow",
                    "olsonTimeZone": "America/Chicago"
                }
            },
            "hasSecrets": false,
            "latestStatus": 1,
            "latestStatusTime": "2023-02-13T15:00:01.170Z"
        }
    ]
}
```
