// 这是主页的reducer,定义主页获取得到的数据

//引入immutable类型数据,转化state为immutable类型
import immutable from "immutable"
const defaultState = immutable.fromJS({
    hot_City: "",  //城市选择模块的热门城市数据
    city_List: "", // 城市选择模块展示所有城市数据
    // 用户选择的城市对应的请求参数,默认是0,全国
    userSelectParams: immutable.fromJS({
        city_id: 0,
        abbreviation: "",
        version: "6.0.3",
        referer: 2
    }),
    classifyHomeData: ""
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
        case "GET_CLASSIFY_HOME":
            let classifyHomeData = action.val;
            return state.update("classifyHomeData", (val) => val = classifyHomeData)
    }
    return state;
}