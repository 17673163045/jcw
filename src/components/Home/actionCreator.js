// 导入request(axios),已配置公共部分
import request from "@/core/http"

// 请求城市选择模块的热门城市数据
export const getHotCity = (dispatch)=>{
    return ()=>{
        request({
            method:"get",
            url:"/city/city/getHotCityList?version=6.0.1&referer=2"
        }).then((res)=>{
            dispatch({ type:"GET_HOT_CITY",val:res})
        })
    }
}