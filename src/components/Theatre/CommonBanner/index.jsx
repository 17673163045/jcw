import React, { PureComponent } from "react"
import Swiper from "swiper/dist/js/swiper.min.js"
import "swiper/dist/css/swiper.min.css"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class CommonBanner extends PureComponent {
    componentDidMount() {
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 2.9,
        });
    }
    render() {
        let renderList = this.props.bannerList;
        if (!renderList[renderList.length - 1].flag) {
            renderList.push({ flag: "more", name: "查看更多 >" })
        }
        return (
            <Wrap>
                {/*swiper轮播图 */}
                <div className="swiper-container swiper-container-horizontal">
                    <div className="swiper-wrapper">
                        {renderList.map((item, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="time">
                                    <div className="toptime">{item.show_time}</div>
                                </div>
                                <div className="border">
                                    <div className="dot"></div>
                                </div>
                                <div className="imgWrap">
                                    {
                                        item.flag !== "more" ? (
                                            <img src={item.pic} alt="" />
                                        ) : (
                                                <div className="lookMore">
                                                    <div>{item.name}</div>
                                                </div>
                                            )
                                    }

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    width:100%;
    .swiper-wrapper{
    }
        .swiper-slide{
            padding-right:${r(8)};
            height:${r(206)};
            .time{
                height:${r(60)};
                .toptime{
                    text-align:center;
                    color:#999;
                    padding:${r(10)} 0;
                    font-size:${r(14)};
                }
            }
            .border{
                position:absolute;
                top:${r(40)};
                width:100%;
                border: 1px solid #ccc;
                .dot{
                    height:${r(8)};
                    width:${r(8)};
                    background-color:#ccc;
                    border-radius:50%;
                    position:absolute;
                    left:50%;
                    top:${r(-4)};
                    margin-left:${r(-4)};
                }
            }
            .imgWrap{
                height:${r(146)};
                img{
                    height:100%;
                    width:100%;
                }
                .lookMore{
                    height:100%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background-color: #efefef;
                    div{
                        flex:1;
                        text-align:center;
                        color:#666;
                    }
                }
            }
    }
`

export default CommonBanner