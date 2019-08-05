import React, { Component } from "react"
import styled from "styled-components"

function r(x) {
    const baseFont = 37.5;
    return x / baseFont + "rem"
}


class ClassifyList extends Component {
    constructor() {
        super();
        this.state = {
            itemList: [],
            labelItemList: [
                { title: "演唱会", path: "/show/showsLibrary", params: { cid: 0, caid: 35 }, ImgUrl: "https://image.juooo.com/group1/M00/03/26/rAoKNVzId-KAX9CzAAAG-I4FmRM978.png" },
                { title: "音乐剧", path: "/show/showsLibrary", params: { cid: 0, caid: 36 }, ImgUrl: "https://image.juooo.com/group1/M00/03/26/rAoKNVzIeBeAScMUAAAEhJWVzNA919.png" },
                { title: "舞台剧", path: "/show/showsLibrary", params: { cid: 0, caid: 37 }, ImgUrl: "https://image.juooo.com/group1/M00/03/26/rAoKNVzIeCKAMJQ7AAAGkw6V6Ms752.png" },
                { title: "儿童剧", path: "/show/showsLibrary", params: { cid: 0, caid: 38 }, ImgUrl: "https://image.juooo.com/group1/M00/02/7D/rAoKmVzIeCyAB0jKAAAFxM4aS44306.png" },
                { title: "音乐会", path: "/show/showsLibrary", params: { cid: 0, caid: 39 }, ImgUrl: "https://image.juooo.com/group1/M00/03/26/rAoKNVzIeDSATtBuAAAFFfAO9uw344.png" }
            ]
        }
        this.state.labelItemList.map((item, index) => {
            this.state.itemList.push(
                <LabelItem key={index}>
                    <Item_ImgContain>
                        <Item_Img src={item.ImgUrl}></Item_Img>
                    </Item_ImgContain>
                    <Item_Title>{item.title}</Item_Title>
                </LabelItem>
            )
        })
    }
    render() {
        return (
            <LabelContain>
                {this.state.itemList}
            </LabelContain>
        )
    }
}

//样式
const LabelContain = styled.div`
    display:flex;
    justify-content:space-between;
    padding:${r(16)} ${r(26)};
`;
const LabelItem = styled.div`
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
`

export default ClassifyList