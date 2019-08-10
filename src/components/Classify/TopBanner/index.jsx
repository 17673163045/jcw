import React, { PureComponent } from "react"
import Swiper from "swiper/dist/js/swiper.min.js"
import "swiper/dist/css/swiper.min.css"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
import { Link, withRouter } from "react-router-dom"
// 导入定位城市组件 
import CurrentCity from "@/components/Classify/CurrentCity"
const r = globalFns.r; //计算rem的函数

class TopBanner extends PureComponent {
    state = {
        category: ""
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: "auto",
        });
        let category = window.localStorage.getItem("category");
        this.setState({
            category
        })
    }
    // 点击分类轮播图事件
    handGetClassifyCategory(item) {
        //设置state的category,判断==item.category,改变当前点击样式
        this.setState({
            category: item.category_id
        })
        //存category
        window.localStorage.setItem("category", item.category_id);
        //点击改变存category
        this.props.getClassifyCategory(item.category_id);
        //根据category,city_id发接口
        let city_id = JSON.parse(window.sessionStorage.getItem("userSelect")).id;
        this.props.getClassifyRecommendShow(item.category_id, city_id, 1)
    }
    render() {
        let category = this.state.category;
        let renderList = this.props.bannerList;
        return (
            <Wrap>
                {/*swiper轮播图 */}
                <div className="leftSwiper">
                    <div className="swiper-container swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            {renderList.map((item, index) => (
                                <div
                                    onClick={this.handGetClassifyCategory.bind(this, item)}
                                    className="swiper-slide"
                                    key={index}
                                    style={category == item.category_id ? { borderBottom: '2px solid #f90', color: "#f90" } : {}}
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="rightCity">
                    <CurrentCity></CurrentCity>
                </div>
                {/* 城市 */}
            </Wrap>
        )
    }
}

const Wrap = styled.div`
    width:${r(375)};
    position:fixed;
    background-color: #fff;
    z-index:9999;
    top:${r(40)};
    height:${r(40)};
    padding:${r(6)} ${r(12)};
    display:flex;
    .leftSwiper{
        width:${r(286)};
        position:relative;
            &::after{
            content:"";
            position:absolute;
            top:50%;
            right:${r(-6)};
            margin-top:${r(-7)};
            border-left:1px solid #c8c8c8;
            height:${r(14)};
        }
        .swiper-slide{
            height:${r(28)};
            line-height:${r(28)};
            color:#444;
            font-size:${r(15)};
            text-align:center;
            width:auto;
            padding:0 ${r(2)};
            margin-right:${r(22)}
        }
    }
     .rightCity{
         margin-left:${r(8)}
     }   
`

export default withRouter(TopBanner)