import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import {connect} from 'react-redux';
import {getFavorites} from '../../reducers/user/selectors';
import {userAction} from '../../actions/user/action';
import {MoviesList} from '../movies-list/movies-list.jsx';
import {withActiveItem} from '../../hocs/with-active-item/with-active-item.jsx';

const MoviesListWithActiveItem = withActiveItem(MoviesList);

export class Favorites extends PureComponent {
  constructor(props) {
    super(props);
    props.fetchMovies();
  }

  render() {
    const {movies} = this.props;
    return (
      <div className="user-page">
        <Header className="user-page__head"/>
        <section className="catalog" style={{marginLeft: `16px`, marginRight: `16px`}}>
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesListWithActiveItem movies={movies}/>
        </section>
      </div>
    );
  }
}

Favorites.propTypes = {
  movies: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: getFavorites(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(userAction.loadFavoriteMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
