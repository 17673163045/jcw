// 这是主页的reducer,定义主页获取得到的数据

//引入immutable类型数据,转化state为immutable类型
import immutable from "immutable"
const defaultState = immutable.fromJS({
    hot_City: "",  //城市选择模块的热门城市数据
    city_List: "", // 城市选择模块展示所有城市数据
    userSelectParams: "",// 用户选择的城市对应的请求参数,默认是0,全国
    classifyHomeData: "",//首页分类数据
    hotRecommendData: "", //热门演出数据
    flowerShowData: "", //演唱会等数据
    recommendShow: "",//为你推荐的数据
    CurrentPage: "",//用户当前在的模块,首页/剧院/票夹/我的
})
export default (state = defaultState, action) => {
    switch (action.type) {
        // 城市组件的热门城市数据
        case "GET_HOT_CITY":
            let HotCityList = action.val.data.data.hot_city_List;
            return state.update("hot_City", (val) => val = HotCityList);
        // 城市组件的所有城市展示数据
        case "GET_CITY_List":
            let CityList = action.val.data.data;
            return state.update("city_List", (val) => val = CityList);
        //用户选择改变请求参数
        case "CHANGE_PARAMS":
            let userSelectParams = immutable.fromJS(action.val);
            return state.update("userSelectParams", (val) => val = userSelectParams);
        //首页分类的数据
        case "GET_CLASSIFY_HOME":
            let classifyHomeData = action.val;
            return state.update("classifyHomeData", (val) => val = classifyHomeData);
        //热门推荐的数据
        case "GET_HOT_RECOMMEND":
            let hotRecommendData = action.val;
            return state.update("hotRecommendData", (val) => val = hotRecommendData);
        //演唱会,音乐剧等轮播数据
        case "GET_FLOWER_SHOW":
            let flowerShowData = action.val;
            return state.update("flowerShowData", (val) => val = flowerShowData);
        //为你推荐的数据
        case "GET_RECOMMEND_SHOW":
            let recommendShow = action.val;
            return state.update("recommendShow", (val) => val = recommendShow);
        // 用户当前在的模块,
        case "GET_CURRENT_PAGE":
            let currentPage = action.val;
            return state.update("CurrentPage", (val) => val = currentPage)
        default:
            return state;
    }
}