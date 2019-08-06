import React, { PureComponent } from "react"
import styled from "styled-components"
import CurrentCity from "./CurrentCity" // 导入定位城市组件 
import Search from "./Search"// 导入搜索框
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数
const topsearchimg = require("@/images/topsearchimg.png")

class TopSearch extends PureComponent {
    render() {
        return (
            <Wrap>
                <CurrentCity userSelectCity={this.props.userSelectCity}></CurrentCity>
                <Search></Search>
                <TopSearchImg>
                    <img src={topsearchimg} alt=""/>
                </TopSearchImg>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    position:fixed;
    width:${r(375)};
    left:0;
    right:0;
    margin:0 auto;
    z-index:9999;
    display:flex;
    justify-content:space-between;
    height:auto;
    padding:6px 10px;
`
const TopSearchImg = styled.div`
    height:30px;
    width:30px;
    img{
        height:100%;
        width:100;
    }
`

export default TopSearch