import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {App} from './components/app/app.jsx';
import {reducer} from './reducers';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {createAPI} from './api';
import {operation} from './actions/data/action';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(operation.loadMovies());

  const rootElement = document.querySelector(`#root`);
  ReactDom.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      rootElement);

};

init();

