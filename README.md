# React Immersive Code Challenge

## Instructions

For this project, you’ll be building out a React application that displays a list of your recent bank transactions. 

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

When you clone down this project, the React Component `<AccountContainer />` will have an initial default state.  Use this data during development to get the functionality of the app working.  Once that is complete, you can replace that initial state with data you fetch from [this provided Rails API](https://github.com/learn-co-curriculum/immersive-assessment-react-backend). When the time comes, follow the instructions there to setup your backend.

 ## Deliverables 

**Please implement the following user stories:**
- As a user, you should be able to see a table of transactions.
- As a user, you should be able to enter text into an input field and filter the list of transactions by either description or category.

![example project](https://s3-us-west-2.amazonaws.com/curriculum-content/web-development/react/react-assessment-example.gif)

Use the above gif as an example of how the app should function

We’ve provided some starter code you can use to guide you, but feel free to create or remove components as you see fit.

We’ll be evaluating your code based on the following criteria:
- **React Components:** Does the app resaonably separate responsibilities into components and a have a component hierarchy?
- **Props:** Does the app have at least one presentational component that receives props? Does the app pass props down from a higher-level component to a lower one? Does the app make use of passing a functional prop?
- **State:** Does the app have a search input that respond to changes and calls this.setState?
- **Lifecycle Methods & API:** Does the app make an AJAX request to the Rails API and return data? Does it set the state of the component within the app with that data within a lifecycle method?
- **Feature:** Does the app filter the list of transactions?
- Does the app follow best practices regarding state and component composition?

## Setup
After cloning down the project
- run `npm install`
- You can boot up the server with `npm start`. It will run on `localhost:3000`.
- The app uses [Semantic UI](https://semantic-ui.com/) for styling. If you see any unfamiliar classNames on some components, don't sweat! That's coming from Semantic UI and you shouldn't need to touch it.

## Suggested Workflow

You can approach this any way you would like but a reasonable approach may be something like:

1) Get the list of Transactions to display on the page
2) Ensure that the user typing into the input field can appropriately update the state
3) Using the state of the user input and the list of transactions, figure out how to render only the transactions that include the entered text in either the *description* or *category*
4) After that is working, replace the dummy state with the response from the [Rails API](https://github.com/learn-co-curriculum/immersive-assessment-react-backend)


Good luck!
