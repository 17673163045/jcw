// 这是当前用户选择的城市
import React, { Component } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class CurrentSelect extends Component {
    render() {
        return (
            <Wrap>
                <Title>当前城市</Title>
                <CityButton>上海</CityButton>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    /* height:${r(100)}; */
    background-color:#f2f2f2;
    width:100%;
    padding:0 ${r(12)};
    padding-right:${r(40)}
`
const Title = styled.div`
    font-size:13px;
    color:#999;
    padding:12px 0;
`
const CityButton = styled.div`
    font-size:${r(14)};
    height:38px;
    width:100px;
    color:#f90;
    border:1px solid #e8e8e8;
    border-radius:2px;
    line-height:38px;
    text-align:center;
    background-color:#fff;
    box-shadow:inset 1px 1px 6px #fff,inset -1px -1px 6px #fff;
    margin-right:6px;
    margin-bottom:6px;
`

export default CurrentSelect