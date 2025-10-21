---
title: Update a card automation
public: true
repo: automation-service
---
# PATCH /io/board/:boardId/automation/:automationId
Update a card automation.

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|-------|---|
|`actionType`*|integer|List of action type values<br />`1` (Web service call) <br /> `2` (Post to Slack) <br /> `3` (Post to Microsoft Teams) <br /> `4` (Copy Card) <br /> `5` (Move Card) <br /> `6` (Trigger GitHub Action) <br /> `7` (Update Card) <br /> `8` (Send Email) <br /> `9` (Manage Connections) <br /> `10` (Delete Card) <br /> `11` (Copy Fields)||
|`description`*|string|A description or name for the card automation||
|`enabled`*|boolean|Is the card automation currently active||
|`configuration`*|object|Configuration object describing the automation||
|`configuration.cardTypes`|string array|Filter cards on this list of card type ids||
|`configuration.customIcons`|string array|Filter cards on this list of custom icon (class of service) ids||
|`configuration.lanes`|string array|Filter cards on this list of lane ids||
|`configuration.priorities`|enumeration array|Filter cards on this list of priorities. Possible values are <br /> `normal` <br /> `low` <br /> `high` <br />` critical`||
|`configuration.tags`|string array|List of tags to filter cards||
|`configuration.tagsMode`|enumeration|Mode for matching a card's tags against the specified tags. Possible values are <br /> `anyTag` <br /> `allTags` <br /> `noTags`||
|`configuration.assignees`|string array|List of assigned users to filter cards||
|`configuration.teamAssignees`|string array|List of assigned teams to filter cards||
|`configuration.assigneesMode`|enumeration|Mode for matching a card's assigned members (users or teams) against the specified members. Possible values are <br /> `anyAssignee` <br /> `allAssignees` <br /> `noAssignees`||
|`configuration.isBlocked`|boolean or null|Filter cards on block status||
|`configuration.dateFilter`|object|Filter that allows identifying cards based on their Last Activity date, Last Move date, Planned Start Date, or Planned Finish Date||
|`configuration.dateFilter.field`|enumeration|Filter on a card date. Possible values are <br /> `none` <br /> `lastActivity` <br /> `lastMove` <br /> `plannedStartDate` <br /> `plannedFinishDate`||
|`configuration.dateFilter.comparison`|enumeration|How to compare the card's date with the current date when an automation is being evaluated. The `isEmpty` value does not apply to `lastActivity` or `lastMove` as they will always have a value. Possible values are <br /> `greaterThan` <br /> `lessThen` <br /> `equalTo` <br /> `isEmpty` <br /> `plannedFinishDate`||
|`configuration.dateFilter.direction`|enumeration|How to apply the comparision. The `daysAfterNow` value does not apply to `lastActivity` or `lastMove`, as those dates will always be in the past. Possible values are <br /> `daysBeforeNow` <br /> `daysAfterNow`||
|`configuration.dateFilter.value`|integer|The number of days to use in the comparison||
|`configuration.dateFilter.olsonTimeZone`|string|One of [valid timezones](/markdown/01-overview/time-zones.md).||
|`configuration.events`*|enumeration array|A list of events that should trigger this automation to be evaluated against matching cards. Possible values are <br /> `movedTo` <br /> `movedFrom` <br /> `blocked` <br /> `unblocked` <br /> `create` <br /> `delete` <br /> `childrenComplete` <br /> `firstChildStarted` <br /> `childrenUnblocked` <br /> `childBlocked` <br /> `update` <br /> `scheduled` <br /> `childConnectionAdded` <br /> `childConnectionRemoved` <br /> `parentConnectionAdded` <br /> `parentConnectionRemoved` <br /> `firstTaskStarted` <br />`allTasksCompleted` <br /> `commentAdded` <br /> `custom`||
|`configuration.customEvents`|string array|When `custom` is selected as an event type, then this is a list of custom event names that will match this automation.||
|`configuration.allowBoardLevelCustomEvent`|boolean|When `custom` is selected as an event type, then this value determines whether the automation can run at a board level (rather than only specific to a single card).||
|`configuration.updateFields`|enumeration array|An `update` event will only be triggered when at least one of the listed fields is updated. An empty value indicates that the event will be triggered when any field is updated. Possible values are <br /> `tags` <br /> `assignedMembers` <br /> `size` <br /> `cardType` <br /> `planningIncrements` <br /> `plannedStart` <br /> `plannedFinish` <br /> `cardHeader` <br /> `priority` <br /> `customIcon` <br /> `title` <br /> `description` <br /> `externalUrl` <br /> `attachments` <br /> `cardScore` <br /> `comments`||
|`configuration.schedule`|object|Scheduling information for when `scheduled` is one of the triggering events||
|`configuration.schedule.timeOfDayUtc`|string|The time of day in UTC. Example `09:05`.||
|`configuration.schedule.daysOfTheWeek`|string array|The days of the week that this scheduled automation should run. Possible values are <br /> `sunday` <br /> `monday` <br /> `tuesday` <br /> `wednesday` <br /> `thursday` <br /> `friday` <br /> `saturday`||
|`configuration.schedule.recurrenceType`|string|Either `weekly` or `monthly` for when the scheduled automation runs||
|`configuration.schedule.monthlySchedule`|object|Monthly scheduling information for when `recurrenceType` is `monthly`||
|`configuration.schedule.monthlySchedule.type`|string|Either `dayOfWeek` (e.g. 3rd Tuesday of the month) or `specificDate` (e.g. 15th of the month) for the type of monthly schedule ||
|`configuration.schedule.monthlySchedule.weekOfMonth`|string|When the `type` is ` dayOfWeek`, this determines the week option. Possible values are <br /> `first` <br /> `second` <br /> `third` <br /> `fourth` <br /> `last` ||
|`configuration.schedule.monthlySchedule.dayOfWeek`|string|When the `type` is ` dayOfWeek`, this determines the day of the week for running the scheduled automation. Possible values are <br /> `sunday` <br /> `monday` <br /> `tuesday` <br /> `wednesday` <br /> `thursday` <br /> `friday` <br /> `saturday` <br /> `sunday` ||
|`configuration.schedule.monthlySchedule.dayOfMonth`|string|A numeric value between -1 and 31 for when `type` is `specificDate`. The value `-1` represents the last day of the month. The value `0` or `1` represents the first day of the month.||
|`configuration.action`*|object|Details about the action to run when an the automation is triggered for a card||
|`configuration.action.url (Web Service Call)`|string|The URL destination for a web service call||
|`configuration.action.contentType (Web Service Call)`|enumeration|The content type to use as part of the request. Possible values are <br /> `application/json` <br/> `application/x-www-form-urlencoded` ||
|`configuration.action.url (Post to Slack)`|string|The Slack incoming webhook URL||
|`configuration.action.messagePrefix (Post to Slack)`|string|A heading to include in the message||
|`configuration.action.includeDescription (Post to Slack)`|boolean|Determines if the card description is included in the message||
|`configuration.action.url (Post to Teams)`|string|The Microsoft Teams incoming webhook URL||
|`configuration.action.messagePrefix (Post to Teams)`|string|A heading to include in the message||
|`configuration.action.includeDescription (Post to Teams)`|boolean|Determines if the card description is included in the message||
|`configuration.action.destinationBoardId (Copy Card)`|string|Create the copied card on this board id||
|`configuration.action.destinationLaneId (Copy Card)`|string|Create the copied card in this lane||
|`configuration.action.createConnectionOption (Copy Card)`|enumeration|Connection options for the copied card. Possible values are <br /> `none` <br /> `child` (create the copied card as a child of the original) <br /> `parent` (create the copied card as a parent of the original)||
|`configuration.action.destinationBoardId (Move Card)`|string|Move the card to this board id||
|`configuration.action.destinationLaneId (Move Card)`|string|Move the card to this lane||
|`configuration.action.priority (Update Card)`|enumeration or null|A priority to set on the card. Possible values are <br /> `normal` <br /> `low` <br /> `high` <br />` critical`. Specify `null` for no change.||
|`configuration.action.cardType (Update Card)`|string or null|Update the card to this card type id. Specify `null` for no change.||
|`configuration.action.customIcon (Update Card)`|string or null|Update the card with this custom icon id. Specify `null` for no change.||
|`configuration.action.isBlocked (Update Card)`|boolean or null|Update the card to this block status. Specify `null` for no change.||
|`configuration.action.blockReason (Update Card)`|string or null|When blocking or unblocking a card use this block reason.|"Blocked by Card Automation"|
|`configuration.action.tagsToAdd (Update Card)`|string array|Add this list of tags to the card||
|`configuration.action.tagsToRemove (Update Card)`|string array|Remove this list of tags from the card (if any of the tags are already on the card)||
|`configuration.action.usersToAssign (Update Card)`|string array|Assign this list of user ids to the card||
|`configuration.action.teamsToAssign (Update Card)`|string array|Assign this list of team ids to the card||
|`configuration.action.membersToAssignMode (Update Card)`|enumeration|Possible values are <br /> `selectedMembers` <br /> `childCardAssignees`.||
|`configuration.action.usersToUnassign (Update Card)`|string array|Unassign this list of user ids from the card (if any of the users are assigned)||
|`configuration.action.teamsToUnassign (Update Card)`|string array|Unassign this list of team ids from the card (if any of the teams are assigned)||
|`configuration.action.membersToUnassignMode (Update Card)`|enumeration|Possible values are <br /> `selectedMembers` <br /> `allAssignees`.||
|`configuration.action.customFields (Update Card)`|object array|Array of custom field objects in the format `{ "fieldId": "1234", "value": "myvalue" }`. Value can be `null`, a string, a number, or an array of strings (multi field) depending on the field type.||
|`configuration.action.plannedStart (Update Card)`|object or null|Update the plannedStart field.||
|`configuration.action.plannedStart.mode (Update Card)`|enumeration|Possible values are <br /> `clear` <br /> `relative` <br /> `earliestChildCardDate` <br />` latestChildCardDate` <br /> ` earliestPlanningIncrementStartDate` <br /> ` latestPlanningIncrementEndDate`.||
|`configuration.action.plannedStart.unit (Update Card)`|enumeration|When mode is `relative`, select the unit from choices <br /> `day` <br /> `week` <br /> `month`.||
|`configuration.action.plannedStart.value (Update Card)`|number|When mode is `relative`, select the value to add to the current date in the units selected when the automation runs. Values between -999 and 999 are supported.||
|`configuration.action.plannedStart.olsonTimeZone (Update Card)`|string or null|Provide a time zone to determine the current date when the automation runs to use in calculations.||
|`configuration.action.plannedFinish (Update Card)`|object or null|Update the plannedFinish field.||
|`configuration.action.plannedFinish.mode (Update Card)`|enumeration|Possible values are <br /> `clear` <br /> `relative` <br /> `earliestChildCardDate` <br />` latestChildCardDate` <br /> ` earliestPlanningIncrementStartDate` <br /> ` latestPlanningIncrementEndDate`.||
|`configuration.action.plannedFinish.unit (Update Card)`|enumeration|When mode is `relative`, select the unit from choices <br /> `day` <br /> `week` <br /> `month`.||
|`configuration.action.plannedFinish.value (Update Card)`|number|When mode is `relative`, select the value to add to the current date in the units selected when the automation runs. Values between -999 and 999 are supported.||
|`configuration.action.plannedFinish.olsonTimeZone (Update Card)`|string or null|Provide a time zone to determine the current date when the automation runs to use in calculations.||
|`configuration.action.size (Update Card)`|object or null|Update the size field.||
|`configuration.action.size.mode (Update Card)`|enumeration|Possible values are <br /> `clear` <br /> `specificValue` <br /> `sumOfChildren`.||
|`configuration.action.size.value (Update Card)`|number|When mode is `specificValue`, select the value to use for size when the automation runs. Values between 1 and 999999999 are supported.||
|`configuration.action.owner.value (GitHub Action)`|string|The GitHub repository owner name, if not using a custom field||
|`configuration.action.owner.customFieldId (GitHub Action)`|string|The id of a card custom field that contains the GitHub repository owner, when `useCustomField` is true||
|`configuration.action.owner.useCustomField (GitHub Action)`|boolean|Whether to use a custom field on the card to determine the GitHub repository owner||
|`configuration.action.repo.value (GitHub Action)`|string|The GitHub repository name, if not using a custom field||
|`configuration.action.repo.customFieldId (GitHub Action)`|string|The id of a card custom field that contains the GitHub repository name, when `useCustomField` is true||
|`configuration.action.repo.useCustomField (GitHub Action)`|boolean|Whether to use a custom field on the card to determine the GitHub repository owner||
|`configuration.action.eventType (GitHub Action)`|string|The `event_type` value to provide to GitHub, which enables differentiating which action to run||
|`configuration.action.includeDescription (Email Action)`|boolean|Determines if the card description is included in the email||
|`configuration.action.subject (Email Action)`|string|The subject of the email
|`configuration.action.comment (Email Action)`|string|A message to include as part of the body of the email
|`configuration.action.recipientSource (Email Action)`|enumeration|Mode for determining users to send a triggered email. Possible values are <br /> `assigned` <br /> `selected`.||
|`configuration.action.recipientIds (Email Action)`|string array|When the `recipientSource` is `selected`, this field specifies a list of user ids to use when triggering emails.||
|`configuration.action.updateType (Manage Connections)`|enumeration|The only accepted value at this time is `remove`.||
|`configuration.action.removalMode (Manage Connections)`|enumeration|Which connections to remove on the card. Possible values are <br /> `none` <br /> `all` <br /> `parents` <br /> `children`.||
|`configuration.action.mode (Copy Fields)`|enumeration|Mode to determine where the direction that fields are copied. Possible values are <br /> `fromParent` <br /> `fromChild` <br /> `toParents` <br /> `toChildren`.||
|`configuration.action.fieldsToCopy (Copy Fields)`|enumeration|Which fields are actually copied. Possible values are <br /> `title` <br /> `description` <br /> `size` <br /> `priority` <br /> `customIcon` <br /> `cardType` <br /> `tags` <br /> `assignedUsers` <br /> `assignedTeams` <br /> `plannedStart` <br /> `plannedFinish` <br /> `blockedStatus` <br /> `customId` <br /> `externalLink` <br /> `planningIncrements`.||
|`configuration.action.customFieldsToCopy (Copy Fields)`|string array|List of custom field ids (on this board) to be copied.||
|`configuration.action.overwriteWithEmptyValue (Copy Fields)`|boolean|Whether an empty value on the source should overwrite the destination, when supported.||
|`configuration.action.eventName (Initiate Custom Event)`|string|The name of the custom event||
|`configuration.action.mode (Initiate Custom Event)`|enumeration|Whether to initiate the custom event for the parents of children of the card that triggered the automation. Possible values are <br /> `parents` <br /> `children`.||
|`secrets`|object|Contains secret information being provided for an action.||
|`secrets.github`|string|GitHub access token to associate with a GitHub Action automation||
|`secrets.signingKey`|string|Key to use as part of signing the body for the `x-lk-signature` header on a Web Service Call automation||
|`updateSecrets`|boolean|Flag to indicate that secrets should be updated for the automation.||

