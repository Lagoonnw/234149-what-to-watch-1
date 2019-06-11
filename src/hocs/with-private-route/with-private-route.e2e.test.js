import React from 'react';
import {shallow} from 'enzyme';
import {withPrivateRoute} from './with-private-route.jsx';
import {ProviderMock} from '../../__mock__/providerMock.jsx';

const MockComponent = () => <div id="test"/>;
const MockWrapped = withPrivateRoute(MockComponent);

describe(`With private router component test`, () => {
  test(`Should render div if user authorized`, () => {
    const component = shallow(
        <ProviderMock>
          <MockWrapped
            isAuthorizationRequired={false}
            match={{match: {params: {id: 2}}}}
          />
        </ProviderMock>);
    expect(component.find(`#test`)).toBeTruthy();
  });
});
