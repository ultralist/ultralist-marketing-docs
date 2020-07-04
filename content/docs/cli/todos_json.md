---
id: todos_json
title: The .todos.json file format
sidebar_label: The .todos.json file format
---

## `.todos.json` file format

`ultralist` stores todos in a very simple, self-explanatory format.

```json
[
  {
    "id": 1,
    "uuid": "55dd9b2d-5bdf-4d4c-b9b7-73e83d94ddb2",
    "subject": "support for priorities +feature",
    "projects": [
      "feature"
    ],
    "contexts": [],
    "due": "2016-07-08",
    "completed": false,
    "completedDate": "",
    "archived": false,
    "isPriority": false,
    "notes": [
      "this is a note"
    ]
  },
  {
    "id": 2,
    "uuid": "8cf1083e-a230-454f-82f3-49ebee2fc40d",
    "subject": "fix bug with 'tod' not being recognized +bug",
    "projects": [
      "bug"
    ],
    "contexts": [],
    "due": "2016-07-08",
    "completed": false,
    "completedDate": "",
    "archived": false,
    "isPriority": false,
    "notes": null
  }
]
```
