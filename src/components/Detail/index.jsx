// 详情页组件
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
import { connect } from "react-redux"

import { getScheduleInfo } from "@/components/Detail/actionCreator"

//导入组件
//导入顶部演出详情组件
import TopSchedule from "@/components/Detail/TopSchedule"
//导入演出城市和日期组件
import CityandDate from "@/components/Detail/CityandDate"
import VipInfo from "@/components/Detail/VipInfo"

const r = globalFns.r //计算rem的函数

//展开this.props的数据state
const mapStateToProps = (state) => {
    return {
        scheduleInfo: state.getIn(["DetailReducer", "scheduleInfo"])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // 请求节目安排详情数据,需要传入schedular_id发送请求
        getScheduleInfo(schedular_id) {
            dispatch(getScheduleInfo(dispatch, schedular_id))
        }
    }
}

class Detail extends PureComponent {
    componentWillMount() {
        //获取路由传的schedular_id,请求数据
        let schedular_id = this.props.match.params.id;
        this.props.getScheduleInfo(schedular_id);
    }
    render() {
        if (!this.props.scheduleInfo) return null;
        let scheduleInfo = this.props.scheduleInfo;
        //按需取数据:
        // 顶部演出详情所需数据
        let TopScheduleData = {
            pic: scheduleInfo.static_data.pic, //图片
            price_range: scheduleInfo.static_data.price_range, //价格范围
            show_name: scheduleInfo.static_data.show_name, //演出名称
        };
        // 演出城市日期组件所需数据
        let CityandDateData = {
            date: scheduleInfo.item_list[0].project_time, // 演出日期
            time: scheduleInfo.item_list[0].session_time, // 演出时间点
            city: scheduleInfo.static_data.city.city_name, // 演出城市
            place: scheduleInfo.static_data.venue.venue_name, //演出剧院
            disMaxPrice:scheduleInfo.static_data.discount_max_price, // 最大打折价
        }
        // VIpInfo组件的数据
        let VipInfoData = {
            tips: scheduleInfo.static_data.tips.desc, // 一人一票,凭票入场
            support:scheduleInfo.static_data.support.list[0], // 邮寄支持信息
        }
        return (
            <Wrap>
                <TopSchedule TopScheduleData={TopScheduleData}></TopSchedule>
                <CityandDate CityandDateData={CityandDateData}></CityandDate>
                <VipInfo VipInfoData={VipInfoData}></VipInfo>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    width:100%
`

export default connect(mapStateToProps, mapDispatchToProps)(Detail)