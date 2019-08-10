// 这是加载所有的推荐后显示的组件
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class NoMoreNode extends PureComponent {
    render() {
        return (
            <Wrap>
                <div className="MoreShow">
                    <span>查看更多演出</span>
                    <span className="rightIcon iconfont icon-jiantou"></span>
                </div>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    height:${r(80)};
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    .MoreShow{
        display:flex;
        text-align:center;
        height:${r(38)};
        line-height:${r(38)};
        color:#f90;
        border:1px solid #f90;
        padding:0 ${r(20)};
        span{
            line-height:${r(38)};
            font-size:${r(14)};
        }
        .rightIcon{
            margin-left:${r(6)};
        }
    }
`
export default NoMoreNode