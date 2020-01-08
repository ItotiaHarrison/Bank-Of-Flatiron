# Bank of Flatiron

Welcome to the Bank of Flatiron, where you can trust us with all your financial data! Use the below gif as an example of how the app should function.

![demo](gif goes here)

## Instructions

For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

## Setup
After cloning down the project
- Run `npm install` in your terminal
- Run `npm start` and a JSON server will spin up a mock back-end API and you can access the data at `http://localhost:3000/transactions`. Your react application will also start, on port 3001.
- The app uses [Semantic UI](https://semantic-ui.com/) for styling. If you see any unfamiliar classNames on some components, don't sweat! That's coming from Semantic UI and you shouldn't need to touch it.
- If you are unfamiliar with HTML tables, take a look at the [docs with an example here](https://www.w3schools.com/html/html_tables.asp)

## Core Deliverables

- As a user, I should be able to see a table of the transactions.
- As a user, I should be able to fill out and submit the form to add a new transaction. This should add a the new transaction to the table **as well as post the new transaction to the backend API for persistence**.
- As a user, I should be able to filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

## Advanced Deliverables

If you have finished the Core Deliverables, **stage a commit at this point!**

- As a user, I can sort transactions alphabetically.
- As a user, I can delete a transaction which will remove it from the table and delete it from the backend.

## Rubric

### Props & State

1. No code or very little code has been written or the code doesn't run. If it runs, no deliverables have been met. Not managed to set state or pass props successfully.

2. State is not being set or updated. Props are not being passed down, or you are passing down the right prop but trying to access it incorrectly (wrong name, unnecessary `this`, `state` instead of `props`) or key props are missing. API call does not successfully populate state.

3. State is working. However, it may be in the wrong component, it might be nested oddly or might have some unnecessary state. Props are being passed unnecessarily to components. Functions that change or calculate state are not defined in the component that they are most closely tied to.

4. State works and is held by the lowest common component. No unnecessary state is created. Only the necessary props are being passed down. Functions used to edit state are passed down.

5. Advanced deliverables are met.

### Code Structure/Efficiency

1. No code or very little code has been written or the code doesn't run, i.e. syntax errors, imports missing, etc. If it runs, no deliverables have been met.

2. Starter components have been unnecessarily modified and broken. There is no reference to componentDidMount. Incorrect or unnecessary lifecycle methods are used.

3. Fetch is triggered in the right place. Code is not abstracted into clear methods. Additional components have been added which serve no purpose. Props and variables could be named consistently and descriptively.

4. Components are structured in a logical way. Class components only used when needed, functional components used for everything else. Code is abstracted into clear methods. Used object destructuring and spread operator successfully.

5. Advanced deliverables met. Uses some of the following: destructuring, functional components, spreading, hooks, pure functions, performance is taken into account.

### Rendering

1. No code or very little code has been written or the code doesn't run. If it runs, no deliverables have been met.

2. Did not manage to render everything that was asked for in the deliverables.

3. Renders everything that is asked for in the deliverables. Components could be more abstract/reusable. May have created own components instead of using the components provided.

4. Renders everything that is asked for in the deliverables. Components are abstract/reusable. No unnecessary components were created.

5. Everything from 4 plus extra features were added that are not listed in the deliverables.
