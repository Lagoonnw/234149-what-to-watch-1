import React from 'react';
import {mount} from 'enzyme';
import {MainScreen} from "./main-screen";

const mock = [
  {
    name: `Snatch`,
    imgSrc: ``
  },
  {
    name: `Pulp Fiction`,
    imgSrc: ``
  },
  {
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
