import * as React from 'react'
import TopMenu from '@mainContainer/header/TopMenu'
import SearchBox from '@mainContainer/search/SearchBox'
import Bottom from '@mainContainer/footer/Bottom'
import MainContent from '@mainContainer/container/shop/MainContent'

export default class WrapperContent extends React.Component<any, {}> {

   render() {
      return <React.Fragment>
         <TopMenu {...this.props} />
         <MainContent />
         <Bottom />
         <SearchBox />
      </React.Fragment>
   }
}
