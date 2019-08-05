// 这是所有城市展示的组件
import React, { Component } from "react"
import styled from "styled-components"

class CityList extends Component {
    render() {
        if (!this.props.AllCityList) return null;
        let renderList = [];
        let listObj = this.props.AllCityList;
        for (var key in listObj) {
            renderList.push(<ENCity key={listObj[key].id}>{key}</ENCity>)
            listObj[key].list.map((item) => {
                return renderList.push(<CityItem className="city-item" key={item.id}>{item.name}</CityItem>)
            })
        }
        return (
            <Wrap>
                {renderList}
            </Wrap>
        )
    }
}

//展示所有城市的样式组件
const Wrap = styled.div`
    height:auto;
    width:100%;
    font-size:14px;
    .city-item + .city-item::before{
        content:"";
        display:block;
        width:100%;
        border-bottom:1px solid #e0e0e0;
    }
`
// 首字母标题的样式组件
const ENCity = styled.div`
    width:100%;
    height:30px;
    line-height:30px;
    color:#999;
    background-color:#f2f2f2;
    padding:0 12px;
    padding-right:40px;
`
// 展示每条城市的样式组件
const CityItem = styled.div`
    width:100%;
    height:50px;
    line-height:50px;
    color:#333;
    background-color:#fff;
    padding:0 12px;
    padding-right:40px;
`
export default CityList