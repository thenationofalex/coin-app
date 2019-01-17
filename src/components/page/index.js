import React from 'react'
import Header from '../header'
import Content from '../content'
import CoinList from '../coin-list'
import { store } from '../../redux/store'
import { syncApi } from '../../redux/actions'

export default class Page extends React.PureComponent {
  componentDidMount () {
    store.dispatch(syncApi())
  }
  render () {
    return (
      <React.Fragment>
        <Header />
        <Content>
          <CoinList />
        </Content>
      </React.Fragment>
    )
  }
}

