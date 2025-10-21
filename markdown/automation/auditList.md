---
title: Get a list of audits for the recent runs of an automation
public: true
repo: automation-service
---
# GET /io/board/:boardId/automation/:automationId/audit
Get a list of audits for the recent runs (last 20) of an automation.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/1234/automation/5678/audit \
  -H 'Authorization: Basic base64encodedauthhere'
```

Values for `status` field:

1. Success
2. Failure
3. Blocked (From rate limiting or causing a circular loop of automations)

### Example Successful Response

200 Success
```json
{
    "cardAutomationAudits": [
        {
            "id": "8087777",
            "cardAutomationId": "8081717",
            "cardId": "8081415",
            "startTime": "2023-02-07T21:21:29.820Z",
            "endTime": "2023-02-07T21:21:30.067Z",
            "status": 1,
            "result": ""
        },
        {
            "id": "8089404",
            "cardAutomationId": "8080606",
            "cardId": "8081415",
            "startTime": "2023-02-14T13:36:14.993Z",
            "endTime": "2023-02-14T13:36:15.007Z",
            "status": 2,
            "result": "{\"code\":\"post.webhook\",\"data\":{\"message\":\"getaddrinfo ENOTFOUND badwebhook.site\"}}"
        },
        {
            "id": "8089410",
            "cardAutomationId": "8089394",
            "cardId": "8088890",
            "startTime": "2023-02-14T13:36:35.510Z",
            "endTime": "2023-02-14T13:36:35.510Z",
            "status": 3,
            "result": "{\"code\":\"blocked.looping\",\"data\":{\"cardId\":\"8088890\"},\"message\":\"Stopping potential automation loop for cardId: 8088890 and organizationId: 100\"}"
        }
    ]
}
```
