import React, { PureComponent } from "react"
import styled from "styled-components"
import CurrentCity from "../City/CurrentCity" // 导入定位城市组件 
import Search from "./Search"// 导入搜索框
const topsearchimg = require("@/images/topsearchimg.png")
const Wrap = styled.div`
    display:flex;
    justify-content:space-between;
    height:auto;
    width:100%;
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
class TopSearch extends PureComponent {
    render() {
        return (
            <Wrap>
                <CurrentCity></CurrentCity>
                <Search></Search>
                <TopSearchImg>
                    <img src={topsearchimg} alt=""/>
                </TopSearchImg>
            </Wrap>
        )
    }
}

export default TopSearch