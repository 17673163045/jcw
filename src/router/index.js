import { Route, Redirect, Switch, exact} from "react-router-dom"
import React, { PureComponent, Fragment } from "react"

import Home from "@/components/Home"
import City from "@/components/Home/City"

import Theatre from "@/components/Theatre"
import Wallet from "@/components/Wallet"
import UserMy from "@/components/UserMy"


export default class extends PureComponent {
    render() {
        return (
            < Fragment >
               <Switch>
                    <Route path="/home"  component={Home}></Route>
                    <Route path="/selectCity"  component={City}></Route>
                    <Route path="/theatre" component={Theatre}></Route>
                    <Route path="/wallet" component={Wallet}></Route>
                    <Route path="/usermy" component={UserMy}></Route>
                    <Redirect path="/" to="/home"></Redirect>
               </Switch> 
            </Fragment >
        )
    }
}
