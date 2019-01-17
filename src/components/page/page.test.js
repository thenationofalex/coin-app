import React, {Component} from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import Page from './index'
 
test('Page renders', () => {
  const wrapper = shallow(
    <Page />
  );
 
  expect(toJson(wrapper)).toMatchSnapshot()
});
