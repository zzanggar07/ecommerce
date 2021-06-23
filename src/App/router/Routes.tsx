import { createBrowserHistory } from 'history'
import * as React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import WrapMainLayout from '@src/App/layout/container/MainLayout'
import ErrorPage from '@src/View/Error/ErrorPage'

import ModalWrapper from '@src/App/components/modal/ModalWrapper'
import Notification from '@src/App/components/notify/Notification'
import {MAIN_MENU_PROPS} from "@src/Constants";

const history = createBrowserHistory()

export default class Routes extends React.Component<any, {}> {

   route = () => {
       const route = [];
       for (const [key, value] of MAIN_MENU_PROPS.entries()) {
           console.log("Map key= " +key+", value="+value);
           route.push(<Route key={key} exact={true} path={value.pathName} component={(props: any) => <WrapMainLayout {...props} />} />)
       }

       return route;
    }

   render() {
      return (
         <Router history={history}>
            <Switch>
               {/*<Route exact={true} path="/" component={(props: any) => <WrapForHome {...props} />} />*/}
               {/*<Route exact={true} path="/products" component={(props: any) => <WrapForShop {...props} />} />*/}
               {/*<Route exact={true} path="/cart" component={(props: any) => <WrapForCart {...props} />} />*/}
               {/*<Route exact={true} path="/contact" component={(props: any) => <WrapForContact {...props} />} />*/}
               {/*<Route exact={true} path="/login" component={(props: any) => <WrapForLogin {...props} />} />*/}
                {
                    this.route()
                }
               <Route component={ErrorPage} />
            </Switch>
            <ModalWrapper />
            <Notification />
         </Router>
      )
   }
}
