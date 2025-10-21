---
title: Get recent card activity
public: true
repo: core-card-service
---

# GET /io/card/:cardId/activity
Get card activity.

### Query Params
|Param|Type|Usage|Default|
|---|---|---|---|
|`limit`|integer|Specify the number of events to receive|100|
|`eventId`|string|Support paging of events by specifying the last event id received.|null|
|`direction`|enumeration|Specify `older` posts as you scroll, or `newer`.|`older`|


### Example Requests

#### Defaults
```shell
curl -X GET \
	https://myaccount.leankit.com/io/card/10113988569/activity' \
	-H 'Authorization: Basic base64encodedauth' \
```

####
```shell
curl -X GET \
	https://myaccount.leankit.com/io/card/10113988569/activity?limit=25&eventId=457634234&direction=newer' \
	-H 'Authorization: Basic base64encodedauth' \
```

### Example Successful Response
```json
{
	"events": [
		{
			"id": "10113988923",
			"type": "cardMoved",
			"timestamp": "2020-01-08T17:23:01Z",
			"user": {
				"id": "1111",
				"fullName": "Test User",
				"avatar": "https://myaccount.leankit.com/avatar/show/1111/?s=25"
			},
			"data": {
				"card": {
					"id": "1000",
					"title": "Test Card"
				},
				"fromLane": {
					"id": "100",
					"title": "Doing Now"
				},
				"toLane": {
					"id": "101",
					"title": "Finished"
				}
			}
		}
	]
}
```

## Event Types:

