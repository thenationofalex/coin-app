import React from 'React'
import Header from '../header'
import Content from '../content'
import styled from 'react-emotion'
import { connect } from 'react-redux'
import { store } from '../../redux/store'
import { syncApi } from '../../redux/actions'
import { Config } from '../../config'
import H2 from '../heading-two'
import findCoinIcon from '../coin-icon'
import ButtonLink from '../button-link'
import { ErrorMessage } from '../error-message'

const StyledTable = styled('table')`
  margin: 10px auto;
  & th {
    text-align: left;
    text-transform: uppercase;
  }
  & th, & td {
    padding: 7px;
  }
`

class ViewCoin extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Content>
          <H2>
            {findCoinIcon(this.props.coinConfig.code)}
            {this.props.coinConfig.name}
          </H2>
          <div>
            {
              this.props.error ? (
                <ErrorMessage>{this.props.tickerData}</ErrorMessage>
              ) : (
                <StyledTable>
                  <tbody>
                    {this.props.tickerData === 'loading' ? (
                      <tr><td>loading</td></tr>
                    ) : (
                      Object.keys(this.props.tickerData).map(row => {
                        return (
                          <tr key={row}>
                            <th>{row}</th>
                            <td>{this.props.tickerData[row]}</td>
                          </tr>
                        )
                      })
                    )
                    }
                  </tbody>
                </StyledTable>
              )
            }
            <ButtonLink link={'/'} title={'Back'} />
          </div>
        </Content>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, props) => {
  let filteredTickerData = state.reducer.coinData
  
  if (!state.reducer.error) {
    if (state.reducer.coinData === 'loading') {
      store.dispatch(syncApi())
    } else {
      filteredTickerData = filteredTickerData.find(data => data.symbol === props.match.params.code)
    }
  }

  return {
    coinConfig: Config.coins.find(coin => coin.code.toLocaleLowerCase() === props.match.params.code),
    error: state.reducer.error,
    tickerData: filteredTickerData
  }
}

export default connect(mapStateToProps)(ViewCoin)
