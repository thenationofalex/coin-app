import React, {Component} from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import { store } from '../../redux/store'
import CoinList from './index'
 
test('Coinlist renders', () => {
  const props = {
    store: store
  }
  const wrapper = shallow(
    <CoinList {...props} />
  );
 
  expect(toJson(wrapper)).toMatchSnapshot()
});
