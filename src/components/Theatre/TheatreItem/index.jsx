import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"

import CommonBanner from "@/components/Theatre/CommonBanner"


const r = globalFns.r //计算rem的函数

class TheatreItem extends PureComponent {
    render() {
        return (
            <Wrap>
                <div className="showInfo">
                    <div className="leftImg">
                        <img src={this.props.TheatreListData.pic} alt=""/>
                    </div>
                    <div className="rightContent">
                        <div className="content">
                            <p className="theatreName">{this.props.TheatreListData.name}</p>
                            <p className="theatreInfo">{this.props.TheatreListData.count}场演出</p>
                        </div>
                        <div className="morebtn">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
                <CommonBanner bannerList={this.props.TheatreListData.showList}></CommonBanner>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    padding:${r(14)};
    margin:${r(20)} auto 0;
    width:${r(345)};
    height:${r(298)};
    border:1px solid #e3e3e3;
    border-radius:4px;
    background-color: #fff;
    box-shadow:1px 1px 6px #ececec,-1px -1px 6px #ececec;
    .showInfo{
        width:100%;
        flex:1;
        padding:${r(4)} 0;
        display:flex;
        .leftImg{
            height:${r(50)};
            width:${r(50)};
            margin-right:${r(6)};
            border-radius:4px;
            img{
                border-radius:4px;
                height:100%;
                width:100%;
            }
        }
        .rightContent{flex:1;position:relative;}
        .content{
            float:left;
            .theatreName{
                font-size:${r(18)};
                font-weight:bold;
                padding:${r(4)} 0;
            }
            .theatreInfo{
                color:#6d6d6d;
            }
        }
        .morebtn{
            position:absolute;
            right:0;
            top:50%;
            transform:translateY(-50%);
            padding:${r(4)};
            .dot{
                display:inline-block;
                vertical-align:middle;
                height:${r(4)};
                width:${r(4)};
                background-color: #666;
                border-radius:50%;
                margin-left:${r(2)}
            }
        }
    }
`

export default TheatreItem