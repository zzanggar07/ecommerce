import * as React from 'react'
import { Provider } from 'mobx-react'

import Routes from '@src/App/router/Routes'
import Root from '@models/Root'
import Loader from '@src/App/layout/Loader'
import {Suspense} from "react";

export default class App extends React.Component<any, {}> {
   render() {
      return (
         <Provider {...Root}>
            <Suspense fallback={<Loader />}>
               <Routes/>
            </Suspense>
         </Provider>
      )
   }
}
