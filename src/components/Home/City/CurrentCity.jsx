// 这是显示在主页的当前城市的组件
import { NavLink } from "react-router-dom"
import React, { PureComponent } from "react"
import styled from "styled-components"
const placeIcon = require("@/images/CurrentCity.png")

const Wrap = styled.div`
    display:flex;
    padding:6px 10px;
    height:30px;
    width:66px;
    border-radius:30px;
    border: 1px solid #e8e8e8;
    color:#fff;
    background-color:rgba(0,0,0,.1);
    strong{
        flex:1;
        background:url(${placeIcon}) no-repeat center;
        background-size:100% 100%
    }
    i{
        font-style:normal;
        font-weight:bolder;
        font-size:15px;
        line-height:18px;
        margin-left:2px;
    }
`
class CurrentCity extends PureComponent {
    render() {
        return (
            <NavLink to="/selectCity">
                <Wrap>
                    <strong></strong>
                    <i>全国</i>
                </Wrap>
            </NavLink>
        )
    }
}
export default CurrentCity