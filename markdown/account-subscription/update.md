---
title: Update account subscription
public: false
repo: core-account-service
---
# PATCH /io/account/subscription
Update your LeanKit subscription. Typically used to adjust the number of license seats available.
### Example Request Body
```json
{
    "acceptServiceAgreement":true,
    "userLimit":26
}
```
### Example Response
```json
{
    "id": "10113993045",
    "title": "Myco",
    "hostname": "myco",
    "userLimit": 26,
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