\* Required

### Example Request

```json
{
    "actionType": 2,
    "description": "Notify on Blocked Cards",
    "enabled": true,
    "configuration": {
        "cardTypes": [
            "10112910837",
            "10112910838",
            "10112910840"
        ],
        "customIcons": [
            "10112910937"
        ],
        "lanes": [
            "10112910647",
            "10112910648"
        ],
        "priorities": [],
        "tags": [ "tagOne", "tagTwo" ],
        "tagsMode": "allTags",
        "assignees": [ "10112710349" ],
        "teamAssignees": [ "10114432333"],
        "assigneesMode": "anyAssignee",
        "isBlocked": true,
        "events": [
            "scheduled"
        ],
        "action": {
            "url": "https://my-incoming-slack-url.com",
            "messagePrefix": "**Blocked Card**",
            "includeDescription": true
        },
        "schedule": {
            "timeOfDayUtc": "14:00",
            "daysOfTheWeek": [
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday"
            ]
        }
    }
}
```

### Example Successful Response
200 Success

```json
{
    "cardAutomation": {
        "id": "10135649061",
        "boardId": "10112910528",
        "userId": "25038",
        "description": "Notify on Blocked Cards",
        "enabled": true,
        "events": [
            "scheduled"
        ],
        "schedule": {
            "timeOfDayUtc": "14:00",
            "daysOfTheWeek": [
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday"
            ]
        },
        "filter": {
            "cardTypes": [
                "10112910837",
                "10112910838",
                "10112910840"
            ],
            "customIcons": [
                "10112910937"
            ],
            "lanes": [
                "10112910647",
                "10112910648"
            ],
            "priorities": [],
            "tags": [ "tagOne", "tagTwo" ],
            "tagsMode": "allTags",
            "assignees": [ "10112710349" ],
            "teamAssignees": [ "10114432333"],
            "assigneesMode": "anyAssignee",
            "isBlocked": true
        },
        "action": {
            "type": "postToSlack",
            "params": {
                "url": "https://my-incoming-slack-url.com",
                "messagePrefix": "**Blocked Card**",
                "includeDescription": true
            }
        },
        "hasSecrets": false
    }
}
```

