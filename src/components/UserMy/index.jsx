// 这是"用户我的"组件
import React, { Component } from "react"
import BottomToggle from "@/components/PublicCom/BottomToggle"
class UserMy extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div id="usermy">
                <BottomToggle></BottomToggle>
                我的
            </div>
        )
    }
}

export default UserMy