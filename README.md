# React Immersive Assessment

## Instructions

For this project, you’ll be building out a React application that displays a list of your recent bank transactions. We’ve provided a Rails API that returns a JSON payload of transactions you should use to hydrate your app with data. Follow the instructions in [this repo](https://github.com/learn-co-curriculum/immersive-assessment-react-backend) to get that set up.

**Please implement the following user stories:**
- As a user, you should be able to see a table of transactions.
- As a user, you should be able to enter text into an input field and filter the list of transactions by either description or category.


![example project](https://s3-us-west-2.amazonaws.com/curriculum-content/web-development/react/react-assessment-example.gif)

We’ve provided some starter code you can use to guide you, but feel free to create or remove components as you see fit.

We’ll be evaluating your code based on the following criteria:
- **React Components:** Does the app have between 4 and 6 components and a component hierarchy?
- **Props:** Does the app have at least one presentational component that receives props? Does the app pass props down from a higher-level component to a lower one? Does the app make use of passing a functional prop?
- **State:** Does the app have a search input that respond to changes and calls this.setState?
- **Lifecycle Methods & API:** Does the app make an AJAX request to the Rails API and return data? Does it set the state of the component within the app with that data within a lifecycle method?
- **Feature:** Does the app filter the list of transactions?
- Does the app follow best practices regarding state and component composition?

If you have extra time, please incorporate PropTypes, a Show view, and React Router into your application.

## Setup
You can boot up the app with `npm start`. It will run on `localhost:3000`.

When you start the backend Rails server be sure to run it on a different port with the `-p` flag. For example `rails s -p 3001` would run the rails app on port `3001`.

Good luck!
