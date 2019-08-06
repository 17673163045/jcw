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

//请求首页的热门演出数据
export const getHotRecommend = (dispatch,cityId) =>{
    return ()=>{
        request({
            method:"get",
            url:"/home/index/getHotsRecommendList",
            params:{
                city_id: cityId,
                version:"6.0.3",
                referer:"2"
            }
        }).then((res)=>{
            dispatch({ type:"GET_HOT_RECOMMEND",val:res})
        })
    }
}

//请求演唱会,音乐剧,儿童剧等分类数据
export const getFlowerShow = (dispatch,cityId) =>{
    return ()=>{
        request({
            method:"get",
            url:"/home/index/getFloorShow",
            params:{
                city_id: cityId,
                version: "6.0.3",
                referer: "2"
            }
        }).then((res)=>{
            dispatch({ type:"GET_FLOWER_SHOW",val:res})
        })
    }
}

//请求为你推荐的数据
export const getRecommendShow = (dispatch,page) =>{
    return ()=>{
        request({
            method:"get",
            url:"/home/index/getRecommendShow",
            params:{
                cityAdd:"",
                page: page,
                version:"6.0.3",
                referer:"2"
            }
        }).then((res)=>{
            dispatch({type:"GET_RECOMMEND_SHOW",val:res})
        })
    }
}