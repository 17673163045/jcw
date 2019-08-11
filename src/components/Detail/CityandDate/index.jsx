import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"

const r = globalFns.r //计算rem的函数

const Currenticon = require("@/images/CurrentCity2.png")

class CityandDate extends PureComponent {
    render() {
        let CityandDateData = this.props.CityandDateData;
        console.log(CityandDateData)
        return (
            <Wrap>
                <div className="main">
                    <div className="leftcontent">
                        <p className="time">
                            {CityandDateData.date}
                        </p>
                        <p className="place">
                            <span className="city">{CityandDateData.city}</span>
                            <span className="place">{CityandDateData.place}</span>
                        </p>
                    </div>
                    <div className="cityMap">
                        <div className="icon"></div>
                    </div>
                </div>
                <div className="vipInfowrap">
                    <div className="vipInfo">
                        <span>橙PLUS卡</span>
                        <span>开通送￥&nbsp;100&nbsp;最高省{CityandDateData.disMaxPrice}元</span>
                        <span>立即开卡</span>
                        <span className="iconfont icon-jiantou"></span>
                    </div>
                </div>
                <p className="bg"></p>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    height:${r(180)};
    width:${r(375)};
    margin:0 auto;
    .main{
        display:flex;
        height:${r(100)};
        padding:0 ${r(12)};
        .leftcontent{
            flex:1;
            .time{
                color:#222;
                font-size:${r(16)};
                font-weight:bold;
                padding:${r(16)} 0;
            }
            .place{
                color:#222;
                font-size:${r(16)};
                font-weight:bold;
                padding-bottom:${r(16)};
                .city::after{
                    content:"|";
                    margin:0 ${r(8)};
                }
            }
        }
        .cityMap{
            width:${r(40)};
            padding:${r(30)} 0;
            .icon{
                height:${r(40)};
                width:${r(40)};
                border-radius:50%;
                background:url(${Currenticon}) center center no-repeat;
                background-size:60% 60%;
                background-color: #efefef;
            }
        }
    }
    .vipInfowrap{
        padding:0 ${r(12)};
        padding-bottom:${r(16)};
    }
    .vipInfo{
        width:100%;
        height:${r(50)};
        padding:${r(15)} ${r(12)};
        background-image: linear-gradient(-4deg,#1e1e1e,#464542);
        border-radius:4px;
        span:nth-child(1){
            padding:${r(2)} ${r(4)};
            background-image: linear-gradient(0deg,#f5dea9,#f8d583);
            margin-right:${r(10)};
            border-radius:2px;
        }
        span:nth-child(2){
            padding:${r(2)};
            color:#f8d583;
            margin-right:${r(10)};
            font-size:${r(14)};
        }
        span:nth-child(3){
            color:#f8d583;
            font-size:${r(12)};
        }
        .iconfont{
            color:#f8d583;
            font-size:${r(13)};
            margin-left:${r(4)}
        }
    }
    .bg{
        width:100%;
        height:${r(14)};
        background-color: #f0f0f0;
    }
`

export default CityandDate