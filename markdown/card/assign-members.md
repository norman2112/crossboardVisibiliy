---
title: Assign or unassign one or more users or teams to cards
public: true
repo: core-leankit-api
---
# POST /io/card/assign
Assign or unassign one or more users or teams to cards.

### Example Requests
Assign multiple users and teams to multiple cards
```json
{
  "cardIds": ["945202295", "945233018"],
  "userIdsToAssign": ["478440842", "583458214"],
  "teamIdsToAssign": ["1011342486"],
  "userIdToUnassign": ["123456789"],
  "teamIdToUnassign": ["987654321"]
}
```

Unassign a user from a card
```json
{
  "cardIds": ["945202295"],
  "userIdsToUnassign": ["478440842"]
}
```

Unassign a team from a card
```json
{
  "cardIds": ["945202295"],
  "teamIdsToUnassign": ["1011342486"]
}
```

### Example Successful Response

200 OK
```json
{
    "updatedBoards": [
        {
            "boardId": "944576308",
            "version": "15"
        }
    ]
}
```


