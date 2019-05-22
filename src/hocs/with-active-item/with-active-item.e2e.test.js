import React            from 'react';
import {shallow}        from 'enzyme';
import {withActiveItem} from './with-active-item.jsx';

const MockComponent = () => <div/>;
const WrappedMockComponent = withActiveItem(MockComponent);

describe(`With active item HOC test`, () => {
  test(`Should be with active item in state equals null `, () => {
    const component = shallow(<WrappedMockComponent/>);
    expect(component.state('activeItem')).toEqual(null);
  });
});

