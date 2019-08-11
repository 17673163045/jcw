import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"


const r = globalFns.r //计算rem的函数

class Toptitle extends PureComponent {
    render() {
        return (
            <Wrap>
                <div className="leftback iconfont icon-arrow-left"></div>
                <div className="title">演出详情</div>
                <div className="backhome iconfont icon-zhuye"></div>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    height:${r(40)};
    width:100%;
    padding:${r(10)} ${r(12)};
    line-height:${r(20)};
    display:flex;
    justify-content:space-between;
    color:#fff;
    .leftback{
        font-size:${r(16)};
    }
    .title{
        font-size:${r(18)};
        font-weight:bold;
    }
    .backhome{
        font-weight:bold;
        font-size:${r(18)};
    }
`

export default Toptitle