---
title: List assigned users on a board
public: true
repo: core-board-service
deprecated: true
---
# GET /io/board/:boardId/assignedUsers
List top 50 assigned users on a board. Only assignments to cards on the board or recent archive are counted. If more than 50 users have assigned cards, those with the fewest assignments will be excluded. Return values are sorted first by assignment count, then by full name.

_Note: This has been deprecated._

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/48392343/assignedUsers' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Response
```json
[
    {
        "id": "1011342486",
        "fullName": "Dan Housington",
        "firstName": "Dan",
        "lastName": "Housington",
        "emailAddress": "danh@myco.com",
        "assignmentCount": 4
    },
    {
        "id": "27019",
        "fullName": "John Martinson",
        "firstName": "John",
        "lastName": "Martinson",
        "emailAddress": "john.martinson@myco.com",
        "assignmentCount": 2
    }
]
```
