import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../pages/Login';
describe('LoginPage', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LoginPage debug />);
  
    expect(component).toMatchSnapshot();
  });
});