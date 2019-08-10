// 导入request(axios),已配置公共部分
import request from "@/core/http"

//暴露请求剧院首页的数据的dispatch函数
export const getTheatreList = (dispatch,page) => {
    return () => {
        request({
            method: "get",
            url: "apis/theatre/index/getTheatreList",
            params:{
                page:page,
                version:"6.0.3",
                referer:"2"
            }
        }).then((res) => {
            dispatch({ type: "GET_THEATRE_INDEX_DATA", val: res })
        })
    }
}