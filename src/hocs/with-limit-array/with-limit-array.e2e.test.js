import React from 'react';
import {shallow} from 'enzyme';
import {withLimitArray} from './with-limit-array.jsx';

const Component = () => <div/>;
const MockComponent = withLimitArray(Component);

describe(`WithLimitArray hoc test`, () => {
  test(`Should increment page by clickHandler`, () => {
    const component = shallow(<MockComponent />);
    component.instance()._clickHandler();
    expect(component.state(`page`)).toEqual(2);
  });
});
