import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {limitArray} from '../../helpers/limit-array/limit-array';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {getFilteredMovies} from '../../reducers/movies/selectors';
import {MOVIES_PER_PAGE} from '../../constants/constants';

export const withLimitArray = (Component) => {
  class WithLimitArray extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        page: 1,
        movies: props.movies
      };
      this._clickHandler = this._clickHandler.bind(this);
    }

    componentDidMount() {
      if (this.props.movies.length > MOVIES_PER_PAGE) {
        const movies = limitArray(this.props.movies, this.state.page);
        this.setState({movies});
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.movies !== this.props.movies) {
        const movies = limitArray(this.props.movies, this.state.page);
        this.setState({movies});
      }
      if (prevState.page !== this.state.page) {
        const movies = limitArray(this.props.movies, this.state.page);
        this.setState({movies});
      }
    }

    render() {
      const props = Object.assign({}, this.props, {
        movies: this.state.movies,
        onShowMoreBtnClick: this._clickHandler,
        shouldShowBtn: !(this.props.movies.length === this.state.movies.length)
      });

      return <Component {...props}/>;
    }

    _clickHandler() {
      this.setState({page: this.state.page + 1});
    }
  }

  WithLimitArray.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      posterImage: PropTypes.string,
      previewImage: PropTypes.string,
      backgroundImage: PropTypes.string,
      backgroundColor: PropTypes.string,
      videoLink: PropTypes.string,
      previewVideoLink: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.number,
      scoresCount: PropTypes.number,
      director: PropTypes.string,
      starring: PropTypes.arrayOf(PropTypes.string),
      runTime: PropTypes.number,
      genre: PropTypes.string,
      released: PropTypes.number,
      isFavorite: PropTypes.bool
    }))
  };

  WithLimitArray.defaultProps = {
    movies: []
  };

  return WithLimitArray;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: getFilteredMovies(state)
});

export default compose(
    connect(mapStateToProps, null),
    withLimitArray
);
