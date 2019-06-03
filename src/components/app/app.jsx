import React from 'react';
import MainScreen from '../main-screen/main-screen.jsx';
import {Switch, Route} from 'react-router-dom';
import SignIn from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route.jsx';
import FilmCard from '../film-card/film-card.jsx';

const FavoritesWithPrivateRoute = withPrivateRoute(Favorites);

export const App = () => (
  <Switch>
    <Route path="/" exact={true} component={MainScreen}/>
    <Route path="/login" component={SignIn}/>
    <Route path="/favorites" component={FavoritesWithPrivateRoute}/>
    <Route path="/film/:id" component={FilmCard}/>
  </Switch>
);
