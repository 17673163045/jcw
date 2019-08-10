import React, { PureComponent } from "react"
import styled from "styled-components"
import CurrentCity from "@/components/Home/TopSearch/CurrentCity" // 导入定位城市组件 
import Search from "./Search"// 导入搜索框
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数
const topsearchimg = require("@/images/topsearchimg.png"); //搜索放大镜图


class TopSearch extends PureComponent {
    state = {
        WrapBackgroundColor: "transparent",
        citybackgroundimg: 1,
        cityBackgroundColor: "rgba(0,0,0,.3)",
        cityColor: "#fff",
        searchBgColor: "rgba(78, 78, 78, 0.1)",
        searchPlColor:"#fff"
    }
    render() {
        return (
            <Wrap backgroundColor={this.state.WrapBackgroundColor}>
                <CurrentCity
                    userSelectCity={this.props.userSelectCity}
                    cityBackgroundColor={this.state.cityBackgroundColor}
                    citybackgroundimg={this.state.citybackgroundimg}
                    cityColor={this.state.cityColor}
                >
                </CurrentCity>
                <Search searchBgColor={this.state.searchBgColor} searchPlColor={this.state.searchPlColor}></Search>
                <TopSearchImg>
                    <img src={topsearchimg} alt="" />
                </TopSearchImg>
            </Wrap>
        )
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll.bind(this))
    }
    handleScroll() {
        if (window.scrollY < 50) {
            this.setState({
                WrapBackgroundColor: "transparent",
                citybackgroundimg: 1,
                cityBackgroundColor: "rgba(0,0,0,.3)",
                cityColor: "#fff",
                searchBgColor: "rgba(78, 78, 78, 0.1)",
                searchPlColor:"#fff"
            })
        } else {
            this.setState({
                WrapBackgroundColor: "#fff",
                citybackgroundimg: 2,
                cityBackgroundColor: "#fff",
                cityColor: "#000",
                searchBgColor: "#f5f5f5",
                searchPlColor:"#ccc"
            })
        }
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
    padding:10px;
    background-color:${(props) => (props.backgroundColor || 'transparent')}
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