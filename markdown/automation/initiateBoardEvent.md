---
title: Initiate a board-level custom event
public: true
repo: automation-service
---
# POST /io/board/:boardId/automation/customevent
Trigger a custom event for a board. This allows you to execute automations based on something happening outside of your board. For a board-level custom event, the criteria on the automation is used to identify matching cards (this is similar to how scheduled automations run) and the automation is run for each matching card (up to 1000). Board-level custom events are subject to more aggressive rate limiting, as they can result in creating significant activity. This limit is set to 5 per event in 5 minutes.

If using GitHub Actions, AgilePlace has a standard action to initiate a board-level custom events. Please see: https://github.com/LeanKit/github-actions?tab=readme-ov-file#initiate-board-event along with https://github.com/LeanKit/github-actions?tab=readme-ov-file#extract-card-id.

### Example Request
```shell
curl -X POST \
  https://myaccount.leankit.com/io/board/1234/automation/customevent \
  -H 'Authorization: Basic base64encodedauthhere' \
  --data `{ "eventName": "release-created" }`
```

### Example Successful Response

202 Accepted

