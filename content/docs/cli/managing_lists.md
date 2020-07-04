---
title: "Managing lists"
weight: 2
description: >
  How to manage your lists using the Ultralist CLI.
---

## Creating a todolist

You can initialize a todolist by running `ultralist init`. This will create a `.todos.json` in the directory you are in.

**The todolist in your home directory is special.** `ultralist` will use the list in your home dir if it does not see a .todos.json in the directory you are in. This allows you to manage your main todolist file even if you are in another directory.

## Archiving completed todos

Archive a single task:

```shell
$ ultralist ar 9
Todo archived.
```

Or, archive all of your completed tasks:

```shell
$ ultralist ar c
All completed todos have been archived.
```
This is great to run at the end of your day.  Since `ultralist` only lists todos that are unarchived by default, these archived todos will be off your main view.

## Garbage collection

* `ultralist ar gc` will delete all archived todos.

This is a great thing to run weekly.  You'll get a bunch of low ids back, and you'll keep your `.todos.json` file small.

## Deleting a list

Simply delete the `.todos.json` file from the directory you're in.  Be careful about this one!
