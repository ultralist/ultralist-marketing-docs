---
title: "Showing tasks"
weight: 4
description: >
  Learn how to list your tasks.
---

* `ultralist (list|l)` - List all tasks.

### Filtering tasks

You can use filter criteria to show specific tasks.  Filter criteria is in the form of `thing:value`, much like [the syntax for filtering Github issues](https://docs.github.com/en/github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests).

Here are the following filters available:

* `due`
* `duebefore`
* `dueafter`
* `completed`
* `priority`
* `archived`
* `status`
* `project`
* `context`


### Filtering by date

`due:(tod|today|tom|tomorrow|thisweek|nextweek|lastweek|mon|tue|wed|thu|fri|sat|sun|none|<specific date>)`

**Examples**

* `ultralist l due:tod` - show tasks due today
* `ultralist l duebefore:tom` - show tasks due before tomorrow (today and earlier)
* `ultralist l dueafter:tod` - show tasks due after today

Currently, only one `due` filter is allowed.

### Filtering tasks by completion or priority

* `completed:true`
* `completed:false`
* `priority:true`
* `priority:false`

**Examples**

* `ultralist l completed:true` - show only completed tasks
* `ultralist l completed:false` - show only incomplete tasks
* `ultralist l priority:true` - show only prioritized tasks
* `ultralist l priority:false` - show only non-prioritized tasks

### Filtering archived tasks

* `archived:true`
* `archived:false` - note that this option is **implicitly added**!  Ultralist defaults to not showing archived tasks.

**Examples**

* `ultralist l archived:true` - show archived tasks

### Filtering by completion date

* `completed:(tod|today)`
* `completed:thisweek`

**Examples**

* `ultralist l completed:tod` - show tasks that were completed today
* `ultralist l completed:thisweek` - show tasks that were completed this week

### Filtering by a project, context, or status

* `ultralist l project:mobile` - Show all tasks with a project of `mobile`
* `ultralist l project:mobile,devops` - Show all tasks with a project of `mobile` or `devops`

**Negation filters**

Adding a minus (`-`) to a project, context or status will remove those matching tasks from the list.

* `ultralist l project:-devops` - Show all tasks **without** a devops project.
* `ultralist l project:mobile,-devops` - Show only tasks with a project of `mobile` but exclude tasks with a `devops` project.

**Combining things**

* `ultralist l project:mobile status:next due:tod` - Show all tasks with a project of `mobile`, a status of `next`, and is due today.

**Combining with grep or fzf**

`ultralist` is a unix tool, just like any other.  You can use `grep` to combine a complex listing with a filter.

Example: `ultralist l due:tom | grep @bob`

Or you can have some fancy times by piping the output to `fzf`:

### Grouping

* `group:project`
* `group:context`
* `group:status`

* `ultralist l group:project` or `ultralist l group:p` - List all tasks, grouped by project.
* `ultralist l group:context` or `ultralist l group:c` - List all tasks, grouped by context.
* `ultralist l group:status` or `ultralist l group:s` - List all tasks, grouped by status.

### Showing tasks with notes

Use the `--notes` flag to show notes on tasks when listing.


* `ultralist l --notes duebefore:tom group:p`

### Real world examples of combining groups and listing filters


Below is the command I run every day.  So often, in fact, I have an alias for it called `now`:

* `ultralist l duebefore:tom status:now` - Show all tasks due today or earlier, with the status of `now` (I'm using [now/next/later](https://medium.com/adventures-in-consumer-technology/getting-things-done-the-now-next-later-framework-9cc786b4fad8) for prioritization)
* `ultralist l group:context due:tom` - Show all tasks due tomorrow, and group them by context:
* `ultralist l completed:tod` - Look back at all the tasks you completed today, and feel good about yourself:


