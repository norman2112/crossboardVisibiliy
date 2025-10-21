---
title: Export a board as a template
public: false
repo: core-board-service
---
# GET /io/board/:boardId/template
Export the board structure as a template file.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`includeCards`|boolean|If true, it will generate the template with the cards from the board|false|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/943188457/template' \
  -H 'Authorization: Basic base64encodedauth' \
```
### Response

A plain text file download that contains the generated board template.
