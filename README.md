# LeanData

## Details

### Summary

This is a user management and expenses manager for the LeanData take home assignment. Expenses are per-user and have a running total for reporting purposes.

#### User page

The active user can create, update, and delete additional users and view total expenses for each user. These users can share a name but will have a unique identifier added to the model data to distinguish them.

##### Tradeoffs

* **Deleting**: With how the expenses are structured, deleting users is very fast. While deleting users is probably not a common occurrence, this implementation does result in quick deletes.

#### Expenses page

Expenses can be added to any user with any of the three types, any safe integer value for the amount, and any length description. These expenses have a running total for each user and each category that is updated by the expenses state management code.

##### Tradeoffs

* **Viewing expenses**: I was initially going in another direction with this state management where a user would have a user profile page where expenses are shown. As a result, the refactor to a single expenses page does mean that viewing all expenses is more expensive than I'd like. I would refactor to use an object with the expenseId as the key.

* **Updating/Removing**: Similarly to the above, I would refactor the storage to use the expenseId as the key which would make updating and removing expenses faster. I had other features to get working and ran out of time.

#### Reports Page

Here the user can see a report of the users as a whole. This displays the running totals of the expenses per category and as a total amount. These values will update with any changes to users or their expenses.

##### Tradeoffs

* **Stale data**: Since these values are updated in the state on any insert or update operations and not computed values, this has the potential to have stale data if not treated carefully.

####

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
