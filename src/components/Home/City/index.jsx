// 这是城市整体的组件
import React, { PureComponent} from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import HotCity from "./HotCity";// 引入热门城市组件
import CityList from "./CityList"; // 引入所有城市展示组件
import SelectCityTitle from "./SelectCityTitle" // 引入城市选择的标题组件,包含返回主页的逻辑
import CurrentSelect from "./CurrentSelect" // 引入当前城市的组件,显示作用,根据用户选择改变

//导入获取城市数据的dispatch异步函数
import { getHotCity, getCityList } from "@/components/Home/actionCreator"

// 展开this.props的数据:
const mapStateToProps = (state) => {
    return {
        hot_City: state.getIn(["HomeReducer", "hot_City"]),//城市组件的热门城市数据
        city_List: state.getIn(["HomeReducer", "city_List"]) // 城市组件的所有城市列表
    }
}

//展开方法:
const mapDispatchToProps = (dispatch) => {
    return {
        //这是触发获取热门城市的方法:
        getHotCityData() {
            dispatch(getHotCity(dispatch))
        },
        getCityListData() {
            dispatch(getCityList(dispatch))
        }
    }
}

class City extends PureComponent {
    componentDidMount() {
        this.props.getHotCityData();  // 获取城市组件的热门城市数据
        this.props.getCityListData(); //  获取城市组件的所有城市展示数据
    }
    render() {
        return (
            <Wrap>
                <SelectCityTitle></SelectCityTitle>
                <CurrentSelect></CurrentSelect>
                <HotCity hotCityList={this.props.hot_City} ></HotCity>
                <CityList AllCityList={this.props.city_List}></CityList>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    display:flex;
    flex-direction:column;
`
export default connect(mapStateToProps, mapDispatchToProps)(City)