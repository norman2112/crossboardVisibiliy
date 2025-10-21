---
title: Account audit
public: false
repo: core-account-service
---
# GET /io/admin/account/:accountId/audit

Get account audit records in the system.

_Requires system administrator access._

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first audit record to be returned|0|
|`limit`|integer|Set the number of audit records to be returned|25|


### Example Request
```shell
curl https://myaccount.leankit.com/io/admin/account/12345/audit' \
  -H 'Authorization: Basic base64encodedauth'
```

### Example Successful Response

200 Success
```json
{
    "pageMeta": {
        "totalRecords": 4,
        "offset": 0,
        "limit": 1,
        "startRow": 1,
        "endRow": 1
    },
    "items": [
        {
            "id": "1",
            "userLimitChange": 0,
            "boardViewerLimitChange": 0,
            "boardLimitChange": 0,
            "changeDate": "2020-05-07T20:13:02.000Z",
            "notes": "The account owner was changed from User One(User.One@the-account.com)[ID:23456] to  User Two (User.Two@the-account.com)[ID:23457].User One",
            "accountId": "12345",
            "readerUserLimitChange": 0,
            "focusedUserLimitChange": 0,
            "organizationId": null,
            "accountType": "leanKitForScaledTeams",
            "paymentPeriod": "yearly",
            "accountStatus": "active",
            "changes": null,
            "modifyingUser": {
                "id": "23458",
                "emailAddress": "User.Three@the-account.com",
                "firstName": "User",
                "lastName": "Three",
                "avatar": "http://the-host.leankit.com/avatar/show/23458/?s=25"
            }
        }
    ]
}
```