### Attachments
- [attachmentAdded](#attachmentAdded)
- [attachmentDeleted](#attachmentDeleted)

### Cards
- [cardCreated](#cardCreated)
- [cardChanged](#cardChanged)
- [cardBlocked](#cardBlocked)
- [cardUnblocked](#cardUnblocked)
- [cardMoved](#cardMoved)
- [cardMovedOffBoard](#cardMovedOffBoard)
- [cardMovedToTaskBoard](#cardMovedToTaskBoard)

### Tasks
- [taskCardCreated](#taskCardCreated)
- [taskCardMoved](#taskCardMoved)
- [taskCardMovedToBoard](#taskCardMovedToBoard)

### Users
- [userAssigned](#userAssigned)
- [userUnassigned](#userUnassigned)

### Comments
- [commentAdded](#commentAdded)

### Connections
- [cardChildConnectionCreated](#cardChildConnectionCreated)
- [cardChildConnectionDeleted](#cardChildConnectionDeleted)
- [cardParentConnectionCreated](#cardParentConnectionCreated)
- [cardParentConnectionDeleted](#cardParentConnectionDeleted)
- [boardConnected](#boardConnected)
- [boardDisconnected](#boardDisconnected)

### Card Mirroring
- [cardSyncDestinationCreated](#cardSyncDestinationCreated)
- [cardSyncDestinationDeleted](#cardSyncDestinationDeleted)
- [cardSyncSourceCreated](#cardSyncSourceCreated)
- [cardSyncSourceDeleted](#cardSyncSourceDeleted)

### Other
- [laneWipExceeded](#laneWipExceeded)
- [userWipExceeded](#userWipExceeded)

## Event Data:
#### <a name="attachmentAdded">attachmentAdded</a>
```json
{
	"type": "attachmentAdded",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"fileName": "test.txt",
		"comment": "attachment comment"
	}
}
```

#### <a name="attachmentDeleted">attachmentDeleted</a>
```json
{
	"type": "attachmentDeleted",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"fileName": "test.txt",
		"comment": "attachment comment"
	}
}
```

#### <a name="cardCreated">cardCreated</a>
```json
{
	"type": "cardCreated",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"lane": {
			"id": "100",
			"title": "Doing Now"
		}
	}
}
```

#### <a name="cardChanged">cardChanged</a>
```json
{
	"type": "cardChanged",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"fields": [
			{
				"name": "size",
				"oldValue": "0",
				"newValue": "1"
			},
			{
				"name": "description",
				"oldValue": null,
				"newValue": "<p>Updated Description</p>"
			}
		]
	}
}
```

#### <a name="cardBlocked">cardBlocked</a>
```json
{
	"type": "cardBlocked",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"comment": "test blocking comment"
	}
}
```

#### <a name="cardUnblocked">cardUnblocked</a>
```json
{
	"type": "cardUnblocked",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"comment": "test unblocking comment"
	}
}
```

#### <a name="cardMoved">cardMoved</a>
```json
{
	"type": "cardMoved",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"fromLane": {
			"id": "100",
			"title": "Doing Now"
		},
		"toLane": {
			"id": "101",
			"title": "Finished"
		}
	}
}
```

#### <a name="cardMovedOffBoard">cardMovedOffBoard</a>
```json
{
	"type": "cardMovedOffBoard",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"fromLane": {
			"id": "100",
			"title": "Doing Now"
		},
		"fromBoard": {
			"id": "10",
			"title": "Board A"
		},
		"toBoard": {
			"id": "20",
			"title": "Board B"
		},
		"toLane": {
			"id": "200",
			"title": "Not Started"
		}
	}
}
```

#### <a name="cardMovedToTaskBoard">cardMovedToTaskBoard</a>
```json
{
	"type": "cardMovedToTaskBoard",
	"data": {
		"card": {
			"id": "2000",
			"title": "Card converted to Task"
		},
		"fromLane": {
			"id": "100",
			"title": "Doing Now"
		},
		"toLane": {
			"id": "110",
			"title": "ToDo"
		},
		"parentCard": {
			"id": "1000",
			"title": "Test Card"
		}
	}
}
```

#### <a name="taskCardCreated">taskCardCreated</a>
```json
{
	"type": "taskCardCreated",
	"data": {
		"card": {
			"id": "3000",
			"title": "Task Card"
		},
		"lane": {
			"id": "110",
			"title": "ToDo"
		},
		"parentCard": {
			"id": "1000",
			"title": "Test Card"
		}
	}
}
```

#### <a name="taskCardMoved">taskCardMoved</a>
```json
{
	"type": "taskCardMoved",
	"data": {
		"card": {
			"id": "3000",
			"title": "Task Card"
		},
		"fromLane": {
			"id": "110",
			"title": "ToDo"
		},
		"toLane": {
			"id": "111",
			"title": "Doing"
		},
		"parentCard": {
			"id": "1000",
			"title": "Test Card"
		}
	}
}
```

#### <a name="taskCardMovedToBoard">taskCardMovedToBoard</a>
```json
{
	"type": "taskCardMovedToBoard",
	"data": {
		"card": {
			"id": "3000",
			"title": "Task Card"
		},
		"fromLane": {
			"id": "111",
			"title": "Doing"
		},
		"fromBoard": {
			"id": "10",
			"title": "Board A"
		},
		"toBoard": {
			"id": "20",
			"title": "Board B"
		},
		"toLane": {
			"id": "200",
			"title": "Not Started"
		}
	}
}
```

#### <a name="userAssigned">userAssigned</a>
```json
{
	"type": "userAssigned",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"user": {
			"id": "1111",
			"fullName": "Test User",
			"emailAddress": "test.user@myaccount.com",
			"avatar": "http://myaccount.leankit.com/avatar/show/1111/?s=25"
		}
	}
}
```

#### <a name="userUnassigned">userUnassigned</a>
```json
{
	"type": "userUnassigned",
	"data": {
	"card": {
	  "id": "1000",
	  "title": "Test Card"
	},
	"user": {
	  "id": "1111",
	  "fullName": "Test User",
	  "emailAddress": "test.user@myaccount.com",
	  "avatar": "http://myaccount.leankit.com/avatar/show/1111/?s=25"
	}
  }
}
```

#### <a name="commentAdded">commentAdded</a>
```json
{
	"type": "commentAdded",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"comment": "<p>test comment</p>"
	}
}
```

#### <a name="cardChildConnectionCreated">cardChildConnectionCreated</a>
```json
{
	"type": "cardChildConnectionCreated",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"childCard": {
			"id": "4000",
			"title": "child"
		}
	}
}
```

#### <a name="cardChildConnectionDeleted">cardChildConnectionDeleted</a>
```json
{
	"type": "cardChildConnectionDeleted",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"childCard": {
			"id": "4000",
			"title": "child"
		}
	}
}
```

#### <a name="cardParentConnectionCreated">cardParentConnectionCreated</a>
```json
{
	"type": "cardParentConnectionCreated",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"parentCard": {
			"id": "5000",
			"title": "Parent Card"
		}
	}
}
```

#### <a name="cardParentConnectionDeleted">cardParentConnectionDeleted</a>
```json
{
	"type": "cardParentConnectionDeleted",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"parentCard": {
			"id": "5000",
			"title": "Parent Card"
		}
	}
}
```

#### <a name="boardConnected">boardConnected</a>
```json
{
	"type": "boardConnected",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"board": {
			"id": "10",
			"title": "Board A"
		}
	}
}
```

#### <a name="boardDisconnected">boardDisconnected</a>
```json
{
	"type": "boardDisconnected",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"board": {
			"id": "10",
			"title": "Board A"
		}
	}
}
```

#### <a name="cardSyncDestinationCreated">cardSyncDestinationCreated</a>
```json
{
	"type": "cardSyncDestinationCreated",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"destinationCard": {
			"id": "1002",
			"title": "Test Card"
		}
	}
}
```

#### <a name="cardSyncDestinationDeleted">cardSyncDestinationDeleted</a>
```json
{
	"type": "cardSyncDestinationDeleted",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"destinationCard": {
			"id": "1002",
			"title": "Test Card"
		}
	}
}
```

#### <a name="cardSyncSourceCreated">cardSyncSourceCreated</a>
```json
{
	"type": "cardSyncSourceCreated",
	"data": {
		"card": {
			"id": "1002",
			"title": "Test Card"
		},
		"sourceCard": {
			"id": "1000",
			"title": "Test Card"
		}
	}
}
```

#### <a name="cardSyncSourceDeleted">cardSyncSourceDeleted</a>
```json
{
	"type": "cardSyncSourceDeleted",
	"data": {
		"card": {
			"id": "1002",
			"title": "Test Card"
		},
		"sourceCard": {
			"id": "1000",
			"title": "Test Card"
		}
	}
}
```

#### <a name="laneWipExceeded">laneWipExceeded</a>
```json
{
	"type": "laneWipExceeded",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"lane": {
			"id": "100",
			"title": "Doing Now"
		},
		"comment": "Wip override comment"
	}
}
```

#### <a name="userWipExceeded">userWipExceeded</a>
```json
{
	"type": "userWipExceeded",
	"data": {
		"card": {
			"id": "1000",
			"title": "Test Card"
		},
		"user": {
			"id": "1111",
			"fullName": "Test User",
			"emailAddress": "test.user@myaccount.com",
			"avatar": "http://myaccount.leankit.com/avatar/show/1111/?s=25"
		},
		"comment": "test user wip override"
	}
}
```
