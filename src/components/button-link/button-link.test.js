import React, {Component} from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import { store } from '../../redux/store'
import ButtonLink from './index'
 
test('ButtonLink renders', () => {
  const props = {
    store: store,
    title: 'Button',
    link: '/'
  }
  const wrapper = shallow(
    <ButtonLink {...props} />
  );
 
  expect(toJson(wrapper)).toMatchSnapshot()
});
