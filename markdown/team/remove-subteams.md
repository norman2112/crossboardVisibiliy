---
title: Remove subteams from a team
public: true
repo: core-account-service
---
# DELETE /io/team/:teamId/subteam
Remove directly assigned subteams from a team. Any permissions granted to the subteams and their members through membership in the parent team are removed.

_Requires authentication as account administrator or team manager who created the team._ \
_Teams that are not enabled cannot be edited._ \
_Cannot be used with built-in teams: Everyone and External Users._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|----|
|`teamIds`*|array of integer id|team ids to be removed as subteams, min: 1, max: 10||

\* required

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/team/100100/subteam \
  -H 'Authorization: Basic base64encodedauthhere' \
  -d '{"teamIds": [ "1001001", "1001006" ]}'
```

### Example Successful Response

204 No Content



