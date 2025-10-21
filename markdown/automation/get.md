---
title: Get a specified card automation
public: true
repo: automation-service
---
# GET /io/board/:boardId/automation/:automationId
Get an automation by id.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/1234/automation/5678 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example successful response
```shell
200 OK
{
    "cardAutomation": {
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
        "hasSecrets": false
    }
}
```
