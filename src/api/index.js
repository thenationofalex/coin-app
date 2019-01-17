import { Config } from '../config'

export const apiData = () => {
  let construtedQuery = ''
  Config.coins.map(coin => {
    construtedQuery += `t${coin.code},`
  })

  const fetchData = fetch(Config.tickerApi + construtedQuery)
    .then(resp => resp.json())
    .then(data => {
      const formattedResponse = []
      data.map(coin => {
        formattedResponse.push({
          'symbol': coin[0].toLowerCase().slice(1),
          'bid': coin[1],
          'bid_size': coin[2],
          'ask': coin[3],
          'ask_size': coin[4],
          'daily_change': coin[5],
          'last_price': coin[6],
          'volume': coin[7]
        })
      })
      return formattedResponse
    })
    .catch(e => {
      throw (e)
    })
  return fetchData
}
