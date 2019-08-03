// 这是首页组件
import React, { Component } from "react"
import { connect } from "react-redux"

import TopSearch from "./TopSearch" // 导入顶部搜索条


// 展开this.props的数据:
const mapStateToProps = (state) => {
    return {
        // userSelectCity: state.getIn(["HomeReducer", "hot_City"]),//城市组件的热门城市数据
    }
}

//展开方法:
const mapDispatchToProps = (dispatch) => {
    return {
        //这是触发获取用户选择的城市的方法:
    }
}

class Home extends Component {
    constructor() {
        super();
    }
    componentWillMount() {
    }
    render() {
        return (
            <div id="home">
                <TopSearch></TopSearch>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)