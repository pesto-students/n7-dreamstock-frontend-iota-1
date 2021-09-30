import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './Login';
describe('LoginPage', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<LoginPage debug />);
  
    expect(component).toMatchSnapshot();
  });
});