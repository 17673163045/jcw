// 这是优惠活动的组件,在主页使用
import React,{Component} from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class OperationList extends Component {
    render(){
        if(!this.props.operationList) return null
        let topRenderList = this.props.operationList.slice(0,2);
        console.log(topRenderList[0].describe)
        return (
            <Wrap>
                <Top >
                    <div dangerouslySetInnerHTML={{__html: `${topRenderList[0].describe}`}}/>
                </Top>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    width:${r(375)};
    margin:0 auto;
    padding:0 ${r(12)}
`
const Top = styled.div`
    display:flex;
`

export default OperationList

