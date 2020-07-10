---
title: "Showing tasks"
weight: 4
description: >
  Learn how to list your tasks.
---

* `ultralist list` or `ultralist l` - List all tasks.

### Filtering tasks

You can use filter criteria to show specific tasks.  Filter criteria is in the form of `thing:value`, much like [the syntax for filtering Github issues](https://docs.github.com/en/github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests).

Here are the following filters available:


### Filtering by date

`due:(tod|today|tom|tomorrow|overdue|thisweek|nextweek|lastweek|mon|tue|wed|thu|fri|sat|sun|none)`

**Examples**

* `ultralist l due:tod` - show tasks due today
* `ultralist l due:tom` - show tasks due tomorrow
* `ultralist l due:overdue` - show overdue tasks
* `ultralist l due:agenda` - show tasks who's due date is today or earlier (overdue)

Currently, only one `due` filter is allowed.

### Filtering by completion status

* `is:completed`
* `not:completed`

**Examples**

* `ultralist l is:completed` - show only completed tasks
* `ultralist l not:completed` - show only incomplete tasks

### Filtering by priority status

* `is:priority`
* `not:priority`

**Examples**

* `ultralist l is:priority` - show only completed tasks
* `ultralist l not:priority` - show only incomplete tasks

### Filtering by archived status

* `is:archived`
* `not:archived` - note that this option is **implicitly added**!  Ultralist defaults to not showing archived tasks.

**Examples**

* `ultralist l is:archived` - show archived tasks

### Filtering by completion date

* `completed:(tod|today)`
* `completed:thisweek`

**Examples**

* `ultralist l completed:tod` - show tasks that were completed today
* `ultralist l completed:thisweek` - show tasks that were completed this week

### Filtering by a project or context

* `ultralist l @pomodoro` - show all tasks with a context of `@pomodoro`.
* `ultralist l +project` - show all tasks with a project of `+project`.

Remember, `ultralist` is a unix tool, just like any other.  You can use `grep` to combine a complex listing with a filter.

Example: `ultralist l due:tom | grep @bob`

### Grouping

* `group:project`
* `group:context`

tasks can be grouped by project or context

* `ultralist l group:project` or `ultralist l group:p` - List all tasks, grouped by project. 
* `ultralist l group:context` or `ultralist l group:c` - List all tasks, grouped by context. 

### Showing tasks with notes

Use the `--notes` flag to show notes on tasks when listing.

```
$ ultralist l --notes due:agenda group:p
$ ultralist l --notes due:agenda group:p
```
### Real world examples of combining groups and listing filters

Below is the command I run every day.  So often, in fact, I have an alias for it called `up`:

```
ultralist l due:agenda group:project
```

Show all tasks due tomorrow, and group them by context:

```
ultralist l group:context due:tom
```

Look back at all the tasks you completed today, and feel good about yourself:

```
ultralist l completed:tod
```

