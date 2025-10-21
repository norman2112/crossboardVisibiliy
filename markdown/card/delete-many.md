---
title: Delete multiple cards
public: true
repo: core-leankit-api
---
# DELETE /io/card/
Delete multiple cards. All cards must be on the same board. The board setting "Allow users to delete cards" must be checked.

### Example Request
```json
{
  "cardIds": ["945197148", "945195349"]
}
```

### Example Successful Response

204 No Content

