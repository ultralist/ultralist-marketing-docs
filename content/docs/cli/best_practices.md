---
title: "Best practices"
weight: 5
description: >
  Best practices when using Ultralist CLI
---

Ultralist is a simple tool, and your success using it is quite dependent on _how_ you use it.  This is true for _any_ task management sytem.

### Avoid overdue tasks.

Ultralist will show overdue tasks first.  You should either complete these, change the due date, or just delete them, if they are not relevant anymore.  But having a giant list of overdue tasks is an antipattern!

### Use the agenda.

```shell
ultralist l agenda
```

The agenda view is great, because it's the list you need to see 90% of the time.

It shows all _incomplete_ tasks that are _due today_ or are _overdue_.  It will not show tasks due tomorrow or in the future.

### Shell aliases are your friend.

I keep many aliases handy:

```shell
alias u="ultralist"
alias uc="ultralist l agenda by context"
alias up="ultralist l agenda by project"
alias tod="ultralist l by project due tod"
alias tom="ultralist l by project due tom"
alias mon="ultralist l by project due mon"
alias tue="ultralist l by project due tue"
alias wed="ultralist l by project due wed"
alias thu="ultralist l by project due thu"
alias fri="ultralist l by project due fri"
alias c="ultralist l completed tod"
```

Running `up` is _much_ easier than typing `ultralist l agenda by project` every time!


### Show your ultralist every time you open a shell.

Some folks love to see their list every time they open a shell.  You can easily do that.

In your `.zshrc` or `.bashrc`, simply add `ultralist list` to the bottom.

### If you're using Ultralist Pro, sync your list with cron.

Ultralist Pro can't connect to your local computer when your list changes.  The CLI needs to be manually synced.  But that isn't a problem.  In a unix system, there are tools for such matters.  Cron up your Ultralist to sync with the Pro backend on an interval of your choosing.

```cron
  */15 8-17 * * 1-5 cd ~/work && ultralist sync
```

### Reflect on your completed tasks daily.

You can show what you completed for the day by running the following:

```
ultralist l completed tod
```

### Archive completed stuff daily.

```
ultralist ar c
```

Once stuff is done, it's good to archive it so it won't show up on your lists.

### Garbage collect weekly.

```
ultralist ar gc
```

Garbage collection will delete all archived tasks, thus re-claiming all single-digit ids.
