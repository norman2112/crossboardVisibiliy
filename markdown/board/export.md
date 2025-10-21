---
title: Export board history
public: true
repo: core-board-service
---
# GET /io/board/:boardId/export
Download a board's history. This is used by the "Export Board History" option on the Board Settings menu.

### Example Request
```shell
curl -X GET \
  https://myaccount.leankit.com/io/board/10113285944/export \
  -H 'Authorization: Basic base64encodedauthhere='
```

### Example Response
```text
When,What,Who,Card,Detail,Card Id,From Lane,From Lane Id,To Lane,To Lane Id,EventDescription
01/08/2020 at 11:23:01 AM,Card Move Event,john.mathis@leankit.com,E1 again,Johnny Mathis moved the Card [E1 again] from Doing Now: E1 to E1: E1-a.,10113988569,Doing Now: E1,10113988905,E1: E1-a,10113988921,01/08/2020 11:23:01 AM: Johnny Mathis moved the Card [E1 again] from Doing Now: E1 to E1: E1-a.
01/07/2020 at 01:00:55 PM,Card Move Event,john.mathis@leankit.com,E1 again,Johnny Mathis moved the Card [E1 again] from Not Started - Future Work: Approved to Doing Now: E1.,10113988569,Not Started - Future Work: Approved,10113286046,Doing Now: E1,10113988905,01/07/2020 01:00:55 PM: Johnny Mathis moved the Card [E1 again] from Not Started - Future Work: Approved to Doing Now: E1.
```


