---
title: Move a card
public: true
repo: core-card-service
---
# POST /io/card/move
This API has a number of uses:
* Move cards between lanes
* Change a card's index in a lane
* Move task cards between task lanes
* Convert a card to a task
* Convert a task to a card
* Move cards to other boards

### Example Requests:
Moving a single card to the end of another lane
```json
{
  "cardIds":["637797483"],
  "destination":{
      "laneId": "637797516"
  }
}
```
Moving a card to a specific index

_Note: Avoid using a specific index if possible. Operations that explicitly modify index are slower._
```json
{
  "cardIds":["637797483"],
  "destination":{
      "laneId": "637797516",
      "index": 2
  }
}
```
Moving multiple cards to the default drop lane on another board
```json
{
  "cardIds":["637797483", "8675309"],
  "destination":{
      "boardId": "90210"
  }
}
```
Converting a card to a task
```json
{
  "cardIds":["637797483"],
  "destination":{
      "cardId": "637797516"
  }
}
```

### Example Success Response
200 OK
```
{}
```

