// 这是为你推荐演出的组件
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class RecommendShow extends PureComponent {
    render() {
        if (!this.props.recommendShow) return null;
        return (
            <Wrap>
                {this.props.isTitle ? (<div className="title">为你推荐</div>) : null}
                
                {
                    this.props.recommendShow.map((item, index) => (
                        <div className="showItem" key={index}>
                            <div className="leftImg">
                                <img src={item.schePic || item.pic} alt="" />
                            </div>
                            <div className="rightContent">
                                <p className="time">
                                    <span className="dataTime"> {item.show_time || item.show_time_top}</span>
                                    <span className="weekTime">{item.week || item.show_time_bottom}</span>
                                </p>
                                <p className="showTitle">{item.show_name || item.name}</p>
                                <p className="showPlace">
                                    <span className="city">{item.c_name || item.city_name}</span>
                                    <span className="line">|</span>
                                    <span className="cityPlace">{item.v_name || item.venue_name}</span>
                                </p>
                                <p className="showPrice">
                                    <span className="priceFont">￥</span>
                                    <span className="priceNum">{parseInt(item.low_price || item.min_price)}</span>
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
            .time{
                padding:${r(6)} 0;
                .dataTime{
                    font-size:${r(14)};
                    font-weight:bolder;
                }
                .weekTime{
                    font-size:${r(12)};
                    color:#616161;
                    margin-left:${r(6)}
                }
            }
            .showTitle{
                padding:${r(4)} 0;
                font-size:${r(18)};
                font-weight:bold;
                word-break:break-all;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .showPlace{
                padding:${r(6)} 0;
                color:#666;
                font-size:${r(12)};
                span{
                    margin-right:${r(4)};
                }
            }
            .showPrice{
                 padding:${r(6)} 0;
                 color:#ccc;
                 font-size:${r(12)};
                 span{
                     font-size:${r(16)};
                     color:#f30;
                 }
                 .priceNum{
                     margin-right:${r(8)}
                 }
            }
        }
    }
`

export default RecommendShow