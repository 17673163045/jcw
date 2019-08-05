import { Link } from "react-router-dom"
import React, { PureComponent } from "react"

import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class SelectCityTitle extends PureComponent {
    render() {
        return (
            <Wrap>
                城市选择
                <Link to="/home">
                    <div className="backHome iconfont icon-arrow-left"></div>
                </Link>
            </Wrap>
        )
    }
}

// 样式
const Wrap = styled.div`
    padding:0 ${r(12)};
    padding-right:${r(40)};
    position:sticky;
    background-color:#fff;
    font-size:${r(18)};
    text-align:center;
    width:100%;
    height:${r(42)};
    line-height:${r(42)};
    top:0;
    left:0;
    .backHome{
        float:left;
        height:100%;
        font-size:${r(20)};
    }
`

export default SelectCityTitle