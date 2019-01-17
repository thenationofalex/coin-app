## Coin App

### Setup

Development 

- Install the latest Node.js and NPM.
- Run `npm i` in projects root directory
- Run `npm run start` to start development server on port 8080

Production

-  Run `npm run build`

### Built with

- [React](https://reactjs.org/)
- [React Cryptocoins](https://github.com/kirillshevch/react-cryptocoins)
- [React Router](https://github.com/ReactTraining/react-router)
- [React Router Redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
- [Redux](https://redux.js.org/)
- [Redux Sagas](https://redux-saga.js.org/)
- [Emotion](https://emotion.sh/)
- [Emotion Theme](https://github.com/emotion-js/emotion/tree/master/packages/emotion-theming)

### Commands

- `npm run start` Start development server
- `npm run test` Run all Jest Tests
- `npm run build` Build production bundle

### Structure

The application is structured in to four parts.

- `src/config` The config allows the developer a central place in which they can update API endpoint or add addtional coins to retrieve.
- `src/api` The api component prepares the query string required by the api, makes the fetch request and formats the return object into a more readable format.
- `src/components` A collection of reusable components to layout the application. **Emotion** has been used to set a base theme and work with styled components ensuring a consistent layout. *React.PureComponents* have been used a the lifecycle methods are handled with Redux and Connect 
- `src/redux` Redux and Redux sagas has been setup to avoid the use of *state* within the components. 
  - Using sagas sets up the application to handle side effects from redux actions. In this case it handles our fetch request to the API.
  - React Router Redux has also be configure here to managing routing and keeping the route state within a reducer. Again this has been done to avoid using state within a component.


