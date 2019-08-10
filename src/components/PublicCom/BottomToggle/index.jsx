// 这是底部切换组件
import React, { Component } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
//导入获取用户当前选择模块的方法
import { getCurrentPage } from "@/components/Home/actionCreator"
import { withRouter } from "react-router-dom"

const r = globalFns.r; //计算rem的函数
const indexImg = require("@/images/BottomToggle/indexImg.png")
const indexCurrent = require("@/images/BottomToggle/indexCurrentImg.png")
const theatreImg = require("@/images/BottomToggle/theatreImg.png")
const theatreCurrent = require("@/images/BottomToggle/theatreCurrentImg.png")
const walletImg = require("@/images/BottomToggle/walletImg.png")
const userMyImg = require("@/images/BottomToggle/userMyImg.png")


// 展开this.props的数据:
const mapStateToProps = (state) => {
    return {
        CurrentPage: state.getIn(["HomeReducer", "CurrentPage"])
    }
}

//展开this.props的方法:
const mapDispatchToProps = (dispatch) => {
    return {
        //这是触发获取为你推荐的数据的方法
        getCurrentPage(index) {
            dispatch(getCurrentPage(dispatch, index))
        }
    }
}

class BottomToggle extends Component {
    constructor() {
        super();
        this.state = {
            BottomList: [
                { title: "首页", bgImg: indexImg, CurrentImg: indexCurrent, path: "/home" },
                { title: "剧院", bgImg: theatreImg, CurrentImg: theatreCurrent, path: "/theatre" },
                { title: "分类", bgImg: walletImg, CurrentImg: walletImg, path: "/classify" },
                { title: "我的", bgImg: userMyImg, CurrentImg: userMyImg, path: "/userMy" }
            ]
        }
    }
    render() {
        return (
            <Wrap>
                {this.state.BottomList.map((item, index) => (
                    <div className="navItems" key={index}>
                        <Link to={item.path}>
                            <div className="navItem">
                                <div className="topImg" style={
                                    {
                                        backgroundImage: `url(${this.props.location.pathname === item.path ? item.CurrentImg : item.bgImg})`,
                                        backgroundSize: "100% 100%",
                                        width: `${index === 0 && this.props.location.pathname === item.path ? r(46) : r(30)}`,
                                        height: `${index === 0 && this.props.location.pathname === item.path ? r(46) : r(30)}`
                                    }
                                }>
                                </div>
                                {index === 0 && this.props.location.pathname === item.path ? null : (<div className="title">{item.title}</div>)}
                            </div>
                        </Link>
                    </div>
                ))}
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    height:${r(50)};
    width:${r(375)};
    left:0;
    right:0;
    margin:auto;
    border-top:1px solid #fefefe;
    background-color:#fefefe;
    position:fixed;
    z-index:999;
    bottom:0;
    display:flex;
    justify-content:space-between;
    .navItems{
        flex:1;
        .navItem{
            width:${r(50)};
            height:100%;
            margin:0 auto;
            .topImg{
                width:${r(30)};
                height:${r(30)};
                margin:0 auto;
            }
            .title{
                color:#666;
                text-align:center;
            }
        }
    }
`

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BottomToggle))