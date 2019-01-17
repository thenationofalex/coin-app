import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './index'
 
test('Header renders', () => {
  const wrapper = shallow(
    <Header />
  );
 
  expect(toJson(wrapper)).toMatchSnapshot();
});
