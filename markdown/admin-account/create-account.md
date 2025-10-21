---
title: Create an account
public: false
repo: core-account-service
---
# POST /io/admin/account
Create an account, organization, account owner and welcome board. Currently the account is created as a LeanKit for Scaled Teams Trial.

_Requires system administrator access._

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|---|
|`hostname`*|string|Hostname of the organization.||
|`company`*|string|Company name||
|`firstName`*|string|Account owner first name||
|`lastName`*|string|Account owner last name ||
|`emailAddress`*|string|Account owner username/email ||
|`password`*|string|Account owner password ||
|`timeZone`|string|Account owner time zone; see [valid timezones](/markdown/01-overview/time-zones.md). |Etc/GMT|
|`paymentPeriod`|string|PaymentPeriod enum values|'notSpecified'|
|`sendUserEmail`|string|Sends a welcome email to the account owner|true|
|`userLimit`|integer|Sets the max number of users for the account||
|`readerUserLiimt`|integer|Sets the max number of reader users for the account||

### Example Request Body
```json
{
	"hostname": "myaccount",
	"company": "My Account Name",
	"firstName": "First",
	"lastName": "Last",
	"emailAddress": "user@myaccount.com",
	"password": "1234test!",
	"timeZone": "America/New_York",
	"paymentPeriod": "monthly",
	"sendUserEmail": false,
  "userLimit": 10,
  "readerUserLimit": 5
}
```

### Example Response
200 Success
```json
{
    "hostname": "myaccount",
    "accountId": "101000029648348",
    "organizationId": "101000029648349",
    "accountOwnerId": "101000029648350",
    "boardId": "101000029648308"
}
```
