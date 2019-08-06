// 这是显示在主页的当前城市的组件
import { NavLink } from "react-router-dom"
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

const placeIcon = require("@/images/CurrentCity.png")

class CurrentCity extends PureComponent {
    render() {
        return (
            <NavLink to="/selectCity">
                <Wrap>
                    <strong></strong>
                    <i>{this.props.userSelectCity}</i>
                </Wrap>
            </NavLink>
        )
    }
}

const Wrap = styled.div`
    display:flex;
    padding:6px 10px;
    height:30px;
    width:66px;
    border-radius:30px;
    border: 1px solid;
    border-color:rgba(78, 78, 78, 0.1);
    color:#fff;
    background-color:rgba(0,0,0,.1);
    strong{
        width:${r(20)};
        background:url(${placeIcon}) no-repeat center;
        background-size:100% 100%
    }
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