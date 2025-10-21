---
title: Initiate a card-level custom event
public: true
repo: automation-service
---
# POST /io/card/:cardId/automation/customevent
Triggering custom events from this API, allows you to execute automations based on something happening outside of your board. For a card-level custom event, any automations that have the `custom` event type and match the event name will be executed, as long as all of the other criteria on the automation match the card as well.

If using GitHub Actions, AgilePlace has a standard action to initiate an card-level custom event. Please review: https://github.com/LeanKit/github-actions?tab=readme-ov-file#initiate-card-event along with https://github.com/LeanKit/github-actions?tab=readme-ov-file#extract-card-id.
.

### Example Request
```shell
curl -X POST \
  https://myaccount.leankit.com/io/card/1234/automation/customevent \
  -H 'Authorization: Basic base64encodedauthhere' \
  --data `{ "eventName": "pr-merged" }`
```

### Example Successful Response

202 Accepted
