// 这是所有城市展示的组件
import React, { PureComponent } from "react"
import styled from "styled-components"

class CityList extends PureComponent {
    // constructor() {
    //     super();
    //     this.state = {
    //         renderList: []
    //     }
    // }
    // componentWillReceiveProps(next){
    //     if (!next.AllCityList) return;
    //     let listObj = next.AllCityList;
    //     for (var key in listObj) {
    //         this.state.renderList.push(<ENCity key={listObj[key].id}>{key}</ENCity>)
    //         listObj[key].list.map((item) => {
    //             this.state.renderList.push(<CityItem className="city-item" key={item.id}>{item.name}</CityItem>)
    //         })
    //     }
    // }
    render() {
        return (
            <Wrap>
                hahahahahah
                {/* {this.state.renderList} */}
            </Wrap>
        )
    }
}

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
// 首字母标题的组件
const ENCity = styled.div`
    width:100%;
    height:30px;
    line-height:30px;
    color:#999;
    background-color:#f2f2f2;
    padding:0 12px;
    padding-right:40px;
`
// 展示每条城市的组件
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