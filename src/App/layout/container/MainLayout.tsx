import * as React from 'react'
import RenderAbout from '@src/View/About/Content'
import RenderBlog from '@src/View/Blog/Content'
import RenderCart from '@src/View/Cart/Content'
import RenderContract from '@src/View/Contact/Content'
import RenderHome from '@src/View/Home/Content'
import RenderLogin from '@src/View/Login/Content'
import RenderShop from '@src/View/Shop/Content'


import {MAIN_MENU, MAIN_MENU_PROPS} from "@src/Constants";
import TopMenu from "@src/App/layout/container/header/TopMenu";
import Bottom from "@src/App/layout/container/footer/Bottom";
import SearchBox from "@src/App/layout/container/search/SearchBox";

export default class MainLayout extends React.Component<any, {}> {
    render() {
        return ((props) => {
            const {pathname} = this.props.location ? this.props.location : this.props
            switch (pathname) {
                case MAIN_MENU_PROPS.get(MAIN_MENU.ABOUT).pathName:
                    return (
                        <>
                            <TopMenu {...this.props}/>
                            <RenderAbout/>
                            <Bottom/>
                            <SearchBox/>
                        </>
                    )
                case MAIN_MENU_PROPS.get(MAIN_MENU.BLOG).pathName:
                    return (
                        <>
                            <TopMenu {...this.props}/>
                            <RenderBlog/>
                            <Bottom/>
                            <SearchBox/>
                        </>
                    )
                case MAIN_MENU_PROPS.get(MAIN_MENU.CART).pathName:
                    return (
                        <>
                            <TopMenu {...this.props}/>
                            <RenderCart/>
                            <Bottom/>
                            <SearchBox/>
                        </>
                    )
                case MAIN_MENU_PROPS.get(MAIN_MENU.CONTACT).pathName:
                    return (
                        <>
                            <TopMenu {...this.props}/>
                            <RenderContract/>
                            <Bottom/>
                            <SearchBox/>
                        </>
                    )
                case MAIN_MENU_PROPS.get(MAIN_MENU.HOME).pathName:
                    return (
                        <>
                            <TopMenu {...this.props}/>
                            <RenderHome/>
                            <Bottom/>
                            <SearchBox/>
                        </>
                    )
                case MAIN_MENU_PROPS.get(MAIN_MENU.SHOP).pathName:
                    return (
                        <>
                            <TopMenu {...this.props}/>
                            <RenderShop/>
                            <Bottom/>
                            <SearchBox/>
                        </>
                    )
            }
            return (
                <RenderLogin/>
            );

        })(this.props);
    }
}
