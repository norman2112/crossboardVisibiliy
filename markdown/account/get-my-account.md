---
title: Get my account settings
public: true
repo: core-account-service
---
# GET /io/account
Get account settings.
### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/account' \
  -H 'Authorization: Basic base64encodedauth'
```
### Example Response
200 Success
```json
{
    "id": "10146000303",
    "userLimit": 22,
    "country": "UNITED STATES",
    "region": "NEW YORK",
    "enableCumulativeFlowDiagram": true,
    "enableCycleTimeDiagram": true,
    "enableCardDistributionDiagram": true,
    "enableEfficiencyDiagram": true,
    "enableProcessControlDiagram": true,
    "enableAdvancedRoleSecurity": true,
    "enableTaskBoards": true,
    "enableDrillThroughBoards": true,
    "enableMultipleDrillThroughBoards": true,
    "enableQuickConnectionsUI": false,
    "enableCustomCardFields": true,
    "defaultRoleId": 4,
    "numberOfDaysToRetrieveAnalyticsEventsFor": 90,
    "enableSharedBoards": true,
    "defaultNewBoardRole": 0,
    "allowMultiUserAssignments": true,
    "enableNodeCardCreate": true,
    "enableConnectedCardsGallery": true,
    "disableCalendarView": false,
    "allowBoardTemplatesCreate": true,
    "allowBoardTemplatesImportExport": true,
    "allowAllTemplates": true,
    "allowCardsInBoardTemplates": true,
    "allowBoardCreationFromTemplates": true,
    "expiresOn": null,
    "reportingApiTokenExpirationInMinutes": 60,
    "reportingApiResponseCacheDurationInMinutes": 1440,
    "enableReportingApiCardExport": true,
    "enableReportingApiCardLaneHistory": true,
    "enableReportingApiCurrentUserAssignments": true,
    "enableReportingApiHistoricalUserAssignments": true,
    "enableReportingApiLanes": true,
    "enableReportingApiTags": true,
    "enableReportingApiTasks": true,
    "enableReportingApiTaskLanes": true,
    "enableReportingApiCustomFields": true,
    "enableReportingApiBlockedHistory": true,
    "enableReportingApiComments": true,
    "enableReportingApiConnections": true,
    "enableExportBoardHistory": true,
    "enableReportTimelineActualDate": false,
    "enableCardHistoryHealthTab": true,
    "accountType": "selectEdition",
    "accountStatus": "active"
}
```
