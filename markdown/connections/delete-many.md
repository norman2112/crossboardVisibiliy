---
title: Delete Connections
public: true
repo: core-leankit-api
---
# DELETE /io/card/connections
Delete one or more parent or child connections.

### Example Request
Delete a child card connection
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

Delete multiple parent connections from multiple cards
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
204 No Content

