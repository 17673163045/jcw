// 这是主页的reducer,定义主页获取得到的数据

//引入immutable类型数据,转化state为immutable类型
import immutable from "immutable"
const defaultState = immutable.fromJS({
    hot_City: "",  //城市选择模块的热门城市数据
    city_List: "", // 城市选择模块展示所有城市数据
    userSelectCity: "全国"  // 用户选择的城市
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
        //用户选择的城市数据
        case "GET_USERSELECT_CITY":
            let userSelectCity = action.val;
            return state.update("userSelectCity", (val) => val = userSelectCity)
    }
    return state;
}