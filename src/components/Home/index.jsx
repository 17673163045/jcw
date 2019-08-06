// 这是首页组件
import React, { PureComponent } from "react"
import { connect } from "react-redux"
// import immutable from "immutable"

//导入组件:
import TopSearch from "./TopSearch" // 导入顶部搜索条
//导入顶部轮播,分类,广告,活动组件
import { TopBanner, ClassifyList, Advert, OperationList } from "@/components/Home/ClassifyHome"
//导入可复用轮播图组件
import CommonBanner from "@/components/Home/CommonBanner"
//导入为你推荐演出的组件
import RecommendShow from "@/components/Home/RecommendShow"

//导入方法:
import { getClassifyHome, getHotRecommend, getFlowerShow, getRecommendShow } from "@/components/Home/actionCreator"

// 展开this.props的数据:
const mapStateToProps = (state) => {
    return {
        userSelectCity: state.getIn(["HomeReducer", "userSelectParams", "name"]) || "全国",//用户选择的城市
        userSelectParams: state.getIn(["HomeReducer", "userSelectParams"]),// 用户选择城市的请求参数
        ClassifyHomeData: state.getIn(["HomeReducer", "classifyHomeData"]),//首页分类数据
        hotRecommend: state.getIn(["HomeReducer", "hotRecommendData"]),//首页热门演出数据
        flowerShow: state.getIn(["HomeReducer", "flowerShowData"]),//首页音乐剧,演唱会等数据
        RecommendShow: state.getIn(["HomeReducer", "recommendShow"]), //为你推荐的数据
    }
}

//展开方法:
const mapDispatchToProps = (dispatch) => {
    return {
        //这是触发获取首页classifyHome的方法:
        getClassifyHomeData(userSelectParams) {
            dispatch(getClassifyHome(dispatch, userSelectParams))
        },
        //这是触发获取热门演出数据的方法:
        getHotRecommendData(cityId) {
            dispatch(getHotRecommend(dispatch, cityId))
        },
        //这是触发获取音乐剧,儿童剧等数据的方法:
        getFlowerShowData(cityId) {
            dispatch(getFlowerShow(dispatch, cityId))
        },
        //这是触发获取为你推荐的数据
        getRecommendShowData(page) {
            dispatch(getRecommendShow(dispatch, page))
        }
    }
}

class Home extends PureComponent {
    componentDidMount() {
        //根据用户选择的城市渲染页面,并且存到localstorage
        //获取storage的用户选择城市信息,可能为空
        let userSelect = window.sessionStorage.getItem("userSelect");
        //如果用户选择了城市
        if (!(this.props.userSelectParams === "")) {
            //触发获取数据的方法,渲染页面
            this.props.getClassifyHomeData(this.props.userSelectParams.toJS())
            //保存用户选择到storage
            window.sessionStorage.setItem("userSelect", JSON.stringify(this.props.userSelectParams));
        } else {
            //如果用户还没选择,但是storage里面有值,直接触发获取数据
            if (userSelect) {
                this.props.getClassifyHomeData(JSON.parse(userSelect));
            } else {
                //如果用户还没选择,并且storage没有值,设置默认请求全国数据
                let userSelectParams = {
                    id: '0',
                    Abbreviation: "",
                    name: "全国",
                    is_city: "0"
                }
                this.props.getClassifyHomeData(userSelectParams);
                window.sessionStorage.setItem("userSelect", JSON.stringify(userSelectParams));
            }
        }
        //根据城市id获取热门演出数据
        let cityId = JSON.parse(window.sessionStorage.getItem("userSelect")).id
        this.props.getHotRecommendData(cityId)

        //根据城市id获取演唱会,音乐剧,儿童剧等数据
        this.props.getFlowerShowData(cityId)

        //根据用户下拉,加载第page页的为你推荐数据
        this.props.getRecommendShowData(1)
    }
    render() {
        if (!this.props.ClassifyHomeData) return null;
        if (!this.props.hotRecommend) return null;
        if (!this.props.flowerShow) return null;
        if (!this.props.RecommendShow) return null;
        //城市选择数据
        let userSelectCity = JSON.parse(window.sessionStorage.getItem("userSelect") || '{"name":"全国"}').name
        //轮播图数据
        let bannerList = this.props.ClassifyHomeData.data.data.slide_list
        //广告数据
        let adList = this.props.ClassifyHomeData.data.data.ad_list
        //活动数据
        let operationList = this.props.ClassifyHomeData.data.data.operation_list
        //热门演出数据
        let hotRecommend = this.props.hotRecommend.data.data.hots_show_list;
        //演唱会,音乐剧等的数据
        let flowerShowData = this.props.flowerShow.data.data;
        flowerShowData = JSON.stringify(flowerShowData) === "{}" ? [] : flowerShowData
        console.log(flowerShowData)
        //为你推荐的数据
        let recommendShow = this.props.RecommendShow.data.data.recommend_show_list
        return (
            <div id="home">
                {/* 顶部搜索条 */}
                <TopSearch userSelectCity={userSelectCity}></TopSearch>
                {/* 顶部轮播图 */}
                <TopBanner bannerList={bannerList}></TopBanner>
                {/* 分类部分组件 */}
                <ClassifyList></ClassifyList>
                {/* 广告部分组件 */}
                <Advert adList={adList}></Advert>
                {/* 活动部分组件 */}
                <OperationList operationList={operationList}></OperationList>
                {/* 热门演出部分 */}
                {JSON.stringify(hotRecommend) !== "[]" ? (
                    <CommonBanner
                        bannerList={hotRecommend}
                        title={"热门演出"}
                    >
                    </CommonBanner>) : null}
                {/* 演唱会部分 */}
                {
                    flowerShowData.map((item, index) => (
                        <CommonBanner
                            key={index}
                            bannerList={item.list.slice(1)} //轮播数据
                            title={item.title} //标题
                            fontSize="16" //描述部分字体大小
                            isPrice={true} //需要价格组件?
                            isCover={true} //需要封面组件?
                            CoverColor={"rgb(98, 88, 78)"} //封面颜色
                            CoverData={item.list[0]}
                        ></CommonBanner>
                    ))
                }
                <RecommendShow recommendShow={recommendShow}></RecommendShow>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)