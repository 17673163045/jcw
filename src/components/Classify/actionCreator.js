// 导入request(axios),已配置公共部分
import request from "@/core/http"

//暴露请求分类标题的数据的dispatch函数
export const getClassifyList = (dispatch) => {
    return () => {
        request({
            method: "get",
            url: "apm/Search/getShowCategory",
            params:{
                version:"6.0.3",
                referer:"2"
            }
        }).then((res) => {
            dispatch({ type: "GET_CLASSIFY_LIST_DATA", val: res })
        })
    }
}
//请求分类下面的展示部分数据,需要传入category,城市id,页面数
export const getClassifyRecommendShow = (dispatch, category, city_id,page,callback) => {
    return ()=>{
        request({
            method:"get",
            url:"apm//Search/getShowList",
            params:{
                category,
                city_id,
                page,
                keywords:"",
                version:"6.0.3",
                referer:"2"
            }
        }).then((res)=>{
            dispatch({type:"GET_CLASSIFY_RECOMMENDLIST",val:res});
            if (typeof callback === "function"){
                callback(res)
            }
        })
    }
}
// 获取分类标记,根据标记加载对应数据
export const getClassifyCategory = (dispatch,category)=>{
    return ()=>{
        dispatch({ type: "GET_CLASSIFY_CATEGORY", val: category})
    }
}