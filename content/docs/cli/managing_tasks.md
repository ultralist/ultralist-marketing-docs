---
title: "Managing tasks"
weight: 3
description: >
  Learn how to manage tasks using the Ultralist CLI.
---

## Listing, filtering and grouping todos

`ultralist` can list todos in a variety of ways, and allows for powerful filtering and grouping.

## Adding todos

Add a todo by running `ultralist add` or `ultralist a`, and then filling out the details of the todo.

A `+project` or `@context` can be inserted into the todo body. They can only be one word long.

Ultralist expects the due date at the _end_, if there is a due date.

##### Due date format

For things due today or tomorrow, you can use `due today` and `due tomorrow`. You can also use `due tod` or `due tom`.

For things due this week, you can use the first 3 letters of the day name. For instance, `due mon` or `due thu`. **Ultralist will always look forward**.  If today is a Wednesday and you specify `due mon`, the due date will be for the _next Monday_.

For specific dates, you can use either `due may 2` or `due 2 may`. The month is always lowercase and 3 letters.

##### Examples

```
ultralist add chat with @bob about +specialProject due tom
ultralist a +lunch make turkey sandwich
ultralist a +task respond to @shelly about project status due may 3
```

## Completing/Uncompleting todos

* `ultralist complete [id]` or `ultralist c [id]` - complete a todo
* `ultralist complete [id] --revert` or `ultralist c [id] --revert` - un-complete a todo

##### Examples

```
ultralist complete 35
ultralist c 35
ultralist c --revert 35
```

## Archiving/Unarchiving todos

* `ultralist archive [id]` or `ultralist ar [id]` - archive a todo
* `ultralist archive [id] --revert` or `ultralist ar [id] --revert` - unarchive a todo
* `ultralist ar c` - archive all completed todos (_a great command to run at the end of the day!_)

##### Examples

```
ultralist archive 35
ultralist ar 35
ultralist ar --revert 35
ultralist ar c
```

## Prioritizing/Unprioritizing todos

* `ultralist prioritize [id]` or `ultralist p [id]` -prioritize a todo
* `ultralist prioritize [id] --revert` or `ultralist p [id] --revert` - un-prioritize a todo

##### Examples

```
ultralist prioritize 35
ultralist p 35
ultralist p --revert 35
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

`ultralist e [id] <subject> <due [due]>`

### Editing a todo's subject

When if you do not include `due [date]`, then just the subject will be edited.

**Example**

```
ultralist e 3 chat with @bob
```

The above will edit just the todo's subject, and leave the due date alone.

### Editing a todo's due date

If you only pass `due [date]`, the todo's due date will be updated, and the subject will remain the same.

```
ultralist e 3 due tom
```
The above will set the todo item with id of `3`'s due date to tomorrow, and it will leave the subject alone. 

### Removing a todo's due date

You can also say `due none` to un-set an existing due date.

**Example**

```
ultralist e 3 due none
```

## Notes management

Each task can have many notes.  Notes are extra info (links, context, etc).

### Adding a note to a task

Add a note to a task with the following syntax:

`ultralist add note <todoId> <content>`
or
`ultralist a n <todoId> <content>`

```
➜ ultralist a n 1 here is a note
Note added.
```

Then you can list your todos with notes by using `ultralist list notes` or `ultralist l n`

```
➜ ultralist l n

all
1    [ ]  tomorrow    some important task for the +project
  0                     adding a note
```

The above will add a note to the task with an id of `0`.

### Editing a note

When you edit a note, you replace all of the contents of the note.

Use the following syntax:

`ultralist edit note <todoId> <noteId> <content>`

or

`ultralist e n <todoId> <noteId> <content>`

**Example**

```
➜ ultralist e n 1 0 here is the updated note content.
Note edited.
```
### Deleting a note

Use the following syntax:

`ultralist delete note <todoId> <noteId>`

or

`ultralist d n <todoId> <noteId>`

**Example**

```
➜ ultralist d n 1 0
Note deleted.
```
