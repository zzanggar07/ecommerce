import * as React from 'react'
import { Link } from 'react-router-dom'

export default class ErrorPage extends React.Component<any, {}> {
   render() {
      return <React.Fragment>
         <div>
            <h3>  404 page not found</h3>
            <p>   We are sorry but the page you are looking for does not exist.</p>
            <Link to="/"><span style={{ color: 'black'}}>  Go Home</span></Link>
         </div>
      </React.Fragment>
   }
}
