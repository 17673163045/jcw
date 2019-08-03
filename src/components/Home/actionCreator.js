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

// 请求城市选择模块的所有城市展示数据
export const getCityList = (dispatch) => {
    return () => {
        request({
            method: "get",
            url: "/city/city/getSortedCityList?version=6.0.1&referer=2"
        }).then((res) => {
            dispatch({ type: "GET_CITY_List", val: res })
        })
    }
}

//请求首页的数据的dispatch函数,由用户选择的城市动态请求,需要传入请求参数params
export const getHomeData = (dispatch,params) =>{
    return ()=>{
        request({
            method:"get",
            url:"/home/index/getClassifyHome",
            params:{
                city_id:params.city_id,
                abbreviation: params.abbreviation,
                version:"6.0.1",
                referer:"2"
            }
        })
    }
}