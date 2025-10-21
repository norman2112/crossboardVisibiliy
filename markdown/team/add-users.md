---
title: Add users to a team
public: true
repo: core-account-service
---
# POST /io/team/:teamId/user
Add users to a team.  All users of a team are granted the same privileges assigned to the team.

_Requires authentication as account administrator or team manager who created the team._ \
_Team must be enabled to add users to it._ \
_Cannot be used with built-in teams: Everyone and External Users._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|----|
|`userIds`*|array of integer id|user ids to be added to the team. no deleted users, no system users, no support account users, min: 1, max: 100||

\* required

### Example Request
```
curl -X POST \
  https://myaccount.leankit.com/io/team/12345678/user' \
  -H 'Authorization: Basic base64encodedauth' \
  -d '{"userIds": [ "1001001", "1001006" ]}'
```


### Example Successful Response

201 Created




