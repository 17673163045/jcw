import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class CurrentCity extends PureComponent {
    render(){
        let CityName = JSON.parse(window.sessionStorage.getItem("userSelect")).name
        return (
            <Wrap>
                <div className="leftCity">
                    {CityName}
                </div>
                <div className="rightIcon iconfont icon-dingwei2"></div>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    width:${r(62)};
    height:${r(28)};
    line-height:${r(28)};
    display:flex;
    .leftCity{
        padding:0 ${r(6)};
        font-size:${r(15)};
        color:#858585;
    }
    .rightIcon{
        flex:1;
    }
`
export default CurrentCity