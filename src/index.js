import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from './redux/store'
import { theme } from './components/theme'
import Page from './components/page'
import ViewCoin from './components/view-coin'

injectGlobal`
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  font-size: 16px;
  font-family: 'Work Sans', sans-serif;
}
a {
  text-decoration: none;
}
`

const ThemeWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>  
          <div>
            <Route path='/' exact component={Page} />
            <Route path='/:code' component={ViewCoin} />
          </div>
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  )
}

ReactDOM.render(<ThemeWrapper />, document.getElementById('blockbid-app'))
