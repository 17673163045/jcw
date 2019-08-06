// 这是优惠活动的组件,在主页使用
import React, { Component } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class OperationList extends Component {
    render() {
        if (!this.props.operationList) return null
        let topList = this.props.operationList.slice(0, 2);
        let topRenderList = [];
        topList.map((item, index) => {
            console.log(item)
            topRenderList.push(<TopItem key={index} params={item}></TopItem>)
        })
        return (
            <Wrap>
                <Top >
                    {topRenderList}
                </Top>
            </Wrap>
        )
    }
}
//纯组件
const TopItem = (props) => {
    return (
        <Top_Item>
            <div className="leftContent">
                <p className="title">{props.params.name}</p>
                <div dangerouslySetInnerHTML={{ __html: `${props.params.describe}` }} />
            </div>
            <div className="rightImg">
                <img src={props.params.pic} alt="" />
            </div>
        </Top_Item>
    )
}

const Wrap = styled.div`
    width:${r(355)};
    margin:${r(10)} auto;
    /* padding:${r(4)} 0; */
    background-color:#ebebeb;
        box-shadow:-4px -4px 10px #ebebeb,4px 4px 10px #ebebeb;
`
const Top = styled.div`
    display:flex;
    justify-content:space-between;
`
const Top_Item = styled.div`

    background-color:#fff;
    padding:${r(20)} ${r(10)} 0;
    width:${r(174)};
    height:${r(90)};
    border-radius:${r(4)};
    display:flex;
    .leftContent{
        width:${r(90)};
        .title{
            font-size:${r(15)};
            font-weight:600;
            color:#000;
            margin-bottom:${r(4)};
        }
        p{
            color:#9d9d9d;
        }
        .c_ff6{
            color:red;
        }
    }
    .rightImg{
        flex:1;
        padding:0 0 0 ${r(8)};
        img{
            width:100%;
            height:auto;
        }
    }
`

export default OperationList

