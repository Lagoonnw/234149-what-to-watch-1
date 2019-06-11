import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewCard} from './review-card.jsx';

test(`Should render Review card correctly`, () => {
  const tree = renderer.create(
      <ReviewCard
        user={{id: 1, name: `Sam`}}
        rating={8.75454}
        comment={`Comment`}
        date={`2019-06-11T15:12:25.115Z`}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
