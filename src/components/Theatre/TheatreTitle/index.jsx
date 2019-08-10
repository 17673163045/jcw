import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"


const r = globalFns.r //计算rem的函数

class TheatreTitle extends PureComponent {
    render(){
        return (
            <Wrap>
                剧院
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    width:${r(375)};
    position:sticky;
    left:0;
    right:0;
    margin:auto;
    height:${r(44)};
    padding:${r(8)} 0;
    text-align:center;
    font-size:${r(18)};
    border-bottom:1px solid #e4e4e4;
`

export default TheatreTitle