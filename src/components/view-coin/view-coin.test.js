import React, {Component} from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import { MemoryRouter } from 'react-router'
import { store } from '../../redux/store'
import ViewCoin from './index'
 
test('ViewCoin renders', () => {
  const props = {
    store: store,
    theme: {
      colors: {
        lightPurple: 'purple'
      }
    }
  }
  const wrapper = shallow(
    <ViewCoin
      {...props}
      match={{params: {code: 'bchusd'}}}
      />
  );
 
  expect(toJson(wrapper)).toMatchSnapshot()
});
