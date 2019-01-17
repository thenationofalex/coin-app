import React from 'react'
import styled from 'react-emotion'
import { connect } from 'react-redux'
import { Config } from '../../config'
import { Link } from 'react-router-dom'
import H2 from '../heading-two'
import findCoinIcon from '../coin-icon'

const StyledListWrapper = styled('div')`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  opacity: ${props => props.loading ? .5 : 1};
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.darkPurple}
`

const StyledListItem = styled('div')`
  display: inline-block;
  padding: 10px;
  text-align: center;
  width: 100px;
  & svg {
    margin: 0 auto;
  }
  & span {
    display: block;
    padding-top: 8px;
    & i {
      display: block;
      font-size: 10px;
      padding-top: 4px;
    }
  }
`

class CoinList extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <H2>Coin List</H2>
        <StyledListWrapper loading={this.props.loading}>
          {
            this.props.error ? (
              <StyledError>{this.props.tickerData}</StyledError>
            ) : (
              Config.coins.map(coin => {
                const IconName = findCoinIcon(coin.code)
                return (
                  <StyledLink key={coin.code} to={`/${coin.code.toLocaleLowerCase()}`}>
                    <StyledListItem>
                      {IconName}
                      <span>
                        {coin.name} <i>({coin.code})</i>
                      </span>
                    </StyledListItem>
                  </StyledLink>
                )
              })
            )
          }
        </StyledListWrapper>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.reducer.loading,
    error: state.reducer.error,
    tickerData: state.reducer.coinData
  }
}

export default connect(mapStateToProps)(CoinList)
