---
title: Create parent and child connections
public: true
repo: core-card-service
---
# POST /io/card/connections
Connect cards to child or parent cards.

### Example Request
Connect a card to a child card
```json
{
   "cardIds":[
      "943204705"
   ],
   "connections":{
      "children":[
         "943206826"
      ]
   }
}
```

Connect multiple cards to multiple parents
```json
{
   "cardIds":[
      "943206826",
      "943204705"
   ],
   "connections":{
      "parents":[
         "943206946",
         "943207144"
      ]
   }
}
```


### Example Successful Response
201 Created

