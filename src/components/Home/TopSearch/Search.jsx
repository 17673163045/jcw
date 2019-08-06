import React, { PureComponent } from "react"
import styled from "styled-components"
const searchImg = require("@/images/searchImg.png")

const Wrap = styled.div`
    width:240px;
`
const Input = styled.input`
    outline:none;
    padding:6px 10px;
    padding-left:40px;
    background:url(${searchImg}) no-repeat 12px center;
    background-size:auto 80%;
    height:30px;
    width:100%;
    border-radius:30px;
    border: 1px solid;
    border-color:rgba(78, 78, 78, 0.1);
    color:#fff;
    background-color:${(props)=>(props.searchBgColor)};
    &::placeholder{
        color:${(props)=>(props.searchPlColor)};
    }
`

class Search extends PureComponent {
    render() {
        return (
            <Wrap>
                <Input searchBgColor={this.props.searchBgColor} searchPlColor={this.props.searchPlColor} placeholder={"搜索热门演出"}/>
                {/* <input type="text" placeholder="搜索热门演出" /> */}
            </Wrap>
        )
    }
}

export default Search