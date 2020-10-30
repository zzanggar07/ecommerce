import * as React from 'react'
import { Provider } from 'mobx-react'

import Routes from '@router/Routes'
import Root from '@models/Root'

export default class App extends React.Component<any, {}> {
   render() {
      return (
         <Provider {...Root}>
            <Routes/>
         </Provider>
      )
   }
}
