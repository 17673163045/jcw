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

// 用户点击改变城市请求参数,item是循环后每个城市按钮带的参数,传给store
export const changeParams = (dispatch,item)=>{
    return ()=>{
        dispatch({ type:'CHANGE_PARAMS',val:item})
    }
}

//请求首页的数据'classifyHome'的dispatch函数,
export const getClassifyHome = (dispatch,userSelect) =>{
    return ()=>{
        request({
            method:"get",
            url:"/home/index/getClassifyHome",
            params:{
                city_id: userSelect.id,
                abbreviation: userSelect.Abbreviation,
                version:"6.0.1",
                referer:"2"
            }
        }).then((res)=>{
            dispatch({type:"GET_CLASSIFY_HOME",val:res})
        })
    }
}