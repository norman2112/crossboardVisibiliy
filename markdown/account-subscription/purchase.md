---
title:  Purchase LeanKit subscription
public: false
repo: core-account-service
---
# POST /io/account/subscription
Purchase a LeanKit subscription. Used by the "Purchase Subscription" button in the Account Details tab when using a trial subscription.

_Requires an Account Owner user._
### Example Request
```json
{
    "accountType":"leanKitForScaledTeams",
    "paymentPeriod":"yearly",
    "userLimit":25,
    "firstName":"Joe",
    "lastName":"Smith",
    "address":"123 S Main",
    "country":"United States",
    "state":"TX",
    "city":"Bigtown",
    "zipCode":"76710",
    "emailAddress":"joe@myco.com",
    "phoneNumber":"254-555-1212",
    "specialInstructions":"",
    "acceptServiceAgreement":true,
    "vat": "X1234567890"
}
```
### Example Response
```json
{
    "id": "10113993045",
    "title": "Myco",
    "hostname": "myco",
    "userLimit": 25,
    "readerUserLimit": 0,
    "focusedUserLimit": 0,
    "enableReaderUsers": false,
    "enableFocusedUsers": false,
    "boardLimit": 0,
    "users": {
        "full": 1
    },
    "boardCount": 1,
    "owner": {
        "id": "10113993348",
        "emailAddress": "joe@myco.com",
        "firstName": "Joe",
        "lastName": "Smith"
    },
    "nextEditions": [],
    "accountType": "leanKitForScaledTeams",
    "accountStatus": "active",
    "paymentPeriod": "yearly",
    "editionType": "customer"
}
```
