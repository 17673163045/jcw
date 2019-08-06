// 这是封面组件,配合可复用的轮播组件使用
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class Cover extends PureComponent {
    render() {
        if(!this.props.CoverData) return null
        return (
            <Wrap CoverColor={this.props.CoverColor}>
                <div className="leftImg">
                    <img src={this.props.CoverData.pic} alt="" />
                </div>
                <div className="rightContent">
                    <p className="time">
                        <span className="date">{this.props.CoverData.date}</span>
                        <span className="week">{this.props.CoverData.week}</span>
                    </p>
                    <p className="mainContent">{this.props.CoverData.schedular_name}</p>
                    <p className="place">
                        <span className="city">{this.props.CoverData.city_name}</span>
                        <span className="line">|</span>
                        <span className="cityPlace">{this.props.CoverData.venue_name}</span>
                    </p>
                </div>
            </Wrap>
        )
    }
}

//样式
const Wrap = styled.div`
    display:flex;
    width:100%;
    height:${r(176)};
    padding:${r(12)};
    background-color:${(props => (props.CoverColor || "#ccc"))};
    .leftImg{
        width:${r(110)};
        border-radius:4px;
        border:1px solid #c7c7c7;
        img{
            border-radius:4px;
            height:100%;
            width:100%;
        }
    }
    .rightContent{
        flex:1;
        color:#fff;
        padding:${r(10)};
        .time{
            padding:${r(14)} 0;
            .date{
                font-size:${r(16)};
                font-weight:bold;
            }
            .week{
                font-size:${r(12)};
                margin-left:4px;
            }
        }
        .mainContent{
            word-break:break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size:${r(16)};
            font-weight:bolder;
        }
        .place{
            padding:${r(10)} 0;
            .line{
                margin:0 ${r(4)}
            }
        }
    }
`

export default Cover
