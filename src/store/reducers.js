 // 这是总的reducers数据仓库
import { combineReducers } from 'redux-immutable'      //将最外层转成Map对象
import HomeReducer from "@/components/Home/home_reducer"
import TheatreReducer from "@/components/Theatre/theatre_reducer"
import ClassifyReducer from "@/components/Classify/classify_reducer"
import DetailReducer from "@/components/Detail/detail_reducer"
export default combineReducers({
    HomeReducer,
    TheatreReducer,
    ClassifyReducer,
    DetailReducer
})
 