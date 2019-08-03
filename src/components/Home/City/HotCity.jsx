// 这是热门城市组件
import React, { PureComponent } from "react"
import styled from "styled-components"

class HotCity extends PureComponent {
    constructor() {
        super();
        // this.state = {
        //     renderList: [<CityButton key={0} onClick={this.selectCity.bind(this)}>全国</CityButton>]
        // }
    }
    // selectCity(item){
    //     console.log(item)
    // }
    // componentWillReceiveProps(next){
    //     if (!next.hotCityList) return;
    //     let list = next.hotCityList;
    //     list.map((item) => {
    //         return this.state.renderList.push(
    //             <CityButton key={item.id} onClick={this.selectCity.bind(this, item)}>{item.name}</CityButton>
    //         )
    //     })
    // }
    render() {
        // console.log()
        if (this.props.hotCityList){
            console.log(this.props.hotCityList)
        }else{
            return null;
        }
        return (
            <Wrap>
                <div className="title">热门城市</div>
                <div className="list-wrap">
                    {/* {this.state.renderList} */}
                </div>
            </Wrap>
        )
    }
}

// 样式
const CityButton = styled.div`
    height:38px;
    width:100px;
    background-color:#fff;
    color:#333;
    border:1px solid #e8e8e8;
    border-radius:2px;
    line-height:38px;
    text-align:center;
    background-color:#fff;
    box-shadow:inset 1px 1px 6px #fff,inset -1px -1px 6px #fff;
    margin-right:6px;
    margin-bottom:6px;
`
const Wrap = styled.div`
    font-size:13px;
    display:flex;
    flex-direction:column;
    width:100%;
    padding:12px;
    padding-right:40px;
    background-color:#f2f2f2;
    .title{
        font-size:13px;
        color:#999;
        padding-bottom:12px;
    }
    .list-wrap{
        width:100%;
        height:auto;
        display:flex;
        flex-wrap:wrap;
    }
`
export default HotCity