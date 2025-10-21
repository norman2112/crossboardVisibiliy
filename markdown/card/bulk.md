---
title: Bulk update cards
public: false
repo: core-card-service
---

# PATCH /io/card/bulk
Bulk update cards. Provide an array of cardIds to update, and the update operations to apply to each card. This endpoint uses the same data structure for update operations as specified in the [Card Update](/markdown/card/update.md) endpoint. All updates must be valid for all specified cards.

### Request Properties
|Param|Type|Usage|
|---|---|---|
|`cardIds`*|string array|collection of card ids to update|
|`updates`*|object array|collection of operations as outlined [here](/markdown/card/update.md) ( see exceptions ** )|

\* required

** Updating `mirrorSourceCardId` is not permitted when bulk updating cards.


### Example Request Body
```json
{
    "cardIds": ["10114433203", "10114433205"],
    "updates": [
      { "op": "replace", "path": "/title", "value": "Desert" },
      { "op": "replace", "path": "/description", "value": "Cactus 🌵" },
    ]
}
```

### Example Successful Response

202 Accepted
