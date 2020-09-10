---
title: "Syncing with Ultralist Pro"
weight: 6
description: Set up the CLI to sync seamlessly with Ultralist Pro.
---

Enabling **Ultralist Pro** will enable seamless sync with ultralist.io.  This allows you to:

* Easily keep CLI lists in sync across **multiple computers**.
* Manage your list with our **slick web app**.
* Use the Ultralist **mobile apps**.
* Use the **Slack integration**.  Add + manage tasks directly from Slack.
* Use our **robust API** to enable more complex workflows.

## Authorizing the CLI with Ultralist pro

If you don't already have an account, run `ultralist auth` to create one, and tell ultralist to sync.

```
➜ ultralist auth
Head to your browser to complete authorization steps.
Listening for response...
Authorization successful! Next, run `ultralist init` to sync a list.
```

Note that if you create an account directly on ultralist.io, you'll still need to run ultralist auth to register your CLI with Ultralist Pro.

Upon signing up (or logging in) to app.ultralist.io, `ultralist` will create a directory - `~/.config/ultralist`. In that directory, it stores 2 files:

* `creds.json` - A token that ultralist will use to authenticate you
* `synced_lists.json` - Stores an array of synced task lists and their locations

If you already have an account, you'll still need to enable synchronization by running `ultralist auth` before you can synchronize lists.

You can check the status of your authorization by running `ultralist auth check`.

```
➜ ultralist auth check
Hello Bob! You are successfully authenticated.
```

## Enabling list synchronization

There are a couple of ways to sync a list, depending if that list already exists or not.

### Syncing a list that already exists locally, but not on ultralist.io

1. Ensure you're authenticated via `ultralist auth check`.
1. Run `ultralist sync --setup`.  It will ask you if you'd like to sync this list, or import an existing list from ultralist.io.
1. Presto, this list is now set up to sync with ultralist.io.

### Syncing a list that exists on ultralist.io, but not locally

1. Ensure you're authenticated via `ultralist auth check`.
1. In a directory of your choosing, run `ultralist sync --setup`.  It will ask you if you'd like to sync this list, or import an existing list from ultralist.io.
1. Choose "Pull a list from ultralist.io, replacing the list that's here", and then choose the remote list you'd like to sync.
1. Presto, this list is now set up to sync with ultralist.io.

## Staying in sync

Keeping your lists in sync with ultralist.io is very straightforward.

**Pulling remote changes locally**

Local lists managed by the CLI don't have a native way of knowing if a list has changed remotely on ultralist.io.

Run `ultralist sync` to synchronize your local list with ultralist.io.  You can also set up a cron job to sync your list, if you want to keep it always up-to-date.

**Pushing local changes to ultralist.io**

Normally this does not need to occur.  Whenever you make changes to your local list, a sync to ultralist.io will automatically occur in the background, as a background process.  In the case where you don't have internet access, changes to your local list will be stored in a buffer.

Running `ultralist sync` is a bi-directional sync, so changes are both pulled _and_ pushed, and reconciliation logic happens on the ultralist.io backend.
