---
title: Update board roles
public: true
repo: core-leankit-api
deprecated: true
---
# PATCH /io/board/:boardId/roles
Create or update board roles for multiple users.

_Note: This has been deprecated in favor of our [Bulk update board users and roles](/markdown/board/update-roles-bulk.md) endpoint._

### Example Request
* Update 2 users
    * one to boardUser (2)
    * one to boardManager (3)
    * both with WIP of 2
* Create one new role (boardManager) for a user
```json
[
	{
		"op":"update",
		"id":"10113566956",
		"userId":"10113421486",
		"WIP":2,
		"roleTypeId":2
	},
	{
		"op":"update",
		"id":"10113873057",
		"userId":"25034",
		"WIP":2,
		"roleTypeId":3
	},
	{
		"op":"create",
		"userId":"10112765904",
		"roleTypeId":3
	}
]
```
### Example Response
```json
{
    "boardRoles": [
        {
            "userId": "10113421486",
            "WIP": 2,
            "roleTypeId": 3,
            "id": "10113566956",
            "boardId": "10113285944"
        },
        {
            "userId": "25034",
            "WIP": 2,
            "roleTypeId": 3,
            "id": "10113873057",
            "boardId": "10113285944"
        },
        {
            "userId": "10113493045",
            "roleTypeId": 3,
            "id": "101138748543",
            "boardId": "10113285944"
        }
    ]
}
```
