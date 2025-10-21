---
title: Remove users from a team
public: true
repo: core-account-service
---
# DELETE /io/team/:teamId/user
Remove users from a team. This will only work with direct assignments, it will not remove a user that is part of the team via their assignment to a subteam. Any permissions granted to the user as a member of the team are removed.

_Requires authentication as account administrator or team manager who created the team._ \
_Teams that are not enabled cannot be edited._ \
_Cannot be used with built-in teams: Everyone and External Users._


### Request Properties
|Param|Type|Usage|Default|
|---|---|---|----|
|`userIds`*|array of integer id|user ids to be removed from the team, min: 1, max: 10||

\* required

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/team/100100/user \
  -H 'Authorization: Basic base64encodedauthhere' \
  -d '{"userIds": [ "1001001", "1001006" ]}'
```

### Example Successful Response

204 No Content



