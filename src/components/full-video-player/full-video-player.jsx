import React, {PureComponent, Fragment, createRef} from 'react';
import {Video}                                     from '../video-player/video.jsx';
import {withVideo}                                 from '../../hocs/with-video/with-video.jsx';
import {PlayerButton}                              from "../player-button/player-button.jsx";
import {connect}                                   from 'react-redux';
import {getMovie, getPlayingStatus}                from "../../reducers/player/selector";
import {playerAction}                              from "../../actions/player/action";
import {formatTime}                                from "../../helpers/formatTime";

const VideoWithControls = withVideo(Video);

export class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._container = createRef();
    this.state = {
      height: 0,
      width: 0,
      time: 0
    };
    this._getTime = this._getTime.bind(this);
  }

  componentDidMount() {
    const c = this._container.current;
    this.setState({
      height: c.offsetHeight,
      width: c.offsetWidth
    })
    console.log('cDM',c );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('cdU', this._container);
  }

  _getTime(value) {
    this.setState({time: value})
    console.log('222',value );
  }

  render() {
    const {isPlaying, movie, exitPlayer} = this.props;
    const {height, width} = this.state;

    console.log('444', this.state);
    return (
      <Fragment>
        <div className="visually-hidden">
          <svg >
            <symbol id="add" viewBox="0 0 19 20">
              <title>+</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="+" fill="#EEE5B5"
                  points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
              </g>
            </symbol>
            <symbol id="full-screen" viewBox="0 0 27 27">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z"
                fill="#FFF9D9" fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9"
                fillOpacity="0.7"/>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9"
                fillOpacity="0.7"/>
            </symbol>
            <symbol id="in-list" viewBox="0 0 18 14">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
                fill="#EEE5B5"/>
            </symbol>
            <symbol id="pause" viewBox="0 0 14 21">
              <title>Artboard</title>
              <desc>Created with Sketch.</desc>
              <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Line" fill="#EEE5B5" fillRule="nonzero"
                  points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
                <polygon id="Line" fill="#EEE5B5" fillRule="nonzero"
                  points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
              </g>
            </symbol>
            <symbol id="play-s" viewBox="0 0 19 19">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
            </symbol>
          </svg>
        </div>

        <div className="player" ref={this._container}>
          {/* <video src="#" className="player__video" poster={movie.previewImage}/>*/}
          {/* <Video src={src} reference={reference} poster={poster} muted={false}/> */}

          <VideoWithControls
            className="player__video"
            src={movie.videoLink}
            poster={movie.previewImage}
            muted={false}
            isPlaying={isPlaying}
            controls={true}
            height={height}
            width={width}
            onTimeChange={this._getTime}
          />


          <button type="button" className="player__exit" onClick={exitPlayer}>Exit</button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value="30" max="100"/>
                <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{formatTime(this.state.time)}</div>
            </div>

            <div className="player__controls-row">
              <PlayerButton onClick={() => {}} isPlaying={isPlaying}/>
              <div className="player__name">{movie.name}</div>

              <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movie: getMovie(state),
  isPlaying: getPlayingStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  exitPlayer: () => dispatch(playerAction.exitPlayer())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);