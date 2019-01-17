import React, {Component} from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import { store } from '../../redux/store'
import {ErrorMessage} from './index'
 
test('ErrorMessage renders', () => {
  const props = {
    store: store,
    theme: {
      colors: {
        blue: 'blue'
      }
    }
  }
  const wrapper = shallow(
    <ErrorMessage {...props}>
      ErrorMessage
    </ErrorMessage>
  );
 
  expect(toJson(wrapper)).toMatchSnapshot()
});
