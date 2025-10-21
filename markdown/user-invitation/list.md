---
title: List your open invitations to new users
public: true
repo: core-account-service
---
# GET /io/invitation
List your open invitations to new users.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first item to be returned.|0|
|`limit`|integer|Set the number of items to be returned.|25|
|`status`|enumeration|Possible values <br />`pending`<br />`accepted`|pending|

### Example Request
```
curl -X GET \
  https://myaccount.leankit.com/io/invitation \
  -H 'Authorization: Basic base64encodedauthhere='
```

### Example Response
```json
{
    "pageMeta": {
        "totalRecords": 1,
        "offset": 0,
        "limit": 25,
        "startRow": 1,
        "endRow": 1
    },
    "invitations": [
        {
            "id": "10113992540",
            "emailAddress": "bob@thatco.com",
            "emailSendStatus": "success",
            "emailDateSent": "2020-01-14T23:28:11.000Z",
            "creationDate": "2020-01-14T23:28:10.000Z",
            "acceptDate": null,
            "isExpired": false,
            "isRevoked": false,
            "invitingUser": {
                "id": "25019",
                "firstName": "Jim",
                "lastName": "Martinsen",
                "fullName": "Jim Martinsen",
                "enabled": true,
                "isDeleted": false,
                "emailAddress": "jim@myco.com"
            },
            "invitedUser": null
        }
    ]
}
```
