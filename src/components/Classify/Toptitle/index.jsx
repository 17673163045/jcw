// 这是分类的顶部标题组件
import React, { PureComponent } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import globalFns from "@/core/globalFns"
const r = globalFns.r
class Toptitle extends PureComponent {
    render() {
        return (
            <Wrap>
                <Link to="/home">
                    <div className="leftbackbtn iconfont icon-arrow-left"></div>
                </Link>
                <div className="title">演出</div>
                <div className="dotgetpage">
                    <div className="dotwrap">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </Wrap>
        )
    }
}

const Wrap = styled.div` 
    display:flex;
    justify-content:space-between;
    position:fixed;
    background-color: #fff;
    z-index:9999;
    width:100%;
    height:${r(42)};
    padding:${r(6)};
    line-height:${r(30)};
    border-bottom:1px solid #e4e4e4;
    .leftbackbtn{
        font-size:${r(18)};
        padding:0 ${r(4)};
    }
    .title{
        font-size:${r(20)};
        color:#555;
    }
    .dotgetpage{
        display:flex;
        align-items:center;
        .dotwrap{
            flex:1;
            height:${r(4)};
            .dot{
                float:left;
                height:${r(4)};
                width:${r(4)};
                background-color:#555;
                border-radius:50%;
                margin-right:${r(4)}
            }
        }
    }
`

export default Toptitle