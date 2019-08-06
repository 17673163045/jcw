// 这是显示在主页的当前城市的组件
import { NavLink } from "react-router-dom"
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数
const placeIcon = require("@/images/CurrentCity.png"); // 定位小图标
const placeIcon2 = require("@/images/CurrentCity2.png"); // 定位小图标2

// const placeIcon = require("@/images/CurrentCity.png")

class CurrentCity extends PureComponent {
    render() {
        console.log(this.props.citybackgroundimg)
        return (
            <NavLink to="/selectCity">
                <Wrap cityBackgroundColor={this.props.cityBackgroundColor} cityColor={this.props.cityColor}>
                    <Strong citybackgroundimg={this.props.citybackgroundimg}></Strong>
                    <i>{this.props.userSelectCity}</i>
                </Wrap>
            </NavLink>
        )
    }
}
const Strong = styled.strong`
    width:${r(24)};
    background:url(${(props)=>(props.citybackgroundimg===2 ? placeIcon2 : placeIcon)}) no-repeat center;
    background-size:100% 100%
`
const Wrap = styled.div`
    display:flex;
    padding:6px 10px;
    height:30px;
    width:70px;
    border-radius:30px;
    border: 1px solid;
    border-color:rgba(78, 78, 78, 0.1);
    color:${(props)=>(props.cityColor)};
    background-color:${(props)=>(props.cityBackgroundColor)};
    i{
        width:${r(46)};
        white-space:nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        font-style:normal;
        font-weight:bolder;
        font-size:14px;
        line-height:18px;
        margin-left:2px;
    }
`
export default CurrentCity