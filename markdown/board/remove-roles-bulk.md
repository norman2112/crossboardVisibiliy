---
title: Bulk remove board members and roles
public: true
repo: core-board-service
---
# DELETE /io/board/access
Bulk remove board members and roles.

Warning: this endpoint can be destructive to user subscriptions. If you remove a user's access to a board they will lose any of their subscriptions to changes on cards, lanes, and boards.


### Example Requests
#### Remove by email address
```json
{
	"boardIds": [
		"10113285944"
	],
	"emails": [
		"someguy@myco.com",
		"bob@leankit.com"
	]
}
```
#### Remove by user id
```json
{
	"boardIds": [
		"10113285944",
		"10113245934"
	],
	"userIds": [
		"2305934",
		"1984303",
		"2530034"
	]
}
```

#### Remove by team id
```json
{
	"boardIds": [
		"10113285944",
		"10113245934"
	],
	"teamIds": [
		"5676029323",
		"9812398490",
		"8991021123"
	]
}
```

### Example Response

202 Accepted

### Notable Error Responses
|Status Code|Error Message| Reason|
|---|---|---|
| `422 Unprocessable Entity` | varies | You will receive this error if the input is in the wrong format, the ids or emails are not valid, or if you exceed 500 operations for this request. Operations are calculated as board ids × users (either userIds, emails or teamIds ). 20 users or teams assigned to 20 boards would be considered 400 operations. |
