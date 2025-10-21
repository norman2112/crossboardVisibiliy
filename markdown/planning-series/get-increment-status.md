---
title: Get the status of cards in an increment
public: true
repo: core-account-service
openApi: true
operationId: getIncrementStatus
---
# GET /io/series/:seriesId/increment/:incrementId/status
Enumerates the total number of cards and the number of blocked cards in the increment by status category.

## Path Parameters

| Name | Description | Required | Schema | Format |
| ---- | ----------- | -------- | ------ | ------ |
| seriesId | ID of the planning series | Yes | string | uuid |
| incrementId | ID of the increment | Yes | string | uuid |

## Query Parameters
| Name | Description | Required | Schema | Format |
| ---- | ----------- | -------- | ------ | ------ |
| boards | Board ids to filter results to specific boards | no | string | comma-separated values |

## Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfully retrieved increment status | [IncrementStatusResponse](#incrementstatusresponse) |
| 400 | Bad request, invalid parameters | Error |
| 404 | Series or increment not found | Error |

### IncrementStatusResponse

| Property | Type | Description | Required |
| -------- | ---- | ----------- | -------- |
| notStarted | [StatusCategoryCount](#statuscategorycount) | Cards that have not been started yet | Yes |
| inProgress | [StatusCategoryCount](#statuscategorycount) | Cards that are currently in progress | Yes |
| completed | [StatusCategoryCount](#statuscategorycount) | Cards that are completed | Yes |
| committed | [StatusCategoryCount](#statuscategorycount) | Cards that are committed to the increment | Yes |
| unplanned | [StatusCategoryCount](#statuscategorycount) | Cards that are in the increment but were not originally planned | Yes |

### StatusCategoryCount

| Property | Type | Description | Required |
| -------- | ---- | ----------- | -------- |
| total | integer | Total number of cards in this category | Yes |
| blocked | integer | Number of blocked cards in this category | Yes |

## Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/series/1234/increment/5678/status \
  -H 'Authorization: Basic base64encodedauthhere'
```

## Example Successful Response
```json
{
    "notStarted": {
        "total": 2,
        "blocked": 0
    },
    "inProgress": {
        "total": 2,
        "blocked": 1
    },
    "completed": {
        "total": 2,
        "blocked": 0
    },
    "committed": {
        "total": 5,
        "blocked": 1
    },
    "unplanned": {
        "total": 1,
        "blocked": 0
    }
}
```
