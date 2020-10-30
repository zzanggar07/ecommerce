import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './utils/CrossBrowserSupport'

import App from './component/App'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
