// 这是首页组件
import React, { Component } from "react"
import {connect} from "react-redux"

//导入获取热门城市数据的dispatch
import {getHotCity} from "./actionCreator"


class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div id="home">
                {this.props.hot_City + "1"}
                主页
            </div>
        )
    }
    componentDidMount(){
        this.props.getHotCitydata()
    }
}

const mapStateToProps = (state) => {
    return {
        hot_City: state.hot_City
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        //这是触发获取热门城市的方法:
        getHotCitydata(){
            dispatch(getHotCity(dispatch))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)