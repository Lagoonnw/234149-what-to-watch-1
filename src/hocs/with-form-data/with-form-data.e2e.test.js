import React from 'react';
import {shallow} from 'enzyme';
import {withFormData} from "./with-form-data.jsx";

const MockForm = () => <form />;

const MockFormWithFormData = withFormData(MockForm);

const mockEvent = (inputName, inputValue) => ({
  target: {
    name: inputName,
    value: inputValue
  }
});

const mockPromise = () => new Promise((resolve, reject) => {
  resolve(`success`);
  reject(`fail`);
});

const mockHistory = {
  goBack: jest.fn()
};

describe(`WithFormData hoc test`, () => {
  test(`Should call change state on change both fields`, () => {
    const component = shallow(<MockFormWithFormData login={mockPromise} history={mockHistory}/>);
    component.props().onChange(mockEvent(`email`, `test@test.com`));
    expect(component.state()).toEqual({
      email: `test@test.com`,
      password: null,
      fieldValidity: {email: true, password: false},
      fieldTouched: {email: true, password: false}
    });
    component.props().onChange(mockEvent(`password`, `gts1258`));
    expect(component.state()).toEqual({
      email: `test@test.com`,
      password: `gts1258`,
      fieldValidity: {email: true, password: true},
      fieldTouched: {email: true, password: true}
    });
  });
  test(`Should call login from props on submit`, () => {
    const spy = jest.spyOn(MockFormWithFormData.prototype, `_submitHandler`);
    const component = shallow(<MockFormWithFormData login={mockPromise} history={mockHistory}/>);
    component.setState({
      email: `test@test.com`,
      password: `gts1258`,
      fieldValidity: {email: true, password: true},
      fieldTouched: {email: true, password: true}
    });
    component.update();
    component.props().onSubmit({preventDefault: jest.fn()});
    expect(spy).toHaveBeenCalled();
  });
});
