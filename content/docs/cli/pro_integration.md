---
id: pro
title: Syncing with Ultralist Pro
sidebar_label: Syncing with Ultralist Pro
---

Enabling **Ultralist Pro** will enable seamless sync with ultralist.io.  This allows you to:

* Easily keep CLI lists in sync across **multiple computers**.
* Manage your list with our **slick web app**.
* Use the Ultralist **mobile apps**.
* Use the **Slack integration**.  Add + manage tasks directly from Slack.
* Use our **robust API** to enable more complex workflows.

## Authorizing the CLI with Ultralist pro

If you don't already have an account, run `ultralist auth` to create one, and tell ultralist to sync.

```shell
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

```shell
➜ ultralist auth check
Hello Bob! You are successfully authenticated.
```

## Enabling list synchronization

There are a couple of ways to sync a list, depending if that list already exists or not.

### Creating a brand new list and setting it up to sync

1. Ensure you're authenticated via `ultralist auth check`.
2. Create the list via `ultralist init`.
3. Ultralist will ask if you want to sync this list with ultralist.io. You can say `y`, and it will prompt you about which existing list you'd like to sync with, or to create a new list.
4. Select `New list...` and give it a name.
5. Presto, this new list is set up to sync with ultralist.io.


### Syncing a list that already exists locally, but not on ultralist.io

1. Ensure you're authenticated via `ultralist auth check`.
2. Run `ultralist sync`. You will be prompted to give the list a name.
3. Presto, this list is now set up to sync with ultralist.io.

### Syncing a list that exists on ultralist.io, but not locally

1. Ensure you're authenticated via `ultralist auth check`.
2. In a directory that does not already have a .todos.json file, run `ultralist init`.
3. Ultralist will ask you if you want to sync this list with ultralist.io. Enter `y`.
4. Choose the existing list you'd like to sync with.
5. Presto, the list will automatically be downloaded locally and will be set up to sync.

### Pulling changes locally from a list that has changed on ultralist.io

Local lists managed by the CLI don't have a native way of knowing if a list has changed remotely on ultralist.io.

Run `ultralist sync` to synchronize your local list with ultralist.io.
