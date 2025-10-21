---
title: Get a list of comments for a card
public: true
repo: core-card-service
---
# GET /io/card/:cardId/comment
Get a list of comments for a card.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first comment to be returned.|0|
|`limit`|integer|Set the number of comments to be returned.|400|
|`sortBy`|enumeration|Set the ordering of the results. One of:<br />`newest`<br />`oldest`|`oldest`|
|`includeChildComments`|boolean|Set to 'true' to include child card comments, will interleave card/child comments in response payload|false|


### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/card/943206946/comment \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "pageMeta": {
        "totalRecords": 1,
        "offset": 0,
        "limit": 200,
        "startRow": 1,
        "endRow": 1
    },
    "comments": [
        {
            "id": "943867019",
            "createdOn": "2019-12-04T20:37:23Z",
            "createdBy": {
                "id": "478440842",
                "emailAddress": "user@leankit.com",
                "fullName": "First Last",
                "avatar": "/avatar/Show/478440842?s=25"
            },
            "text": "<p>This is a sample comment</p>",
            "cardId": "123456789"
        }
    ],
    "cards": [
      {
        "id": "123456789",
        "boardId": "000000001"
        // . . . Card Face properties
      }
    ],
    "boards": [
      {
        "id": "000000001",
        "title": "Board Title",
        "level": {
            "id": "961018244",
            "depth": 1,
            "maxDepth": 4,
            "label": "Portfolio ",
            "color": "#2966a3",
          },
      }
    ]
}
```

### Response Properties
|Property|Type|Note|
|--------|----|----|
|`pageMeta`|object||
|`comments`|array of comments| All card comments.  When specifying `includeChildComments` child comments will also be returned|
|`cards`|array of Card Faces|Contains Card Faces for all comments represented in the comments array ( see [/io/cardface](/markdown/card-face/list.md) for schema). Returned only when `includeChildComments` is true|
|`boards`|array of boards|Contains boards for all cards represented in the array of cardfaces. Returned only when `includeChildComments` is true|

### Comment Properties
|Property|Type|Note|
|--------|----|----|
|`id`|integer|internal unique id of comment|
|`createdOn`|date|comment creation date|
|`createdBy`|object|example: `{ id: 123, fullName: "John Smith", avatar: (link to avatar), emailAddress: "john@myco.com" }`|
|`text`|string|comment text|
|`cardId`|integer|the internal unique id of the comment's card|

### Board Properties
|Property|Type|Note|
|--------|----|----|
|`id`|integer|internal unique id of board|
|`title`|string|board title|
|`level`|object|Requires the board levels feature.  example: `{ "id": "1", "depth": 1, "maxDepth": 4, "label": "Portfolio ", "color": "#2966a3", }` ( see [/io/boardLevel](/markdown/board-level/list.md) for schema )|
