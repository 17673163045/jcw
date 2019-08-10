// 这是剧院组件
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
import { connect } from "react-redux"

//导入组件:
//导入底部导航切换组件
import BottomToggle from "@/components/PublicCom/BottomToggle"
//导入标题组件
import TheatreTitle from "@/components/Theatre/TheatreTitle"
//导入剧院详情组件
import TheatreItem from "@/components/Theatre/TheatreItem"

//导入方法
import { getTheatreList } from "./actionCreator"

const r = globalFns.r //计算rem的函数

//展开this.props的数据state
const mapStateToProps = (state) => {
    return {
        TheatreListData: state.getIn(["TheatreReducer", "theatreIndexData"])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTheatreListData(page) {
            dispatch(getTheatreList(dispatch, page))
        }
    }
}
class Theatre extends PureComponent {
    componentDidMount() {
        this.props.getTheatreListData(1)
    }
    render() {
        if (!this.props.TheatreListData) return null;
        return (
            <Wrap>
                <TheatreTitle></TheatreTitle>
                <Section>
                    {
                        this.props.TheatreListData.map((item, index) => (
                            <TheatreItem TheatreListData={item} key={index}></TheatreItem>
                        ))
                    }
                </Section>
                <footer>
                    <BottomToggle></BottomToggle>
                </footer>
            </Wrap >
        )
    }
}


// 样式
const Wrap = styled.div`
    display:flex;
     flex-direction:column;
     footer{
        height:${r(50)}
     }
`
const Section = styled.section`
    flex:1;
`

export default connect(mapStateToProps, mapDispatchToProps)(Theatre)