import React from 'react';
import renderer from 'react-test-renderer';
import {ProviderMock} from '../../__mock__/providerMock.jsx';
import {AddReview} from './add-review.jsx';
import {createNodeMock} from '../../__mock__/createMockNode';

const mockMovie = {
  name: `Movie`,
  posterImage: `pic.jpg`,
  backgroundImage: `pic.jpg`,
  backgroundColor: `FFFFFF`
};

test(`Should render AddReview correctly`, () => {
  const options = {createNodeMock};
  const tree = renderer.create(
      <ProviderMock>
        <AddReview
          onTextareaChange={jest.fn()}
          onRadioChange={jest.fn()}
          disabled={true}
          onSubmit={jest.fn()}
          rating={4}
          movie={ mockMovie}
          formValidity={{radio: true, textarea: true}}
        />
      </ProviderMock>, options
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
