import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Page } from './components/base/base'
import { TopBar } from './components/TopBar'
import { GlobalStyle } from './global/GlobalStyle'
import { Judge } from './pages/Judge'
import { Receive } from './pages/Receive'
import { Balance } from './pages/Balance'
import { Prices } from './pages/Prices'
import { Block } from './pages/Block'
import { Tokens } from './pages/Tokens'
import { Transactions } from './pages/Transactions'
import { SendEtherPage } from './pages/SendEtherPage'
import { NotificationsList } from './components/Transactions/History'

export function App() {
  return (
    <Page>
      <GlobalStyle />
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/judge" component={Judge} />
          <Route exact path="/receive" component={Receive} />
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/prices" component={Prices} />
          <Route exact path="/send" component={SendEtherPage} />
          <Route exact path="/transactions" component={Transactions} />
          <Redirect exact from="/" to="/balance" />
        </Switch>
      </BrowserRouter>
      <NotificationsList />
    </Page>
  )
}
