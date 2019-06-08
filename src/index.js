import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {App} from './components/app/app.jsx';
import {reducer} from './reducers/root';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {createAPI} from './api';
import {moviesAction} from './actions/movies/action';
import {BrowserRouter} from 'react-router-dom';
import {userAction} from './actions/user/action';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(moviesAction.loadMovies());
  store.dispatch(userAction.checkUserAuth());

  const rootElement = document.querySelector(`#root`);
  ReactDom.render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>,
      rootElement);
};

init();

