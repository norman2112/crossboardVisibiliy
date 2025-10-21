---
title: Create dependencies
public: true
repo: core-card-service
---
# POST /io/card/dependency
Create dependencies

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|----|
|`cardIds`*|string[]|List of card ids||
|`dependsOnCardIds`*|string[]|List of card ids depended on by `cardIds`||
|`timing`|enumeration|One of:<br />`startToStart`<br />`startToFinish`, <br />`finishToStart`,<br />`finishToFinish`|`finishToStart`|

\* Required

### Example Request
Link one or more cards to one or more dependencies

```json
{
   "cardIds":[
      "1111",
      "2222"
   ],
   "dependsOnCardIds":[
      "3333",
      "4444"
   ],
   "timing": "startToFinish"
}
```

**Timing values**:

- *startToStart* - Dependency can’t start until the card starts
- *startToFinish* - Dependency can’t finish until the card starts
- *finishToStart* - Dependency can’t start until the card finishes
- *finishToFinish* - Dependency can’t finish until the card finishes

### Example Successful Response
201 Created

