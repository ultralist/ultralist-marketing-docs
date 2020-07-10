---
title: "The .todos.json file format"
weight: 7
description: A quick breakdown of how Ultralist stores tasks.
---

Ultralist stores todos in a very simple, self-explanatory format.

`.todos.json` is stored in the directory you ran `ultralist init` in.  If the ultralist binary does not see a `.todos.json` in your current directory, it will try to read the `.todos.json` from your home directory.

### .todos.json example

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
