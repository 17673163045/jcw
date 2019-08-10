import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class ClassifyList extends Component {
    constructor() {
        super();
        this.state = {
            itemList: [],
            labelItemList: [
                { title: "演唱会", path: "/classify", query: { caid: 35 }, ImgUrl: "https://image.juooo.com/group1/M00/03/26/rAoKNVzId-KAX9CzAAAG-I4FmRM978.png" },
                { title: "音乐剧", path: "/classify", query: { caid: 79 }, ImgUrl: "https://image.juooo.com/group1/M00/03/26/rAoKNVzIeBeAScMUAAAEhJWVzNA919.png" },
                { title: "舞台剧", path: "/classify", query: { caid: 37 }, ImgUrl: "https://image.juooo.com/group1/M00/03/26/rAoKNVzIeCKAMJQ7AAAGkw6V6Ms752.png" },
                { title: "儿童剧", path: "/classify", query: { caid: 38 }, ImgUrl: "https://image.juooo.com/group1/M00/02/7D/rAoKmVzIeCyAB0jKAAAFxM4aS44306.png" },
                { title: "音乐会", path: "/classify", query: { caid: 36 }, ImgUrl: "https://image.juooo.com/group1/M00/03/26/rAoKNVzIeDSATtBuAAAFFfAO9uw344.png" }
            ]
        }
    }
    componentDidMount() {
        let itemList = [];
        this.state.labelItemList.map((item, index) => {
            itemList.push(
                <LabelItem key={index} >
                    <Link to={item.path}>
                        <Item_ImgContain onClick={this.handGetClassifyCategory.bind(this,item)}>
                            <Item_Img src={item.ImgUrl}></Item_Img>
                        </Item_ImgContain>
                        <Item_Title>{item.title}</Item_Title>
                    </Link>
                </LabelItem>
            )
        });
        this.setState({
            itemList
        })
    }
    handGetClassifyCategory(item){
        window.localStorage.setItem("category",item.query.caid)
        this.props.getClassifyCategory(item.query.caid)
    }
    render() {
        return (
            <Wrap>
                {this.state.itemList}
            </Wrap>
        )
    }
}

//样式
const Wrap = styled.div`
    display:flex;
    width:${r(375)};
    margin:0 auto;
    padding:${r(16)} 0;
`;
const LabelItem = styled.div`
    margin:auto;
    width:${r(51)};
    height:${r(75)};
`
const Item_ImgContain = styled.div`
    width:${r(51)};
    height:${r(51)};
`
const Item_Img = styled.img`
    width:100%;
    height:100%;
`
const Item_Title = styled.div`
    font-size:${r(14)};
    width:100%;
    text-align:center;
    color:#222;
`

export default ClassifyList