import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {MoviesList} from '../movies-list/movies-list.jsx';
import MoviesFilter from '../movies-filter/movies-filter.jsx';
import {withActiveItem} from '../../hocs/with-active-item/with-active-item.jsx';
import {getBackgroundForMainPage} from '../../reducers/movies/selectors';
import {connect} from 'react-redux';
import PromoMovie from '../promo-movie/promo-movie.jsx';
import {withFullScreen} from '../../hocs/with-full-screen/with-full-screen.jsx';
import VideoPlayer from '../video-player/video-player.jsx';
import {getPlayingStatus} from '../../reducers/player/selector';
import {BLACK_COLOR} from '../../constants/constants';
import withLimitArray from '../../hocs/with-limit-array/with-limit-array.jsx';

const MoviesListWithActiveItem = withActiveItem(MoviesList);
const MoviesFilterWithActiveItem = withActiveItem(MoviesFilter);
const MoviesWithLimitArray = withLimitArray(MoviesListWithActiveItem);
const VideoPlayerWithFullScreen = withFullScreen(VideoPlayer);

export const MainScreen = ({isPlayerOn = false, background = BLACK_COLOR}) => {
  if (isPlayerOn) {
    return <VideoPlayerWithFullScreen/>;
  }

  return (<Fragment>
    <PromoMovie/>
    <div className="page-content" style={{background}}>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesFilterWithActiveItem/>
        <MoviesWithLimitArray />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </Fragment>);
};

MainScreen.propTypes = {
  isPlayerOn: PropTypes.bool,
  background: PropTypes.string
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isPlayerOn: getPlayingStatus(state),
  background: getBackgroundForMainPage(state)
});

export default connect(mapStateToProps, null)(MainScreen);
