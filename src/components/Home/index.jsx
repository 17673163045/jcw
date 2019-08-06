// 这是首页组件
import React, { PureComponent } from "react"
import { connect } from "react-redux"
import immutable from "immutable"

import TopSearch from "./TopSearch" // 导入顶部搜索条
import { TopBanner, ClassifyList, Advert, OperationList } from "@/components/Home/ClassifyHome"
import { getClassifyHome } from "@/components/Home/actionCreator"

// 展开this.props的数据:
const mapStateToProps = (state) => {
    return {
        userSelectCity: state.getIn(["HomeReducer", "userSelectParams", "name"]) || "全国",//用户选择的城市
        userSelectParams: state.getIn(["HomeReducer", "userSelectParams"]),// 用户选择城市的请求参数
        ClassifyHomeData: state.getIn(["HomeReducer", "classifyHomeData"])
    }
}

//展开方法:
const mapDispatchToProps = (dispatch) => {
    return {
        //这是触发获取首页classifyHome的方法:
        getClassifyHomeData(userSelectParams) {
            dispatch(getClassifyHome(dispatch, userSelectParams))
        }
    }
}

class Home extends PureComponent {
    componentDidMount() {
        //根据用户选择的城市渲染页面,并且存到localstorage
        let userSelect = window.localStorage.getItem("userSelect");
        if (!(this.props.userSelectParams === "")) {
            this.props.getClassifyHomeData(this.props.userSelectParams.toJS())
            window.localStorage.setItem("userSelect", JSON.stringify(this.props.userSelectParams));
        } else {
            if (userSelect) {
                this.props.getClassifyHomeData(JSON.parse(userSelect));
            } else {
                let userSelectParams = {
                    id: '0',
                    Abbreviation: "",
                }
                this.props.getClassifyHomeData(userSelectParams)
            }
        }
    }
    render() {
        if (!this.props.ClassifyHomeData) return null;
        //轮播图数据
        let bannerList = this.props.ClassifyHomeData.data.data.slide_list
        //广告数据
        let adList = this.props.ClassifyHomeData.data.data.ad_list
        //活动数据
        let operationList = this.props.ClassifyHomeData.data.data.operation_list
        return (
            <div id="home">
                {/* 顶部搜索条 */}
                <TopSearch userSelectCity={this.props.userSelectCity}></TopSearch>
                {/* 顶部轮播图 */}
                <TopBanner bannerList={bannerList}></TopBanner>
                {/* 分类部分组件 */}
                <ClassifyList></ClassifyList>
                {/* 广告部分组件 */}
                <Advert adList={adList}></Advert>
                {/* 活动部分组件 */}
                <OperationList operationList={operationList}></OperationList>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)