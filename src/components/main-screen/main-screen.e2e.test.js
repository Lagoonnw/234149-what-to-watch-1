import React from 'react';
import {mount} from 'enzyme';
import {MainScreen} from "./main-screen";

const mock = [
  {
    id: 546464,
    name: `Snatch`,
    imgSrc: ``
  },
  {
    id: 9898787,
    name: `Pulp Fiction`,
    imgSrc: ``
  },
  {
    id: 5487878,
    name: `The Witcher`,
    imgSrc: ``
  }
];

describe(`Small movie card click`, () => {
  test(`Should render moviesList with mock length`, () => {
    const component = mount(<MainScreen moviesList={mock}/>);
    const moviesList = component.find(`.catalog__movies-list`);
    expect(moviesList.children()).toHaveLength(mock.length);
  });
});
