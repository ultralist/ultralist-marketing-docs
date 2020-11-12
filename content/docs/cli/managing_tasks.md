---
title: "Managing todos"
weight: 3
description: >
  Learn how to manage todos using the Ultralist CLI.
---

## Listing, filtering and grouping todos

See [Showing todos](../showing_tasks) for detailed documentation on how to show your list.

## Adding todos

Add a todo by running `ultralist add` or `ultralist a`, and then filling out the details of the todo.

A `+project` or `@context` can be inserted into the todo body. They can only be one word long.

Ultralist expects the due date at the _end_, if there is a due date.

##### Due date format

For things due today or tomorrow, you can use `due:today` and `due:tomorrow`. You can also use `due:tod` or `due:tom`.

For things due this week, you can use the first 3 letters of the day name. For instance, `due:mon` or `due:thu`. **Ultralist will always look forward**.  If today is a Wednesday and you specify `due:mon`, the due date will be for the _next Monday_.

For specific dates, you can use either `due:may2` or `due:2may`. The month is always lowercase and 3 letters.

##### Examples

```
ultralist add chat with @bob about +specialProject due:tom
ultralist a +lunch make turkey sandwich priority:true
ultralist a +todo respond to @shelly about project:mobile status:next due:may3
```

## Completing/Uncompleting todos

* `ultralist complete [id]` or `ultralist c [id]` - complete a todo
* `ultralist uncomplete [id]` or `ultralist uc [id]` - un-complete a todo

##### Examples

```
ultralist complete 35
ultralist c 35
ultralist uc 35
```

## Archiving/Unarchiving todos

* `ultralist archive [id]` or `ultralist ar [id]` - archive a todo
* `ultralist unarchive [id]` or `ultralist uar [id]` - unarchive a todo
* `ultralist ar c` - archive all completed todos (_a great command to run at the end of the day!_)
* `ultralist ar gc` - Garbage collect.

#### Garbage collection

As you use Ultralist, you'll notice that your IDs continue to increment higher and higher.  Running garbage collection will delete all archived todos, thus re-claiming low todo IDs.

##### Examples

```
ultralist archive 35
ultralist ar 35
ultralist uar 35
ultralist ar c
```

## Garbage collection



## Prioritizing/Unprioritizing todos

* `ultralist prioritize [id]` or `ultralist p [id]` -prioritize a todo
* `ultralist unprioritize [id]` or `ultralist up [id]` - un-prioritize a todo

##### Examples

```
ultralist prioritize 35
ultralist p 35
ultralist up 35
```

## Deleting todos

`ultralist delete [id]` or `ultralist d [id]` will do the job.

**Examples**

```
ultralist delete 35
ultralist d 35
```

_Be careful!_ once a todo is deleted, it's gone forever!

## Editing todos

You can edit a todo's subject or due date The syntax is as follows:

`ultralist e [id] <subject> <due:[due]> <status:[status]> <completed:[true|false> <priority:[true|false]> <archived:[true|false]>`

### Editing a todo's subject

When if you do not include `due:[date]`, then just the subject will be edited.

**Example**

```
ultralist e 3 chat with @bob
```

The above will edit just the todo's subject, and leave the due date alone.

### Editing a todo's due date

If you only pass `due:[date]`, the todo's due date will be updated, and the subject will remain the same.

```
ultralist e 3 due:tom
```
The above will set the todo item with id of `3`'s due date to tomorrow, and it will leave the subject alone. 

### Removing a todo's due date

You can also say `due:none` to un-set an existing due date.

**Example**

```
ultralist e 3 due:none
```

## Notes management

Each todo can have many notes.  Notes are extra info (links, context, etc).

### Adding a note to a todo

Add a note to a todo with the following syntax:

`ultralist addnote <todoId> <content>`
or
`ultralist an <todoId> <content>`

```
➜ ultralist an 1 here is a note
Note added.
```

Then you can list your todos with notes by using `ultralist list --notes`

```
➜ ultralist l --notes

all
1    [ ]  tomorrow    some important todo for the +project
  0                     adding a note
```

The above will add a note to the todo with an id of `0`.

### Editing a note

When you edit a note, you replace all of the contents of the note.

Use the following syntax:

`ultralist editnote <todoId> <noteId> <content>`

or

`ultralist en <todoId> <noteId> <content>`

**Example**

```
➜ ultralist e n 1 0 here is the updated note content.
Note edited.
```
### Deleting a note

Use the following syntax:

`ultralist deletenote <todoId> <noteId>`

or

`ultralist dn <todoId> <noteId>`

**Example**

```
➜ ultralist dn 1 0
Note deleted.
```

## Handling todo statuses

A todo can have a `status`.  This allows you to further customize your task management.

**In ultralist, a status should be a single lower-case word**.

For instance, suppose you like to manage your todos using a [now, next, later](https://medium.com/adventures-in-consumer-technology/getting-things-done-the-now-next-later-framework-9cc786b4fad8) format.

#### Adding tasks with a status

You can set a status when adding a todo:

```
ultralist add this is something I need to do right away status:now
ultralist add this is a todo for next week status:next
ultralist add this is a someday todo status:later
```

#### Listing tasks by status

You can then build powerful aliases around showing todos with a particular status.  For instance, to get an idea of things you need to work on now:

`ultralist list status:now`


Or you can see your whole list, grouped by status:

`ultralist list group:status`


#### Removing a todo's status

Simply set the status of a todo to `none`.

`ultralist e 33 status:none`
