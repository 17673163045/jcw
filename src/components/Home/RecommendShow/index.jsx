// 这是为你推荐演出的组件
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class RecommendShow extends PureComponent {
    render() {
        return (
            <Wrap>
                <div className="title">为你推荐</div>
                {
                    this.props.recommendShow.map((item, index) => (
                        <div className="showItem" key={index}>
                            <div className="leftImg">
                                <img src={item.schePic} alt="" />
                            </div>
                            <div className="rightContent">
                                <p className="time">{item.show_time}</p>
                                <p className="showTitle">{item.show_name}</p>
                                <p className="showPlace">
                                    <span className="city">{item.c_name}</span>
                                    <span className="line">|</span>
                                    <span className="cityPlace">{item.v_name}</span>
                                </p>
                                <p className="showPrice">
                                    <span className="priceFont">￥</span>
                                    <span className="priceNum">{parseInt(item.low_price)}</span>
                                    起
                                </p>
                            </div>
                        </div>
                    ))
                }
            </Wrap>
        )
    }
}

//样式
const Wrap = styled.div`
    padding:${r(12)};
    height:auto;
    width:${r(375)};
    margin:0 auto;
    .title{
        padding:${r(12)} 0;
        font-size:${r(18)};
        font-weight:bold;
    }
    .showItem{
        padding:${r(12)} 0;
        display:flex;
        .leftImg{
            height:${r(152)};
            width:${r(110)};
            border-radius:4px;
            img{
                border-radius:4px;
                height:100%;
                width:100%;
            }
        }
        .rightContent{
            flex:1;
            padding:0 ${r(12)};
        }
    }
`

export default RecommendShow