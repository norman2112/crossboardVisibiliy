---
title: Add subteams to a team
public: true
repo: core-account-service
---
# POST /io/team/:teamId/subteam
Add subteams to a team. All subteams and its members (subteams and users) are granted the same privileges assigned to the team.

_Requires authentication as account administrator or team manager who created the team._ \
_Team and subteams must be enabled._ \
_Cannot be used with built-in teams: Everyone and External Users._ \
_A team can only be a direct subteam of one team._ \
_A team can have multiple direct subteams._ \
_A team cannot be a subteam of itself or any of its nested subteams._ \
_The maximum depth of nested subteams is 5._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|----|
|`teamIds`*|array of integer id|team ids to be added as direct subteams,  min: 1, max: 10||

\* required

### Example Request
```
curl -X POST \
  https://myaccount.leankit.com/io/team/12345678/subteam' \
  -H 'Authorization: Basic base64encodedauth' \
  -d '{"teamIds": [ "1001001", "1001006" ]}'
```

### Example Successful Response

201 Created




