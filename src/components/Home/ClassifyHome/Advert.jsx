import React,{Component} from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数


class Advert extends Component {
    
    render(){
        if(!this.props.adList) return null;
        return (
            <Wrap>
                <div>
                    <img src={`${this.props.adList.advert1[0].pic}`} />
                </div>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    height:auto;
    width:${r(375)};
    margin:0 auto;
    div{
        padding:${r(12)};
        img{
            width:100%;
        }
    }
    
`

export default Advert