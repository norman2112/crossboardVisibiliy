---
public: false
title: Get the requesting user's context information
repo: core-account-service
---
# GET /io/user/context
Returns `context` data for the requesting user. This endpoint is primarily intended for use by the LeanKit UI. The response consists of `user`, `account`, and `organization` information.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/user/context' \
  -H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response

200 Success

```json
{
    "user": {
        "id": "25035",
        "username": "someone@leankit.com",
        "firstName": "Some",
        "lastName": "One",
        "fullName": "Some One",
        "emailAddress": "someone@leankit.com",
        "lastAccess": "2020-01-06T18:51:48Z",
        "dateFormat": "yyyy/MM/dd",
        "timeZone": "Eastern Standard Time",
        "leanKitCommunicationsRead": true,
        "administrator": true,
        "boardCreator": true,
        "systemAdministrator": true,
        "accountOwner": true,
        "supportAccount": false,
        "createdOn": "2015-04-14T20:48:58Z",
        "licenseType": "full",
        "avatarType": "gravatar",
        "olsonTimeZone": "America/New_York",
        "wasInvited": false,
        "settings": {
            "useMondayForCalendarWeekViewStart": true,
            "dialogShownForRange": "First",
            "locale": "en-US"
        }
    },
    "account": {
        "id": "10100000303",
        "country": "UNITED STATES",
        "region": "NEW YORK",
        "expiresOn": null,
        "createdOn": "2014-12-11T21:31:09Z",
        "adminsContact": null,
        "policiesUrl": null,
        "owner": {
            "id": "25035",
            "username": "someone@leankit.com",
            "lastName": "One",
            "fullName": "Some One",
            "firstName": "Some",
            "emailAddress": "someone@leankit.com"
        },
        "activeUsers": 98,
        "closeDate": "2014-12-11T23:54:24Z",
        "settings": {
            "userLimit": 903,
            "enableSearch": true,
            "defaultRoleId": 4,
            "allowComments": true,
            "enableFilters": true,
            "enableMyCards": true,
            "enableWipLimit": true,
            "archiveCardDays": 2,
            "disableRssFeeds": false,
            "allowAttachments": true,
            "enableTaskBoards": true,
            "enableUserDevice": false,
            "enableUserGuides": true,
            "allowAddCardTypes": true,
            "allowAllTemplates": true,
            "allowBoardCloning": true,
            "enableCardHistory": true,
            "enableExportCards": true,
            "enableImportCards": true,
            "enableReaderUsers": true,
            "enableGlobalSearch": true,
            "enableLanePolicies": true,
            "enableSharedBoards": true,
            "enableSingleSignOn": false,
            "enableFocusedUsers": true,
            "enableSavedFilters": true,
            "defaultNewBoardRole": null,
            "disableCalendarView": true,
            "enableTagManagement": true,
            "enableActivityStream": true,
            "enableCardDelegation": false,
            "enableSelectAllUsers": false,
            "cardAttachmentMaxSize": 77800,
            "classOfServiceEnabled": true,
            "enableCustomBoardUrls": true,
            "externalCardIdEnabled": true,
            "allowTaskTypeFiltering": true,
            "enableAdvancedSecurity": true,
            "enableBoardCreatorRole": true,
            "enableCustomCardFields": true,
            "enableInvitationSystem": true,
            "enableLaneSubscription": true,
            "enableReportingApiTags": true,
            "enableUserAdminReports": true,
            "maxNumberOfInvitations": 200,
            "allowedSharedBoardRoles": 1,
            "enableImportExportCards": true,
            "enableReportingApiLanes": true,
            "enableReportingApiTasks": true,
            "enableSuspensionWarning": false,
            "disallowedFileExtensions": null,
            "enableDrillThroughBoards": true,
            "enableExportBoardHistory": true,
            "allowBoardTemplatesCreate": true,
            "allowMultiUserAssignments": true,
            "enablePlanviewIntegration": false,
            "allowCardsInBoardTemplates": true,
            "enableAdvancedRoleSecurity": true,
            "enableOrganizationSettings": true,
            "enableReportingApiComments": true,
            "enableCardHistoryHealthTab": true,
            "allowMoveCardsBetweenBoards": true,
            "allowRepliableNotifications": true,
            "enableConnectedCardsGallery": true,
            "enableRealTimeCommunication": false,
            "enableReportingApiTaskLanes": false,
            "allowColorForClassOfServices": false,
            "allowInvitationsFromAllUsers": false,
            "enableReportingApiCardExport": true,
            "enableSearchByInternalCardId": true,
            "allowSeparateCardAndTaskTypes": true,
            "enableReportingApiConnections": true,
            "enableReportingApiCustomFields": true,
            "enableReportTimelineActualDate": true,
            "enablePlanviewIntegrationForE1": true,
            "allowBoardCreationFromTemplates": true,
            "allowBoardTemplatesImportExport": true,
            "allowHorizontalSplitInBoardEdit": true,
            "disableDisallowedFileExtensions": false,
            "enableMultipleDrillThroughBoards": true,
            "enableReportingApiBlockedHistory": true,
            "enablePlanviewIntegrationForPPMP": true,
            "enableReportingApiCardLaneHistory": true,
            "reportingApiTokenExpirationInMinutes": 10080,
            "subscribeUsersToAssignedCardsByDefault": true,
            "numberOfDaysToRetrieveAnalyticsEventsFor": 365,
            "enableReportingApiCurrentUserAssignments": true,
            "reportingApiResponseCacheDurationInMinutes": 1440,
            "enableReportingApiHistoricalUserAssignments": true,
            "enableBoardLevels": true,
            "enableBoardLegend": true,
            "customCardFieldCountLimit": 8,
            "enableMultiParentConnections": true
        },
        "accountStatus": "active",
        "accountType": "leanKitForScaledTeams",
        "editionType": "customer"
    },
    "organization": {
        "id": "10187654101",
        "title": "New Bigfood",
        "description": "This is the description for the Org Id 10187654101",
        "hostName": "bigfood",
        "advancedSecurity": {
            "strongPasswordEnabled": false,
            "minimumLengthEnabled": false,
            "requireUppercaseEnabled": false,
            "requireNumericEnabled": false,
            "requireSpecialCharacterEnabled": false,
            "lengthOfPassword": 3,
            "accountLockEnabled": false,
            "accountLockInterval": 0,
            "maxFailedLoginAttempts": 3,
            "preferencesEnabled": false,
            "disallowedFileExtensions": null,
            "disableRssFeeds": false,
            "disableGenericLogin": false,
            "disableRememberMe": false
        }
    }
}
```
