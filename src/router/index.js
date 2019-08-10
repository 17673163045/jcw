import { Route, Redirect, Switch} from "react-router-dom"
import React, { PureComponent, Fragment } from "react"

import Home from "@/components/Home"
import City from "@/components/Home/City"

import Theatre from "@/components/Theatre"
import Classify from "@/components/Classify"
import UserMy from "@/components/UserMy"

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
                    <Redirect path="/" to="/home"></Redirect>
                </Switch>
            </Fragment >
        )
    }
}
