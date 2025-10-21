---
title: Update dependencies
public: true
repo: core-card-service
---
# PATCH /io/card/dependency
Update dependencies

### Request Properties
|Param|Type|Usage|Default|
|---|---|---|----|
|`cardId`*|string|Card id||
|`dependsOnCardId`*|string|Card id that is depended on by `cardId`||
|`timing`*|enumeration|One of:<br />`startToStart`<br />`startToFinish`, <br />`finishToStart`,<br />`finishToFinish`|`finishToStart`|

\* Required

### Example Request
Update the timing value for one or more dependencies

```json
[
  {
    "cardId": "1111",
    "dependsOnCardId": "3333",
    "timing": "finishToStart"
  },
  {
    "cardId": "2222",
    "dependsOnCardId": "4444",
    "timing": "finishToFinish"
  }
]
```

**Timing values**:

- *startToStart* - Dependency can’t start until the card starts
- *startToFinish* - Dependency can’t finish until the card starts
- *finishToStart* - Dependency can’t start until the card finishes
- *finishToFinish* - Dependency can’t finish until the card finishes

### Example Successful Response
200 OK

