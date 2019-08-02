import {Route,Redirect} from "react-router-dom"
import React,{PureComponent,Fragment} from "react"

import Home from "@/components/Home"
import Theatre from "@/components/Theatre"
import Wallet from "@/components/Wallet"
import UserMy from "@/components/UserMy"

export default class extends PureComponent {
    render(){
        return (
            <Fragment>
                <Redirect path="/" to="/home"></Redirect>
                <Route path="/home" component={Home}></Route>
                <Route path="/theatre" component={Theatre}></Route>
                <Route path="/wallet" component={Wallet}></Route>
                <Route path="/usermy" component={UserMy}></Route>
            </Fragment>
        )
    }
}
