import React, {Component} from 'react'
import {shallow, mount} from 'enzyme'
import toJson from 'enzyme-to-json'

import Content from './index'
 
test('Content renders', () => {
  const wrapper = shallow(
    <Content>
      <h1>Some content</h1>
    </Content>
  );
 
  expect(toJson(wrapper)).toMatchSnapshot()
});

test('Content children is rendered', () => {
  const wrapper = mount(
    <Content>
      <h1>Some content</h1>
    </Content>
  );
 
  expect(wrapper.text()).toEqual('Some content')
});

