import React from 'react';
import {shallow} from 'enzyme';
import {withReviewForm} from './with-review-form.jsx';

const Mock = () => <div/>;
const MockComponent = withReviewForm(Mock);

describe(`WithReviewForm hoc test`, () => {
  test(`Should change comment in state from empty string to 'Hey Ho!'`, () => {
    const component = shallow(
        <MockComponent
          submitFailed={false}
          resetFormError={jest.fn()}
          sendReview={jest.fn()}
          match={{match: {params: {id: 2}}}}
          history={{}}
        />);
    expect(component.state(`comment`)).toEqual(``);
    component.instance()._textareaChangeHandler({target: {value: `Hey Ho!`}});
    expect(component.state(`comment`)).toEqual(`Hey Ho!`);
  });
  test(`Should change rating in state from null to 5`, () => {
    const component = shallow(
        <MockComponent
          submitFailed={false}
          resetFormError={jest.fn()}
          sendReview={jest.fn()}
          match={{match: {params: {id: 2}}}}
          history={{}}
        />);
    expect(component.state(`rating`)).toEqual(null);
    component.instance()._radioChangeHandler({target: {value: 5}});
    expect(component.state(`rating`)).toEqual(5);
  });
});
