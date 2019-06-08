import React from 'react';
import {shallow} from 'enzyme';
import {withLoadingReviews} from './with-loading-reviews.jsx';

const mockProps = {
  id: 10,
  loadReviews: jest.fn(),
  clearReviews: jest.fn(),
  reviews: []
};
const mockComponent = () => <div/>;
const MockWrappedComponent = withLoadingReviews(mockComponent);

describe(`WithLoadingReviews test`, () => {
  test(`Should call loadReviews and render mockComponent`, () => {
    const component = shallow(<MockWrappedComponent {...mockProps}/>);
    expect(component.instance().props.loadReviews).toHaveBeenCalled();
    expect(component.find(`div`)).toBeTruthy();
  });
});

