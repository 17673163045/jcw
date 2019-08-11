import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"

const r = globalFns.r //计算rem的函数

class VipInfo extends PureComponent {
    render() {
        let VipInfoData = this.props.VipInfoData;
        return (
            <Wrap>
                <div className="vip main">
                    <span className="title">VIP+</span>
                    <span className="maohao">:</span>
                    <span className="info">V+会员享<span>国内免邮&nbsp;+&nbsp;双倍积分</span></span>
                    <span className="iconfont icon-jiantou"></span>
                </div>
                <div className="tips main">
                    <span className="title">入&nbsp;&nbsp;&nbsp;场</span>
                    <span className="maohao">:</span>
                    <span className="tipsinfo">{VipInfoData.tips}</span>
                </div>
                <div className="support main">
                    <span className="title">支&nbsp;&nbsp;&nbsp;持</span>
                    <span className="maohao">:</span>
                    <span className="supportinfo">{VipInfoData.support}</span>
                </div>
                <p className="bg"></p>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    width:${r(375)};
    margin:0 auto;
    .main{
        padding:0 ${r(12)};
        height:${r(56)};
        line-height:${r(56)};
        >span{
            display:inline-block
        }
        .title{
            width:${r(44)};
            font-size:${r(14)};
            color:#a4a4a4;
        }
        .maohao{
            font-size:${r(14)};
            font-weight:bold;
            color:#b8b8b8;
            margin-right:${r(10)};
        }
    }
    .main+.main{
        border-top:1px solid #e0e0e0;
    }
    .vip{
        .info{
            color:#222;
            font-size:${r(15)};
            span{
                margin-left:${r(6)};
                color:#f40;
                font-size:${r(14)};
            }
        }
        .iconfont{
            float:right;
            color:#999;
        }
    }
    .tips{
        .tipsinfo{
            color:#222;
            font-size:${r(15)};
        }
    }
    .support{
        .supportinfo{
            color:#ccc;
            font-size:${r(12)}
        }
    }
    .bg{
        width:100%;
        height:${r(14)};
        background-color: #f0f0f0;
    }
`

export default VipInfo