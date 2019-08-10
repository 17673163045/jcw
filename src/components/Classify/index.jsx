// 这是分类组件
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
import { connect } from "react-redux"

//导入组件:
//导入顶部标题组件
import Toptitle from "@/components/Classify/Toptitle"
import TopBanner from "@/components/Classify/TopBanner"
import ClassifyShowList from "@/components/Classify/ClassifyShowList"
//导入方法:
import { getClassifyList, getClassifyRecommendShow, getClassifyCategory } from "@/components/Classify/actionCreator"

const r = globalFns.r //计算rem的函数

//展开this.props的数据state
const mapStateToProps = (state) => {
    return {
        ClassifyListData: state.getIn(["ClassifyReducer", "ClassifyList"]),
        ClassifyRecommendShow: state.getIn(["ClassifyReducer", "classifyRecommend"]),
        category: state.getIn(["ClassifyReducer", "classifycategory"]),//分类标记
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //轮播分类标题数据的方法
        getClassifyListData() {
            dispatch(getClassifyList(dispatch))
        },
        // 获取推荐数据的方法
        getClassifyRecommendShow(category, city_id, page,callback) {
            dispatch(getClassifyRecommendShow(dispatch, category, city_id, page, callback))
        },
        // 这是改变分类标记的方法
        getClassifyCategory(category) {
            dispatch(getClassifyCategory(dispatch, category))
        }
    }
}
class Classify extends PureComponent {
    componentWillMount() {
        //获取分类轮播标题数据
        this.props.getClassifyListData();
        //初始化页面数据,根据category, city_id.请求数据  page默认为1
        let city_id = JSON.parse(window.sessionStorage.getItem("userSelect")).id;
        let category = window.localStorage.getItem("category") || "0";
        this.props.getClassifyRecommendShow(category,city_id, 1)
    }
    render() {
        if (!this.props.ClassifyListData) return null;
        if (!this.props.ClassifyRecommendShow) return null;
        let bannerList = this.props.ClassifyListData;
        if (!bannerList[0].flag) {
            bannerList.unshift(
                { name: "全部", flag: "all", category_id: "0" }
            )
        }
        //推荐展示部分的数据
        let ClassifyRecommendShow = this.props.ClassifyRecommendShow.data.data.list
        return (
            <Wrap>
                <div className="topTitle">
                    <Toptitle></Toptitle>
                </div>
                <div className="topBanner">
                    <TopBanner
                        bannerList={bannerList}
                        getClassifyCategory={this.props.getClassifyCategory}
                        getClassifyRecommendShow={this.props.getClassifyRecommendShow}
                    >
                    </TopBanner>
                </div>
                <ClassifyShowList
                    category={this.props.category}
                    ClassifyRecommendShow={ClassifyRecommendShow}
                    getClassifyRecommendShow={this.props.getClassifyRecommendShow}
                >
                </ClassifyShowList>
            </Wrap >
        )
    }
}


// 样式
const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    .topTitle{
        height:${r(40)}
    }
    .topBanner{
        height:${r(40)}
    }
`

export default connect(mapStateToProps, mapDispatchToProps)(Classify)