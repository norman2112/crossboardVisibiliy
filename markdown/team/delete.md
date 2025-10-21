---
title: Delete a team
public: true
repo: core-account-service
---
# DELETE /io/team/:teamId
Delete a team. Teams and all associated data such as board memberships, user membership, and subteam relationships are permanantly deleted and cannot be recovered.

_Requires authentication as account administrator or team manager who created the team._ \
_Cannot be used with built-in teams: Everyone and External Users._

### Example Request
```shell
curl -X DELETE \
  https://myaccount.leankit.com/io/team/100100 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

204 No Content



