---
title: "Quickstart"
linkTitle: "Quickstart"
weight: 1
description: >
  How to quickly get started with the Ultralist CLI.
---
The Ultralist CLI is a simple and very fast task management system for the command-line.  It is rooted in the [Getting Things Done](https://gettingthingsdone.com/what-is-gtd/) philosophy, popularized by David Allen.  I am a huge fan of GTD and I use it every day.  I was looking for a lightweight task management system that I could use somewhere where I am all the time - the terminal!  Thus, Ultralist was born.

Ultralist is easy to understand, is open-source, and follows the [unix philosphy](https://en.wikipedia.org/wiki/Unix_philosophy) of being a simple tool that does one job very well.


## Installing Ultralist

Ultralist is written in Go, which means it's ultra-portable.  It's already in many package managers.

* **Mac OS**: `brew install ultralist`
* **Arch Linux**: `yay install ultralist`
* **FreeBSD**: `pkg install ultralist`
* **Other systems**: Get the correct ultralist binary by visiting the [releases page on Github](https://github.com/ultralist/ultralist/releases).

#### Building on your own

Simply run `go get github.com/ultralist/ultralist`.


### Create your first list

#### 1. Create a new list in a directory

```
➜ ultralist init
```

The above will create a `.todos.json` file in the directory you're in.


#### 2. Add a task to your list.

```
➜ ultralist add some important task for the +project due tom
todo 1 added.
```

Then, show the task you just added:

```
➜ ultralist list
all
1  [ ]  tomorrow    some important task
```

#### 3. Mark your task completed

Once you've completed your task, mark it completed:

```
➜ ultralist c 1
todo completed.
```

Then, list your tasks again.  You'll see the task has been marked as completed:

```
➜ ultralist l
all
1  [x]  tomorrow    some important task
```

#### 3. Archive your task.

At the end of the day, reflect upon how amazingly productive you were, and archive your completed task.

```
➜ ultralist ar 1
todo archived.
```

Contratulations, you've mastered about 70% of ultralist!  There are many more features to know.  Read on for a full breakdown.
