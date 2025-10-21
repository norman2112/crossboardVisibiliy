---
title: List assigned members on a board
public: false
repo: core-board-service
---
# GET /io/board/:boardId/members
List top 50 assigned teams and users on a board. Only assignments to cards on the board or recent archive are counted. If more than 50 teams and users have assigned cards, those with the fewest assignments will be excluded. Return values are sorted first by assignment count, then by team name / user's full name.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`search`|string|Produces a filtered list of matching users and teams|""|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/48392343/members' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Response
```json
{
  "members":
  [
    {
        "id": "1011342486",
        "memberType": "team",
        "display": "D Team",
        "emailAddress": null
    },
    {
        "id": "27019",
        "memberType": "user",
        "display": "John Martinson",
        "emailAddress": "john.martinson@myco.com"
    }
  ]
}
```
