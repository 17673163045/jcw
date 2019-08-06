// 这是价格组件,配合可复用轮播图使用
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class Price extends PureComponent {
    render(){
        return (
            <Wrap>
                <strong>￥</strong>
                <strong>{this.props.price}</strong>
                <span>起</span>
            </Wrap>
        )
    }
}

//样式
const Wrap = styled.div`
    width:100%;
    strong{
        color:#f50;
        font-size:${r(16)};
        font-weight:normal;
    }
    span{
        color:#ccc;
        font-size:${r(12)};
        margin-left:${r(10)}
    }
`

export default Price