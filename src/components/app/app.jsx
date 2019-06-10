import React            from 'react';
import MainScreen       from '../main-screen/main-screen.jsx';
import {Switch, Route}  from 'react-router-dom';
import SignIn           from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route.jsx';
import FilmCard from '../film-card/film-card.jsx';
import {withActiveItem} from '../../hocs/with-active-item/with-active-item.jsx';
import {AddReview} from '../add-review/add-review.jsx';
import withReviewForm from '../../hocs/with-review-form/with-review-form.jsx';

const FavoritesWithPrivateRoute = withPrivateRoute(Favorites);
const FilmCardWithActiveItem = withActiveItem(FilmCard);
const AddReviewWithPrivateRoute = withReviewForm(withPrivateRoute(AddReview));

export const App = () => (
  <Switch>
    <Route path="/" exact={true} component={MainScreen}/>
    <Route path="/login" component={SignIn}/>
    <Route path="/myList" component={FavoritesWithPrivateRoute}/>
    <Route path="/film/:id" exact={true} component={FilmCardWithActiveItem}/>
    <Route path="/film/:id/review" component={AddReviewWithPrivateRoute}/>
  </Switch>
);
