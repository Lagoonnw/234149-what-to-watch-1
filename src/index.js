import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {App} from "./components/app/app.jsx";
import {reducer} from "./reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.querySelector(`#root`);
ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    rootElement);

