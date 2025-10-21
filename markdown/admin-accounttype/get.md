---
public: false
title: Get details about a specific account type
repo: core-account-service
---
# GET /io/admin/accountType/:accountType
Returns a list of defaults for an account type

_Requires system administrator access._

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/admin/accountType/leanKitForScaledTeams' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

200 Success

```json
{
    "allowAddCardTypes": true,
    "allowAllTemplates": true,
    "allowAttachments": true,
    "allowBoardCloning": true,
    "allowBoardCreationFromTemplates": true,
    ...
    "trialLengthInDays": 30,
    "userLimit": 0
}
```
