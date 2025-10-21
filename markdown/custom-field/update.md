---
title: Update a custom field
public: true
repo: core-leankit-api
---
# PATCH /io/board/:boardId/customfield
Add, update, or remove custom fields on a board by providing an array of operations to perform.

### Request Properties
|Param|Type|Usage|Default|
|-----|-----|------|-------|
|`op`*|enumeration|`add`, `replace`, or `remove`||
|`path`*|string|A path targeting an existing record by id (\"/1234\") or  \"/\" for an add operation ||
|`value.label`|string|||
|`value.helpText`|string|||
|`value.type`|enumeration|`text`, `number`, `date`, `choice`, `multi`||
|`value.index`|integer|Ordering of field for display purposes||
|`value.choiceConfiguration.choices`|array|List of strings to show in dropdown||

### Example Update Request

```json
[
  {
    "op": "replace",
    "path": "/101010",
    "value": {
      "label": "New field name",
      "helpText": "Helpful text",
      "choiceConfiguration": {
        "choices": ["Option1", "Option2"]
      }
    }
  },
  {
    "op": "replace",
    "path": "/101011",
    "value": {
      "label": "Another field",
      "helpText": "More helpful text"
    }
  }
]
```

### Example Create Request

```json
[
  {
    "op": "add",
    "path": "/",
    "value": {
      "label": "New Number Field",
      "helpText": "Helpful text",
      "type": "number"
    }
  },
  {
    "op": "add",
    "path": "/",
    "value": {
      "label": "New Text Field",
      "helpText": "Helpful text",
      "type": "text"
    }
  }
]
```

### Example Remove Request

```json
[
  {
    "op": "remove",
    "path": "/101010"
  },
  {
    "op": "remove",
    "path": "/101011"
  }
]

```

### Example Successful Response
200 OK

```json
{
  "customFields": [
    {
      "id":"10113041726",
      "index":0,
      "type":"text",
      "label":"A thing",
      "helpText":"Maybe?",
      "createdOn":"2020-01-10T20:50:43Z",
      "createdBy":"25035"
    },
    {
      "id":"10113041729",
      "index":1,
      "type":"choice",
      "label":"A list!",
      "helpText":"",
      "choiceConfiguration": {
        "choices": ["1","2","3"]
      },
      "createdOn":"2020-01-10T21:01:36Z",
      "createdBy":"25035"
    }
  ]
}
```
