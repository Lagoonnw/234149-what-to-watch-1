import React from 'react';
import {mount} from 'enzyme';
import {withFullScreen} from './with-full-screen.jsx';
import PropTypes from 'prop-types';

const Mock = ({reference}) => <div ref={reference}/>;
const MockWrappedComponent = withFullScreen(Mock);

describe(`With fullscreen test`, () => {
  test(`Should render component with height, width, time, duration equal 0`, () => {
    const component = mount(<MockWrappedComponent/>);
    expect(component.state()).toEqual({
      height: 0,
      width: 0,
      time: 0,
      duration: 0,
      isPlaying: true,
      fullscreen: false
    });
  });
  test(`Should change fullscreen in state to true`, () => {
    const component = mount(<MockWrappedComponent/>);
    component.instance()._fullscreenBtnClickHandler();
    component.update();
    expect(component.state(`fullscreen`)).toBeTruthy();
  });
});

Mock.propTypes = {
  reference: PropTypes.object.isRequired
};
