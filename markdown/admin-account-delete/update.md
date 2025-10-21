---
title: Update an account delete assignment
public: false
repo: core-account-service
---
# PATCH /io/admin/accountDelete/:accountId
Update an account delete assignment.

_Requires system administrator access._

### Request Properties
|Param|Type|Usage|
|---|---|---|
|`deleteByDate`|string|Date/time, used for prioritizing assignments and potentially alerting of "overdue" assignments|
|`status`|string|Assignment status: "hold" or "not started" (latter is effectively "remove hold")|
|`waitUntilDate`|string|Worker will not pick up assignment until this date/time is reached|

### Sample Request
At least one of the available properties below must be included in the request body.
```json
{
    "deleteByDate": "2035-01-01T00:00:00+00:00",
    "status": "hold",
    "waitUntilDate": "2034-01-01T00:00:00+00:00"
}
```

### Example Response
```json
{
    "organizationId": "1234567",
    "accountId": "2345678",
    "status": "hold",
    "createDate": "2020-10-10T12:13:14.156Z",
    "waitUntilDate": "2034-01-01T00:00:00.000Z",
    "deleteByDate": "2035-01-01T00:00:00.000Z"
}
