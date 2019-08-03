import React, { PureComponent } from "react"
import styled from "styled-components"
const searchImg = require("@/images/searchImg.png")

const Wrap = styled.div`
     width:240px;
    input{
    outline:none;
    padding:6px 10px;
    padding-left:40px;
    background:url(${searchImg}) no-repeat 12px center;
    background-size:auto 80%;
    height:30px;
    width:100%;
    border-radius:30px;
    border: 1px solid #e8e8e8;
    color:#fff;
    background-color:rgba(0,0,0,.1);
    }
`

class Search extends PureComponent {
    render() {
        return (
            <Wrap>
                <input type="text" placeholder="搜索热门演出" />
            </Wrap>
        )
    }
}

export default Search