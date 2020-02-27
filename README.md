This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

----
# Test task

February 20, 2020

## Prerequisites

Let's say we have a system and a part of this system is API keys management. It is possible to create API keys using REST API and use those keys for other API calls instead of a password.

### Current API

Host: `https://sheltered-harbor-77308.herokuapp.com`

### Methods:

`GET / - get all apikeys`

`GET /:id - get one apikey by id`

`POST / - create new apikey (send empty body)`

`DELETE /:id - delete apikey`

`DELETE / - delete all apikeys`

## You received a proposal:

We think that it's not a good idea to store API keys in row format. Let's improve the security

We need UI to manage API keys

You are a Frontend developer + Product manager + Designer and you are responsible for implementing this feature. You can talk to backend guys and propose them API improvements, you can talk to business guys to clarify any question or to give any suggestions. 

**As a result, users should be happy and IT team should be happy (if possible:))**

### What we expect from you:

- Create a concept for this feature
- Discuss it with business and development teams, refine the concept if needed, come to a solution that satisfies everybody
- Decide what MVP you can do in a remaining time
- Develop frontend for this feature
- Spend all together a maximum of 6 hours
