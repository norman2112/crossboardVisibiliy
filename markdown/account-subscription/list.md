---
title: Get account subscription info
public: false
repo: core-account-service
---
# GET /io/account/subscription
Get account subscription info.
### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/account/subscription' \
  -H 'Authorization: Basic base64encodedauth'
```
### Example Response
200 Success
```json
{
    "id": "10100430303",
    "title": "MYCO",
    "hostname": "myaccount",
    "userLimit": 22,
    "readerUserLimit": 4,
    "focusedUserLimit": 2,
    "enableReaderUsers": true,
    "enableFocusedUsers": true,
    "boardLimit": 20,
    "users": {
        "full": 6,
        "focused": 1,
        "reader": 1
    },
    "boardCount": 17,
    "owner": {
        "id": "25019",
        "emailAddress": "jim@myco.com",
        "firstName": "Jim",
        "lastName": "Martinsen"
    },
    "nextEditions": [
        {
            "accountType": "leanKitForScaledTeams",
            "monthlyCost": 35,
            "monthlyAnnualCost": 29
        }
    ],
    "accountType": "selectEdition",
    "accountStatus": "active",
    "paymentPeriod": "yearly",
    "editionType": "customer"
}
```

