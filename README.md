# E-Soceity frontendtest with member list, add member and del member

### This project is develop by React with redux in TypeScript, first I try to build it without redux, by put the data in an AppState file and transfer the state to different components by withContext, then have errors on code which is hard to solve, so I give up that way. 

### First version fet-redux is built with redux by traditional reducer, state and action declare in reducer, and data from mock. The difficulty first meet is to bind value from input form into state, get inspired by React docs website: https://zh-hans.reactjs.org/docs/forms.html  , while it is demostrate in react class component, I change my project's App.tsx into react class. 

### Second version fet-rtk is built by redux-toolkit and data from mock, which is easy and efficient, by create a listDetail category in redux, and build a slice which bind state, reducer and action togather. 

### Third version is fet-rtk-fetchAPI still by redux-toolkit, but this time data fetch from API in AppClass.tsx.

### Fouth version is fet-rtk-fetchAPI-FC which data fetch from API in App.tsx. This version I change to react functional component because later use redux-toolkit thunk need to use some hooks such as useSelector from 'react-redux' to bind state from slice to component, and useDispatch from 'react-redux'. In this step, I install the react-redux to boost the redux functional programming.

### Final version is built by redux-toolkit thunkAPI, which fully cooperate with backend project to get data, post data and del data. ThunkAPI supports async awit function and run with action types pending, fullfilled and rejected. It is a different logic, I have to change my mind to adapte it, consider the data come from the backend and solve by the backend when I prompt.  Difficulty such as add member function found it works but no state refresh in the member list, later slove it by add [list] in the end of useEffect function. Del member not working when forward axios.delete with parameters to API, finally solved it by use Postman and dev tools from Chrome to work with the API and get response to figure out the parameters problem, new experience!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
