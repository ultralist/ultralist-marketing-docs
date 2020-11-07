---
title: "Task recurrence"
weight: 3
---

You can set tasks to recur by using the `recur` and `until` directives.  If a task recurs, a new task will be created when the current task is completed.

### Using `recur`

* `ultralist add Daily standup recur:weekdays` - add a recurring task
* `ultralist edit 3 recur:monthly` - edit an existing task to recur

Tasks can recur with the following cadence:

* `daily`
* `weekdays` (Monday-Friday)
* `weekly`
* `monthly`
* `yearly`
* `none`

You can cancel recurrence by editing a todo and setting `recur` to `none`:

`ultralist e 23 recur:none`

### Using `until`

You can also set an `until` date in conjunction with `recur`.  Example:

`ultralist add Work on +budget planning recur:weekly until:dec5`

The `until` directive uses the [same date syntax](/docs/cli/managing_tasks/#due-date-format) as setting due dates for tasks.

Using `until` is optional - if you don't set an `until`, the task will recur forever.
