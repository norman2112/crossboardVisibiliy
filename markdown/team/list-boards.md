---
title: Get a list of team's boards
public: true
repo: core-account-service
---
# GET /io/team/:teamId/board
Get a list of all boards the team has been assigned to either directly or inherited via nested teams.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`offset`|integer|Set the "start row" number of the first board to be returned|0|
|`limit`|integer|Set the number of boards to be returned|200|

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/team/100100/board \
  -H 'Authorization: Basic base64encodedauthhere'
```

### Example Successful Response

200 Success
```json
{
    "boards": [
        {
            "boardId": "10626194350",
            "boardTitle": "New Network Team",
            "effectiveRole": "boardManager",
            "hasDirectRole": false,
            "hasInheritedRole": true,
            "hasRoleMismatch": false,
            "teams": [
                {
                    "teamId": "10626208485",
                    "teamTitle": "Primary Team",
                    "role": "boardManager",
                    "type": "inherited"
                }
            ]
        },
        {
            "boardId": "10626225453",
            "boardTitle": "Something",
            "effectiveRole": "boardReader",
            "hasDirectRole": true,
            "hasInheritedRole": true,
            "hasRoleMismatch": true,
            "teams": [
                {
                    "teamId": "10626208485",
                    "teamTitle": "Primary Team",
                    "role": "boardReader",
                    "type": "inherited"
                },
                {
                    "teamId": "100100",
                    "teamTitle": "First Team",
                    "role": "boardUser",
                    "type": "direct"
                }
            ]
        },
        {
            "boardId": "10626225499",
            "boardTitle": "Board With Teams",
            "effectiveRole": "boardUser",
            "hasDirectRole": true,
            "hasInheritedRole": false,
            "hasRoleMismatch": false,
            "teams": [
                {
                    "teamId": "100100",
                    "teamTitle": "First Team",
                    "role": "boardUser",
                    "type": "direct"
                }
            ]
        }
    ]
}
```


### Response Properties
|Property|Type|Note|
|--------|----|----|
|`pageMeta`|object||
|`pageMeta.totalRecords`|integer|total number of boards|
|`pageMeta.offset`|integer|offset used in query|
|`pageMeta.limit`|integer|limit used in query|
|`pageMeta.startRow`|integer|start row of returned boards|
|`pageMeta.endRow`|integer|end row of returned boards|
|`boards`|array of boards||
|`boards[].boardId`|integer id|internal unique id|
|`boards[].boardTitle`|string||
|`boards[].effectiveRole`|enum|one of: `boardReader`, `boardUser`, `boardManager`, `boardAdministrator`, `boardCreator`|
|`boards[].hasDirectRole`|boolean|the team is directly assigned to the board|
|`boards[].hasInheritedRole`|boolean|the team is assigned to the board due to being a subteam of a team that is directly assigned to the board|
|`boards[].hasRoleMismatch`|boolean|the team is assigned to the board via multiple paths with different roles|
|`boards[].teams`|array of object|teams that are the source of the board assignment|
|`boards[].teams[].teamId`|integer id|internal unique id|
|`boards[].teams[].teamTitle`|string||
|`boards[].teams[].role`|enum|one of: `boardReader`, `boardUser`, `boardManager`, `boardAdministrator`, `boardCreator`|
|`boards[].teams[].type`|enum|one of: `direct`, `inherited`, defines if the permission is applied directly to the team or inherited by being a subteam of a team with the assignment|

