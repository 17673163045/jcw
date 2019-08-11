import { Route, Redirect, Switch} from "react-router-dom"
import React, { PureComponent, Fragment } from "react"

import Home from "@/components/Home"; //主页路由
import City from "@/components/Home/City" //城市路由

import Theatre from "@/components/Theatre" //剧院路由
import Classify from "@/components/Classify" //分类路由
import UserMy from "@/components/UserMy" //"用户我的"路由
import Detail from "@/components/Detail";

export default class extends PureComponent {
    render() {
        return (
            < Fragment >
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/selectCity" component={City}></Route>
                    <Route exact path="/theatre" component={Theatre}></Route>
                    <Route exact path="/classify" component={Classify}></Route>
                    <Route exact path="/usermy" component={UserMy}></Route>
                    <Route exact path="/detail/:id" component={Detail}></Route>
                    <Redirect path="/" to="/home"></Redirect>
                </Switch>
            </Fragment >
        )
    }
}
