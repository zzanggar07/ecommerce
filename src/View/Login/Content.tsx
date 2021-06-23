import * as React from 'react'
import SliderArea from '@src/View/Login/area/Slider'
import LoginPart from '@src/View/Login/area/LoginPart'

export default class Content extends React.Component<any, {}> {
   render() {
      return <React.Fragment>
         <main>
            <SliderArea />
            <LoginPart />
         </main>
      </React.Fragment>
   }
}
