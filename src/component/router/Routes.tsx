import { createBrowserHistory } from 'history'
import * as React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import WrapForHome from '@home/WrapperContent'
import WrapForShop from '@shop/WrapperContent'
import WrapForCart from '@cart/WrapperContent'
import WrapForContact from '@contact/WrapperContent'
import WrapForLogin from '@login/WrapperContent'
import ErrorPage from '@error/ErrorPage'

import ModalWrapper from '@modal/ModalWrapper'
import Notification from '@notify/Notification'

const history = createBrowserHistory()

export default class Routes extends React.Component<any, {}> {
   render() {
      return (
         <Router history={history}>
            <Switch>
               <Route exact={true} path="/" component={(props: any) => <WrapForHome {...props} />} />
               <Route exact={true} path="/products" component={(props: any) => <WrapForShop {...props} />} />
               <Route exact={true} path="/cart" component={(props: any) => <WrapForCart {...props} />} />
               <Route exact={true} path="/contact" component={(props: any) => <WrapForContact {...props} />} />
               <Route exact={true} path="/login" component={(props: any) => <WrapForLogin {...props} />} />
               <Route component={ErrorPage} />
            </Switch>
            <ModalWrapper />
            <Notification />
         </Router>
      )
   }
}
