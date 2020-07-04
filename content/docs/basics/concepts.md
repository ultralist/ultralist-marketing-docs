---
title: "Ultralist Concepts"
weight: 1

description: >
  How Ultralist works conceptually.
---

Since Ultralist implements a version of Getting Things Done, it has similar concepts:

Not familiar with Getting Things Done?  Check out this great [youtube video](https://www.youtube.com/watch?v=gCswMsONkwY) to gain a better understanding.  It's a game changer!

## Contexts

Ultralist knows about _contexts_, which answers the question of "what do I need
in order to accomplish this?".  Contexts are denoted with an `@` symbol. 

**Examples of contexts**

* `chat with @bob`
* `@call garage about car repair`
* `@email my question about the project update`

## Projects

_Projects_ are defined as outcomes that will require more than one action step
to complete.  So, a project may have multiple todo items.

**Examples of projects**

* `+smallTasks ping @bob about the security bulletin`
* `+mobileDev ask @george what is next on the roadmap`

## Due dates

Due dates are a first-class concept in Ultralist.  This is what separates Ultralist from other projects like [Todo.txt](http://todotxt.org/).

Due dates are dates, without times.  They allow you to see what is on your agenda for the day.

Ultralist does not try to dictate your exact schedule, and therefore a todo's
due date does _not_ include a specific time.  If you need to schedule something at a specific time, it might be better to use a calendar app.  However, you can prioritize todos so that they take precedence over other todos.

## Prioritization

You can prioritize a todo.  This will make it show as bold in the CLI, and denotes that this todo is more important than others.

## Archiving

Once todos are completed, you can archive them.  They won't show up anymore when listing todos.

