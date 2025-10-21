---
title: Update my account settings
public: true
repo: core-account-service
---
# PATCH /io/account
Update my account settings.

### Example Request Body (title only)
```json
{
    "title": "My Cool Organization"
}
```
### Example Request Body (all properties)
```json
{
    "title": "My Cool Organization",
    "defaultNewBoardRole": "none",
    "subscribeUsersToAssignedCardsByDefault": false,
    "enableOKRs": true,
    "advancedSecurity": {
        "strongPasswordEnabled": true,
        "minimumLengthEnabled": true,
        "requireUppercaseEnabled": false,
        "requireNumericEnabled": false,
        "requireSpecialCharacterEnabled": false,
        "lengthOfPassword": 3,
        "accountLockEnabled": true,
        "accountLockInterval": 3,
        "maxFailedLoginAttempts": 3,
        "preferencesEnabled": true,
        "disallowedFileExtensions": ".exe",
        "disableRssFeeds": false,
        "disableGenericLogin": false,
        "disableRememberMe": false
    }
}
```
Top level properties (`title`, `defaultNewBoardRole`, `subscribeUsersToAssignedCardsByDefault`, `enableOKRs`, and `advancedSecurity`) are optional.

### Example Response
200 Success
```json
{
    "id": "10100000303",
    "title": "My Cool Organization",
    "defaultNewBoardRole": "none",
    "subscribeUsersToAssignedCardsByDefault": false,
    "enableOKRs": true,
    "advancedSecurity": {
        "strongPasswordEnabled": true,
        "minimumLengthEnabled": true,
        "requireUppercaseEnabled": false,
        "requireNumericEnabled": false,
        "requireSpecialCharacterEnabled": false,
        "lengthOfPassword": 3,
        "accountLockEnabled": true,
        "accountLockInterval": 3,
        "maxFailedLoginAttempts": 3,
        "preferencesEnabled": true,
        "disallowedFileExtensions": ".exe",
        "disableRssFeeds": false,
        "disableGenericLogin": false,
        "disableRememberMe": false
    }
}
```
