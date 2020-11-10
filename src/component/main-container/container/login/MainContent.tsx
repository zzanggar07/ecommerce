import * as React from 'react'
import SliderArea from '@login/area/Slider'
import LoginPart from '@login/area/LoginPart'

export default class MainContent extends React.Component<any, {}> {
   render() {
      return <React.Fragment>
         <main>
            <SliderArea />
            <LoginPart />
         </main>
      </React.Fragment>
   }
}
