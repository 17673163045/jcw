import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"

import Toptitle from "@/components/Detail/TopSchedule/Toptitle"

const r = globalFns.r //计算rem的函数

class TopSchedule extends PureComponent {
    render() {
        return (
            <Wrap>
                <img className="cover_bg" src={this.props.TopScheduleData.pic} alt="" />
                <div className="cover">
                    <Toptitle></Toptitle>
                    <div className="content">
                        <div className="leftImg">
                            <img src={this.props.TopScheduleData.pic} alt=""/>
                        </div>
                        <div className="rightcontent">
                            <p className="showName">{this.props.TopScheduleData.show_name}</p>
                            <p className="rangPrice">￥{this.props.TopScheduleData.price_range}</p>
                        </div>
                    </div>
                </div>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    overflow:hidden;
    position:relative;
    width:${r(375)};
    height:${r(232)};
    margin:0 auto;
    .cover_bg{
        width:100%;
        height: auto;
        background-color: #b8abab;
        -webkit-filter: blur(.53333rem);
        filter: blur(.53333rem);
    }
    .cover{
        position:absolute;
        z-index:9999;
        top:0;
        left:0;
        background-color:rgba(255,255,255,0.1);
        .content{
            padding:${r(20)} ${r(12)};
            display:flex;
            .leftImg{
                height:${r(150)};
                width:${r(110)};
                border-radius:4px;
                img{
                    width:100%;
                    height:100%;
                    border-radius:4px;
                }
            }
            .rightcontent{
                flex:1;
                margin-left:${r(16)};
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                .showName{
                    font-size:${r(20)};
                    font-weight:bold;
                    color:#fff;
                }
                .rangPrice{
                    font-size:${r(16)};
                    font-weight:bold;
                    color:#fff;
                }
            }
        }
    }
`

export default TopSchedule