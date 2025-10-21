---
title: Get your organization details
public: false
repo: core-leankit-api
---
# GET /io/organization/:organizationId
Get your organization details.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/organization/478661825 \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "id": "478661825",
    "title": "Org title",
    "description": "The org description",
    "hostName": "myaccount",
    "accountId": "478673724",
    "numberOfDaysToRetrieveAnalyticsEventsFor": 365,
    "analytics": [
        {
            "title": "Speed",
            "slug": "speed",
            "workbook": "SpeedDashboard",
            "view": "Dashboard1",
            "description": "View throughput trends and how quickly work flows through your process over time by day, week or month.",
            "titleLong": "Speed",
            "subTitle": null,
            "sortOrder": 1,
            "urlTemplate": "https://myaccount.leankit.com/board/{1}/report/{0}",
            "chartType": "HTML",
            "allowClientSideNav": true
        },
        {
            "title": "Distribution",
            "slug": "distribution",
            "workbook": "CardDistribution",
            "view": "CardsbyAttribute",
            "description": "Analyze how work is distributed by card type, lane and priority to see if the right work is getting done.",
            "titleLong": "Distribution",
            "subTitle": null,
            "sortOrder": 3,
            "urlTemplate": "https://myaccount.leankit.com/board/{1}/report/{0}",
            "chartType": "HTML",
            "allowClientSideNav": true
        },
        {
            "title": "Efficiency",
            "slug": "efficiency",
            "workbook": "EfficiencyDiagram",
            "view": "QueueSize",
            "description": "See the proportion of Active vs. Inactive work in a lane or set of lanes based on card staleness.",
            "titleLong": "Efficiency",
            "subTitle": null,
            "sortOrder": 4,
            "urlTemplate": "https://myaccount.leankit.com/board/{1}/report/{0}",
            "chartType": "HTML",
            "allowClientSideNav": true
        },
        {
            "title": "Planned Percent Complete",
            "slug": "plannedPercent",
            "workbook": "PPCDashboard",
            "view": "Dashboard1",
            "description": "Understand work completion trends and how well you are meeting schedule commitments by day, week or month.",
            "titleLong": "Planned Percent Complete",
            "subTitle": null,
            "sortOrder": 6,
            "urlTemplate": "https://myaccount.leankit.com/board/{1}/report/{0}",
            "chartType": "HTML",
            "allowClientSideNav": true
        },
        {
            "title": "Burndown",
            "slug": "burndown",
            "workbook": "BurndownDashboard",
            "view": "Dashboard1",
            "description": "Determine how much of a planned set of work is complete as of today and what pace you need to set going forward to meet your schedule.",
            "titleLong": "Burndown",
            "subTitle": null,
            "sortOrder": 8,
            "urlTemplate": "https://myaccount.leankit.com/board/{1}/report/{0}",
            "chartType": "HTML",
            "allowClientSideNav": true
        },
        {
            "title": "Exceptions",
            "slug": "exceptions",
            "workbook": "ExceptionsReportContent",
            "view": "",
            "description": "Determine what work is blocked, stale, or missing planned dates so you know where to focus problem resolution.",
            "titleLong": "Exceptions",
            "subTitle": null,
            "sortOrder": 9,
            "urlTemplate": "https://myaccount.leankit.com/board/{1}/report/{0}",
            "chartType": "HTML",
            "allowClientSideNav": true
        },
        {
            "title": "Flow",
            "slug": "flow",
            "workbook": "FlowDashboard",
            "view": "Dashboard1",
            "description": "View throughput trends and how quickly work flows through your process over time.",
            "titleLong": "Flow",
            "subTitle": null,
            "sortOrder": 11,
            "urlTemplate": "https://myaccount.leankit.com/board/{1}/report/{0}",
            "chartType": "HTML",
            "allowClientSideNav": true
        },
        {
            "title": "Assigned Users",
            "slug": "assignedUsers",
            "workbook": "AssignedUsers",
            "view": "Dashboard1",
            "description": "View how work is currently distributed across team members to help balance workload with capacity.",
            "titleLong": "Assigned Users",
            "subTitle": null,
            "sortOrder": 12,
            "urlTemplate": "https://myaccount.leankit.com/board/{1}/report/{0}",
            "chartType": "HTML",
            "allowClientSideNav": true
        },
        {
            "title": "Timeline",
            "slug": "timeline",
            "workbook": "timeline",
            "view": "",
            "description": "View cards by planned start date, measured by planned duration",
            "titleLong": "Timeline",
            "subTitle": null,
            "sortOrder": 20,
            "urlTemplate": "https://myaccount.leankit.com/board/{1}/report/{0}",
            "chartType": "HTML",
            "allowClientSideNav": true
        }
    ],
    "zendeskDropboxId": "123456"
}
```
