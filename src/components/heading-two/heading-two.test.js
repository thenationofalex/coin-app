import React, {Component} from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import { store } from '../../redux/store'

import H2 from './index'
 
test('H2 renders', () => {
  const wrapper = shallow(
    <H2>Heading 2</H2>
  );
 
  expect(toJson(wrapper)).toMatchSnapshot();
});
