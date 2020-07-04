---
id: api
title: The Ultralist.io API
sidebar_label: Ultralist.io API
---

Welcome to the Ultralist API!   You can use our API to fully customize your workflow.

The API is simple and REST-based, so any http client will work just fine.

## Authentication

Test your authorization using the following:

```shell
curl https://api.ultralist.io/api/v1/user \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <api key id>"
```

> Make sure to replace `api key id` with your API key.

In order to authenticate with Ultralist's API, you'll need to create a new API key. For Ultralist, API keys are json web tokens that are passed in the header of your http requests.  

1. **To create a new API key**, go to your [profile page](https://app.ultralist.io/profile).
2. Find the Api keys section and click the **New API key** button.
3. Copy the corresponding key to your clipboard.

## Todo Lists

### Retrieve todo lists

**Endpoint**

To retrieve todo lists for the user who owns the API key:

`GET https://api.ultralist.io/api/v1/todo_lists`

If you are an account admin, you can also retrieve todo lists for any user on your account:

`GET https://api.ultralist.io/api/v1/users/<user_uuid>/todo_lists`

**Parameters**

None.

**Example**

```shell
curl https://api.ultralist.io/api/v1/todo_lists \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <api key id>"
```

**Response**

```json
{
	"todolists": [
    {
      "name": "My first list",
      "uuid": "3273cd0c-db07-4dfd-804e-19ade2b84254",
      "user_id": "9fafff06-111f-4634-a74a-a11e4c3fc27a",
      "created_at": "2020-06-02T10:57:51Z",
      "updated_at": "2020-06-02T10:57:51Z",
      "todo_items_attributes": [
        {
          "uuid": "aa261516-bfbe-4490-8796-f511a19785cb",
          "position": null,
          "subject": "Chat with @bob",
          "due": "2020-05-01",
          "completed": false,
          "completedDate": null,
          "isPriority": true,
          "archived": false,
          "projects": null,
          "contexts": null,
          "createdAt": "2020-06-02T10:57:51.000Z",
          "notes": [
            "Bob is a great guy."
          ]
        },
        {
          "uuid": "600a5637-e9ed-4bd1-a27a-5993e5394d1a",
          "position": null,
          "subject": "Push the build to the jenkins server",
          "due": "2020-05-03",
          "completed": false,
          "completedDate": null,
          "isPriority": false,
          "archived": false,
          "projects": null,
          "contexts": null,
          "createdAt": "2020-06-02T10:57:51.000Z",
          "notes": []
        }
      ]
    }
	]
}
```

### Create a todo list

**Endpoint**

To create a todo list for the user who owns the API key:

`POST https://api.ultralist.io/api/v1/todo_lists`

If you are an account admin, you can also create a todo list for any user on your account:

`POST https://api.ultralist.io/api/v1/users/<user_uuid>/todo_lists`

**Parameters**

Parameter | Description
--------- | -----------
uuid | A unique UUID for the todo list.
name | The todo list name.
todo_items_attributes | An array of todo items.


**Example**

```shell
curl -X POST https://api.ultralist.io/api/v1/todo_lists \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <api key id>" \
  -d @todolist.json
```

**todolist.json**

```json
{
  "todolist": {
    "name": "My first list",
    "uuid": "3273cd0c-db07-4dfd-804e-19ade2b84254",
    "todo_items_attributes": [
      {
        "uuid": "aa261516-bfbe-4490-8796-f511a19785cb",
        "subject": "Chat with @bob",
        "due": "2020-05-01",
        "completed": false,
        "completdDate": null,
        "isPriority": true,
        "archived": false,
        "notes": ["Bob is a great guy."]
      },
      {
        "uuid": "600a5637-e9ed-4bd1-a27a-5993e5394d1a",
        "subject": "Push the build to the jenkins server",
        "due": "2020-05-03",
        "completed": false,
        "completdDate": null,
        "isPriority": false,
        "archived": false,
        "notes": []
      }
    ]
  }
}
```

**Response:**

```json
{
  "name": "My first list",
  "uuid": "3273cd0c-db07-4dfd-804e-19ade2b84254",
  "user_id": "9fafff06-111f-4634-a74a-a11e4c3fc27a",
  "created_at": "2020-06-02T10:57:51Z",
  "updated_at": "2020-06-02T10:57:51Z",
  "todo_items_attributes": [
    {
      "uuid": "aa261516-bfbe-4490-8796-f511a19785cb",
      "position": null,
      "subject": "Chat with @bob",
      "due": "2020-05-01",
      "completed": false,
      "completedDate": null,
      "isPriority": true,
      "archived": false,
      "projects": null,
      "contexts": null,
      "createdAt": "2020-06-02T10:57:51.000Z",
      "notes": [
        "Bob is a great guy."
      ]
    },
    {
      "uuid": "600a5637-e9ed-4bd1-a27a-5993e5394d1a",
      "position": null,
      "subject": "Push the build to the jenkins server",
      "due": "2020-05-03",
      "completed": false,
      "completedDate": null,
      "isPriority": false,
      "archived": false,
      "projects": null,
      "contexts": null,
      "createdAt": "2020-06-02T10:57:51.000Z",
      "notes": []
    }
  ]
}
```

## Todo items

### Get todo items for a user

**Endpoint**

To retrieve todo items for the user who owns the API key:

`GET https://api.ultralist.io/api/v1/todo_items`

If you are an account admin, you can also retrieve todo lists for any user on your account:

`GET https://api.ultralist.io/api/v1/users/<user_uuid>/todo_items`

**Example**

```shell
curl -X GET https://api.ultralist.io/api/v1/todo_items \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <api key id>"
```

**Response**

```json
{
  "todo_items": [
    {
      "id": 3,
      "uuid": "da145597-74ef-47b4-9e3c-880a0d99c03f",
      "position": null,
      "subject": "Seamlessly sync your lists with our powerful CLI tool.",
      "due": null,
      "completed": true,
      "completedDate": "2020-06-17",
      "isPriority": true,
      "archived": false,
      "projects": [],
      "contexts": [],
      "createdAt": "2020-06-10T09:58:50.000Z",
      "notes": [
        "[Head to our Github page](https://github.com/ultralist/ultralist) for details on installing the CLI tool."
      ]
    },
    {
      "id": 4,
      "uuid": "e4bfe43a-31da-477d-bbb8-a4f49e71cbed",
      "position": null,
      "subject": "You can add notes to any todo item.  Try clicking the notes icon on the right!",
      "due": null,
      "completed": false,
      "completedDate": null,
      "isPriority": false,
      "archived": false,
      "projects": null,
      "contexts": null,
      "createdAt": "2020-06-10T09:58:50.000Z",
      "notes": [
        "Markdown is supported in notes, so you can *add emphasis* and links."
      ]
    },
	]
}
```
### Get todo items for a user

## Accounts

### Get your account info

This will return all of the information about your account, including users attached to your account.

**Endpoint**

`GET https://api.ultralist.io/api/v1/account`

**Query parameters**

None.

**Example**

```shell
curl https://api.ultralist.io/api/v1/account \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <api key id>"
```

**Response**

```json
{
  "invite_code": "eyJ0eXAiOiJGV1QiLCJhbGciO2JIUzI1NiJ9...",
  "cancelled_at": null,
  "free_trial_ends_at": "2020-06-24T09:58:50.000Z",
  "status": "trialing",
  "name": "gammons@gmail.com",
  "errors": "[]",
  "users": [
    {
      "email": "gammons@gmail.com",
      "name": "gammons@gmail.com",
      "uuid": "8f6de218-b1c0-4f49-8267-6e4505858e2c",
      "errors": "[]",
      "image_url": "https://lh3.googleusercontent.com/a-/AOh14GiFSeJmf9qVsk_efnvYuR4HCJrhFqVnR8jsiPSy56E=s50",
      "last_login_at": "2020-06-16T11:41:27.000Z"
    }
  ]
}
```
