---
title: Get cardsIds within a specific increment status category
public: true
repo: core-account-service
openApi: true
operationId: getIncrementCardsByStatus
---
# GET /io/series/:seriesId/increment/:incrementId/status/:category
List the cardIds of cards in the increment that are currently in the increment status category specified by the
`:category` path parameter.

## Path Parameters

| Name | Description | Required | Schema |
| ---- | ----------- | -------- | ------ |
| seriesId | ID of the planning series | Yes | string |
| incrementId | ID of the increment | Yes | string |
| [category](#category-values) | Status category of cards to retrieve | Yes | string |

## Query Parameters
| Name | Description | Required | Schema | Format |
| ---- | ----------- | -------- | ------ | ------ |
| boards | Board ids to filter results to specific boards | no | string | comma-separated values |

### Category Values

The `category` parameter accepts the following values:
- `notStarted` - Cards that have not been started yet
- `inProgress` - Cards that are currently in progress
- `completed` - Cards that are completed
- `committed` - Cards that are committed to the increment
- `unplanned` - Cards that are in the increment but were not originally planned

## Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successfully retrieved card IDs | [ExpandStatusCategoryResponse](#expandstatuscategoryresponse) |
| 400 | Bad request, invalid parameters | Error |
| 404 | Series or increment not found | Error |

### ExpandStatusCategoryResponse

| Property | Type | Description |
| -------- | ---- | ----------- |
| cardIds | array[string] | List of card IDs in the specified category |
| blockedCardIds | array[string] | Subset of cardIds that are currently blocked |

#### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/series/1234/increment/5678/status/inProgress \
  -H 'Authorization: Basic base64encodedauthhere'
```

#### Example Successful Response
200 OK
```json
{
    "cardIds": [
        "2222",
        "3333"
    ],
    "blockedCardIds": [
        "3333"
    ]
}
```
