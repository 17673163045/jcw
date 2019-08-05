import { Carousel, WingBlank } from 'antd-mobile';
import React, { PureComponent } from "react"
import styled from "styled-components"
import globalFns from "@/core/globalFns"
const r = globalFns.r; //计算rem的函数

class TopBanner extends React.PureComponent {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        if(!this.props.bannerList) return null;
        if(JSON.stringify(this.props.bannerList) === "[]") return null;
        return (
            <Wrap>
                <WingBlank>
                    <Carousel
                        dots={true}
                        autoplay={true}
                        infinite
                    >
                        {this.props.bannerList.map((item,index) => (
                            <a
                                key={index}
                                href="#"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`${item.image_url}`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </Wrap>
        );
    }
}

const Wrap = styled.div`
    width:${r(375)};
    margin:0 auto;
`

export default TopBanner