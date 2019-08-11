// 导入request(axios),已配置公共部分
import request from "@/core/http"

// 请求节目安排详情数据,需要传入schedular_id发送请求
export const getScheduleInfo = (dispatch,schedular_id) => {
    return () => {
        request({
            method: "get",
            url: "apis/Schedule/Schedule/getScheduleInfo",
            params: {
                schedular_id,
                version: "6.0.3",
                referer:"2"
            }
        }).then((res) => {
            dispatch({type:"GET_SCHEDULE_INFO",val:res})
        })
    }
}