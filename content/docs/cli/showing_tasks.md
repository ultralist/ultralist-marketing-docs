---
title: "Showing tasks"
weight: 4
description: >
  Learn how to list your tasks.
---

* `ultralist list` or `ultralist l` - List all unarchived todos.
* `ultralist l archived` - List archived todos.

By default, when listing todos, archived todos will be filtered out.  You must explicitly pass `l archived` to see archived todos.

### Filtering todos by due date

Ultralist supports a variety of methods to show todos that are due on a certain date.

* `ultralist l due tod` - show all todos due today
* `ultralist l due tom` - show all todos due tomorrow
* `ultralist l due this week` - show all todos due this week
* `ultralist l overdue` - show all todos that are overdue
* `ultralist l due <mon|tue|wed|thu|fri|sat|sun>` - show todos due on a specific day, looking forward

### The agenda view

* `ultralist l agenda` - Show all uncomplete todos due today or that are overdue.  It does not show todos due in the future.  This is a great view to use all the time!

### Listing completed todos

* `ultralist l completed tod` - show todos that were completed today
* `ultralist l completed this week` - show todos that were completed this week

### Listing todos by project or context

* `ultralist l @pomodoro` - show all todos with a context of `@pomodoro`.
* `ultralist l +project` - show all todos with a project of `+project`.

Remember, `ultralist` is a unix tool, just like any other.  You can use `grep` to combine a complex listing with a filter.

Example: `ultralist l due tom | grep @bob`

### Grouping

Todos can be grouped by project or context

* `ultralist l by project` or `ultralist l by p` - List all todos, grouped by project. 
* `ultralist l by context` or `ultralist l by c` - List all todos, grouped by context. 

### Real world examples of combining groups and listing filters

* `ultralist l agenda by project` - This is the command I run every day.  So often, in fact, I have an alias for it called `up`.
* `ultralist l by project due tom` - Show all todos due tomorrow, and group them by project
* `ultralist l completed tod` - Look back at all the todos you completed today, and feel good about yourself.

### Showing tasks with notes

You can also list all of your task notes when listing.

```
$ ultralist l notes agenda by p
$ ultralist l n agenda by p
```

Simply change `list` or `l` to `list notes` or `l n`.  You'll see a list of notes for your tasks.
