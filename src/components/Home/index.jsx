// 这是首页组件
import React, { Component } from "react"
import { connect } from "react-redux"
import immutable from "immutable"

import TopSearch from "./TopSearch" // 导入顶部搜索条
import { TopBanner, ClassifyList, Advert, OperationList} from "@/components/Home/ClassifyHome"
import { getClassifyHome } from "@/components/Home/actionCreator"

// 展开this.props的数据:
const mapStateToProps = (state) => {
    return {
        userSelectCity: state.getIn(["HomeReducer", "userSelectParams", "name"]) || "全国",//用户选择的城市
        userSelectParams: state.getIn(["HomeReducer", "userSelectParams"]).toJS(),// 用户选择城市的请求参数
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

class Home extends Component {
    componentDidMount() {
        console.log(this.props.userSelectParams)
        this.props.getClassifyHomeData(this.props.userSelectParams)
    }
    render() {
        if(!this.props.ClassifyHomeData) return null;
            let bannerList = this.props.ClassifyHomeData.data.data.slide_list
            let adList = this.props.ClassifyHomeData.data.data.ad_list
            let operationList = this.props.ClassifyHomeData.data.data.operation_list
            console.log(operationList)
        return (
            <div id="home">
                <TopSearch></TopSearch>
                <TopBanner bannerList={bannerList}></TopBanner>
                <ClassifyList></ClassifyList>
                <Advert adList={adList}></Advert>
                <OperationList operationList={operationList}></OperationList>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)