// 这是热门城市组件
import React, { PureComponent } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
//引入触发改变城市请求参数的dispatch函数
import { changeParams } from "@/components/Home/actionCreator"
// 展开数据
const mapStateToprops = () => {
    return {}
}

//展开方法
const mapDispatchToProps = (dispatch) => {
    return {
        //这是选择城市后改变store里的请求参数方法
        changeParams(item) {
            dispatch(changeParams(dispatch, item))
        }
    }
}

class HotCity extends PureComponent {
    render() {
        if (!this.props.hotCityList) return null;
        //渲染热门城市的列表
        let renderList = [];
        let list = [{
            id: 0,
            name: "全国",
            is_city: 0,
            Abbreviation: ""
        }]
        list = list.concat(this.props.hotCityList);
        //循环列表
        list.map((item) => {
            return renderList.push(
                <CityButton key={item.id} onClick={this.selectCity.bind(this, item)}>{item.name}</CityButton>
            )
        })
        return (
            <Wrap>
                <div className="title">热门城市</div>
                <div className="list-wrap">
                    {renderList}
                </div>
            </Wrap>
        )
    }
    // 点击事件,传入item(城市信息),点击修改城市,首页的数据发生改变
    selectCity(item) {
        this.props.changeParams(item);
        window.localStorage.setItem("selectParams", JSON.stringify(item))
        this.backHome();
    }
    // 返回首页的函数
    backHome() {
        this.props.history.push("/home")
    }
}

// 样式
const CityButton = styled.div`
    height:38px;
    width:100px;
    background-color:#fff;
    color:#333;
    border:1px solid #e8e8e8;
    border-radius:2px;
    line-height:38px;
    text-align:center;
    box-shadow:inset 1px 1px 6px #fff,inset -1px -1px 6px #fff;
    margin-right:6px;
    margin-bottom:6px;
`
const Wrap = styled.div`
    font-size:13px;
    display:flex;
    flex-direction:column;
    width:100%;
    padding:12px;
    padding-right:40px;
    background-color:#f2f2f2;
    .title{
        font-size:13px;
        color:#999;
        padding-bottom:12px;
    }
    .list-wrap{
        width:100%;
        height:auto;
        display:flex;
        flex-wrap:wrap;
    }
`
export default withRouter(connect(mapStateToprops, mapDispatchToProps)(HotCity))