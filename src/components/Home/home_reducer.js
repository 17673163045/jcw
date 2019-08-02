// 这是主页的reducer,定义主页获取得到的数据

//引入immutable类型数据,转化state为immutable类型
import immutable from "immutable"
const defaultState = immutable.fromJS({
    hot_City: "",  //城市选择模块的热门城市数据
    city_List: "", // 城市选择模块展示所有城市数据
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_HOT_CITY":
            return state.update("hot_City", action.val);
            break;
    }
    return state;
}