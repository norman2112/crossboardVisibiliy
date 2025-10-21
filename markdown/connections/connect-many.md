---
title: Connect a parent card to one or more child cards
deprecated: true
public: true
repo: core-leankit-api
---
# POST /io/card/:cardId/connection/many
Connect a parent card to one or more child cards.

_Note: This has been deprecated in favor of our [connections create](/markdown/connections/create.md) endpoint._

### Example Request
Connect these two child cards to the parent specified in the url
```json
{
	"connectedCardIds": [ "944509659", "944511282" ]
}
```

### Example Successful Response
200 OK
```json
{
    "card": {
        "id": "943206946",
        "title": "Card Three",
        "boardId": "943188457",
        "boardTitle": "Example board",
        "boardVersion": "92"
    },
    "connections": [
        {
            "connectedCard": {
                "id": "944509659",
                "title": "Example Child Card",
                "boardId": "943188457",
                "boardTitle": "Example board",
                "boardVersion": "92"
            },
            "connectionType": "child"
        },
        {
            "connectedCard": {
                "id": "944511282",
                "title": "Example Child Card Two",
                "boardId": "943188457",
                "boardTitle": "Example board",
                "boardVersion": "92"
            },
            "connectionType": "child"
        }
    ]
}
```

