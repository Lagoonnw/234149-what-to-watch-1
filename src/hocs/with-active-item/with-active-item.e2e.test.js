import React from 'react';
import {shallow} from 'enzyme';
import {withActiveItem} from './with-active-item.jsx';
import {VIDEO_PLAY_DELAY_TIME} from '../../constants/constants';

const MockComponent = () => <div/>;
const WrappedMockComponent = withActiveItem(MockComponent);

describe(`With-active-item HOC test`, () => {
  test(`Should be null in state`, () => {
    const component = shallow(<WrappedMockComponent onClick={(value)=> value}/>);
    expect(component.state(`activeItem`)).toEqual(null);
  });
  test(`Should change state to 'BigBang!' on click`, () => {
    const component = shallow(<WrappedMockComponent onClick={(value)=> value}/>);
    component.props().onClick(`BigBang!`);
    expect(component.state(`activeItem`)).toEqual(`BigBang!`);
  });
  test(`Should change state to 'BigBang!' on mouse enter in 1 second`, () => {
    const component = shallow(<WrappedMockComponent onMouseEnter={(value)=> value}/>);
    component.props().onMouseEnter(`BigBang!`);
    expect(component.state(`activeItem`)).toEqual(null);
    setTimeout(() => {
      expect(component.state(`activeItem`)).toEqual(`BigBang!`);
    }, VIDEO_PLAY_DELAY_TIME);
  });
  test(`Should return state to null on mouse leave`, () => {
    const component = shallow(<WrappedMockComponent onMouseLeave={()=> jest.fn()}/>);
    component.setState({activeItem: `BigBang`});
    component.props().onMouseLeave();
    expect(component.state(`activeItem`)).toEqual(null);
  });
});

