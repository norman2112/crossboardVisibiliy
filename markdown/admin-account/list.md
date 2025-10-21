---
title: List accounts
public: false
repo: core-account-service
---
# GET /io/admin/account

List or search accounts in the system.

_Requires system administrator access._

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first account to be returned|0|
|`limit`|integer|Set the number of accounts to be returned|25|
|`search`|string|Keyword match by account title or hostname||
|`emailAddress`|string|Return any organizations that the user is a member of||
|`accountType`|array|Array of valid account types to filter by||
|`accountStatus`|array|Array of valid account statuses to filter by. Also supports a value of `expired`||
|`createdSince`|integer|Filter by accounts created within the specified number of days||
|`accountIds`|array|List of account ids to search by. Maximum of 100||


### Example Request
```shell
curl https://myaccount.leankit.com/io/admin/account' \
  -H 'Authorization: Basic base64encodedauth'
```

### Example Successful Response

200 Success
```json
{
  "pageMeta": {
    "endRow": 1,
    "limit": 25,
    "offset": 0,
    "startRow": 1,
    "totalRecords": 1
  },
  "accounts": [
    {
      "accountStatus": "active",
      "accountType": "leanKitForEnterprise",
      "boardLimit": 10,
      "country": "France",
      "focusedUserLimit": 40,
      "hostname": "anothertest",
      "id": "6",
      "owner": {
        "emailAddress": "owner2@test.com",
        "id": "2"
      },
      "paymentPeriod": "notSpecified",
      "readerUserLimit": 30,
      "title": "Another Test",
      "userLimit": 20
    }
  ]
```
