---
title: Delete dependencies
public: true
repo: core-card-service
---
# DELETE /io/card/dependency
Delete dependencies

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|----|
|`cardIds`*|string[]|List of card ids||
|`dependsOnCardIds`*|string[]|List of card ids depended on by `cardIds` to unlink||

\* Required

### Example Request
Unlink one or more cards from one or more dependencies

```json
{
   "cardIds":[
      "1111"
   ],
   "dependsOnCardIds":[
      "3333",
      "4444"
   ]
}
```

### Example Successful Response
204 no Content

