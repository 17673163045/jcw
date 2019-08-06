// 这是优惠活动的组件,在主页使用
import React, { Component } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class OperationList extends Component {
    render() {
        if (!this.props.operationList) return null
        // 顶部的两个活动部分
        let topList = this.props.operationList.slice(0, 2);
        let topRenderList = [];
        topList.map((item, index) => {
            topRenderList.push(<TopItem key={index} params={item}></TopItem>)
        })
        //底部的三个活动部分
        let bottomList = this.props.operationList.slice(2,5);
        let bottomRenderList = [];
        bottomList.map((item,index)=>{
            bottomRenderList.push(<BottomItem key={index} params={item}></BottomItem>)
        })
        return (
            <Wrap>
                <Top >
                    {topRenderList}
                </Top>
                <Bottom>
                    {bottomRenderList}
                </Bottom>
            </Wrap>
        )
    }
}
//纯组件
//顶部的单个小组件
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
//顶部的单个小组件的样式
const Top_Item = styled.div`
    display:flex;
    padding:${r(20)} ${r(10)} 0;
    width:${r(174)};
    height:${r(90)};
    border-radius:${r(4)};
    background-color:#fff;
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
//底部的单个小组件
const BottomItem = (props)=>{
    return (
        <Bottom_Item>
            <div className="topContent">
                <p className="title">{props.params.name}</p>
                <div dangerouslySetInnerHTML={{ __html: `${props.params.describe}` }} />
            </div>
            <div className="bottomImg">
                <img src={props.params.pic} alt="" />
            </div>
        </Bottom_Item>
    )
}
//底部的单个小组件的样式
const Bottom_Item = styled.div`
    width:${r(114)};
    height:${r(104)};
    border-radius:${r(4)};
    background-color:#fff;
    text-align:center;
    margin-top:${r(6)};
    padding:${r(6)} 0;
    .topContent{
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
    .bottomImg{
        height:${r(50)};
        img{
            height:100%;
        }
    }
`

//样式
const Wrap = styled.div`
    width:${r(355)};
    margin:${r(10)} auto;
    background-color:#ebebeb;
    box-shadow:-4px -4px 10px #ebebeb,4px 4px 10px #ebebeb;
`
const Top = styled.div`
    display:flex;
    justify-content:space-between;
`
const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
`

export default OperationList

