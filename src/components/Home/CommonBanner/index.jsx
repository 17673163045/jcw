// 可复用轮播图组件,支持热门演出板块,演唱会板块,儿童剧,音乐会板块
// 传参,传入轮播图数据(必须),传入标题(必须) 
//传入封面组件(可选), 传入价格组件(可选),传入描述的字体size,可选,默认14px
import React, { PureComponent } from "react"
import Swiper from "swiper/dist/js/swiper.min.js"
import "swiper/dist/css/swiper.min.css"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
//导入价格组件,和复用的轮播图搭配使用
import Price from "@/components/Home/CommonBanner/Price.jsx"
//导入封面组件,和复用的轮播图搭配使用
import Cover from "@/components/Home/CommonBanner/Cover.jsx"
const r = globalFns.r; //计算rem的函数

class CommonBanner extends PureComponent {
    render() {
        if (!this.props.bannerList) return null;
        let renderList;
        if (this.props.bannerList.length <= 10) {
            renderList = this.props.bannerList;
        } else {
            renderList = this.props.bannerList.slice(0, 10)
        }
        return (
                <Wrap fontSize={this.props.fontSize ? this.props.fontSize : "14"}>
                    <div className="hotTitle">
                        <div className="leftContent">{this.props.title}</div>
                        <div className="rightIcon iconfont icon-jiantou"></div>
                    </div>
                    {/* 传入的封面组件 */}
                    {this.props.isCover ? (
                        <Cover CoverColor={this.props.CoverColor} CoverData={this.props.CoverData}
                        >
                        </Cover>
                    ) : null}
                    {/*swiper轮播图 */}
                    <div className="swiper-container swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            {renderList.map((item, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="imgWrap">
                                        <img src={item.pic} alt="" />
                                    </div>
                                    <p className="detail">{item.show_name || item.schedular_name}</p>
                                    {this.props.isPrice ? (<Price price={parseInt(item.low_price)}></Price>) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </Wrap>
        )
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 3.2,
            spaceBetween: 6
        });
    }
}
//样式
const Wrap = styled.div`
    width:${r(375)};
    margin:0 auto;
    .hotTitle{
        padding:${r(20)} ${r(12)};
        overflow:hidden;
        .leftContent{
            height:${r(22)};
            line-height:${r(22)};
            font-size:${r(20)};
            font-weight:bold;
            float:left;
        }
        .rightIcon{
            height:${r(22)};
            line-height:${r(22)};
            float:right;
        }
    }
    .swiper-container{
        padding:${r(12)};
        .swiper-slide{
            width:${r(108)};
            .imgWrap{
                width:100%;
                height:${r(146)};
                border:1px solid #dfdfdf;
                border-radius:4px;
                img{
                    border-radius:4px;
                    height:100%;
                    width:100%;
                }
            }
            .detail{
                height:${r(34)};
                padding:${r(6)} 0;
                font-size:${(props) => (r(props.fontSize))};
                font-weight:bold;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
        }
    }
`

export default CommonBanner