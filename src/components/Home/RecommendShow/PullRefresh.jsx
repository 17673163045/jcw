// 下拉刷新上拉加载的组件,利用react-pullload
import React, { Component } from "react"
import { connect } from "react-redux"

//导入react-pullload插件
import ReactPullLoad, { STATS } from 'react-pullload'

//导入下拉,上拉样式
import "./PullRefresh.css"

//导入热门推荐组件,这是需要上拉加载不同page页的组件
import RecommendShow from "./index"

//导入请求热门推荐数据的接口的方法
import { getRecommendShow } from "@/components/Home/actionCreator"

// 展开this.props的数据:
const mapStateToProps = (state) => {
    return {
        RecommendShow: state.getIn(["HomeReducer", "recommendShow"]), //为你推荐的数据
    }
}

//展开this.props的方法:
const mapDispatchToProps = (dispatch) => {
    return {
        //这是触发获取为你推荐的数据的方法
        getRecommendShowData(page) {
            dispatch(getRecommendShow(dispatch, page))
        }
    }
}

//cData初始显示数据
const cData = [1, 2, 3, 4, 5, 5]
export class PullRefresh extends Component {
    constructor() {
        super();
        this.state = {
            hasMore: true,
            data: '',
            action: STATS.init,
            index: 10, //loadMoreLimitNum,加载更多的数量限制,即page页的数量,每次加载后减1,即加载10次
            page: 1,
        }
    }

    handleAction = (action) => {
        //new action must do not equel to old action
        if (action === this.state.action) {
            return false
        }
        if (action === STATS.refreshing) {
            this.handRefreshing();
        } else if (action === STATS.loading) {
            this.handLoadMore();
        } else {
            this.setState({
                action: action
            })
        }
    }

    handRefreshing = () => {
        if (STATS.refreshing === this.state.action) {
            return false
        }
        setTimeout(() => {
            //refreshing complete
            this.setState({
                action: STATS.refreshed,
            });
        }, 500)
        this.setState({
            action: STATS.refreshing
        })
    }

    handLoadMore = () => {
        if (STATS.loading === this.state.action) {
            return false
        }
        //无更多内容则不执行后面逻辑
        if (!this.state.hasMore) {
            return;
        }
        setTimeout(() => {
            // 如果没有更多了,hasMore: false,阻止上拉
            if (this.state.index === 0) {
                this.setState({
                    action: STATS.reset,
                    hasMore: false
                });
            } else {
                this.props.getRecommendShowData(++this.state.page)
                //上拉刷新后的回调
                console.log(this.props.RecommendShow)
                let arr = [1, 2, 3, 4, 5, 6, 7]; //这是新数据
                this.setState({
                    data: [...this.state.data, ...arr],  //新数据和旧数据合并
                    action: STATS.reset,
                    index: this.state.index - 1
                });
            }
        }, 2000)

        this.setState({
            action: STATS.loading
        })
    }
    componentDidMount() {
        this.props.getRecommendShowData(this.state.page);
    }
    render() {
        if (!this.props.RecommendShow) return null;
        let data = this.props.RecommendShow.data.data.recommend_show_list
        return (
            <div>
                {/* 配置下拉 */}
                <ReactPullLoad
                    downEnough={50}
                    action={this.state.action}
                    handleAction={this.handleAction}
                    distanceBottom={50}>
                    {/* 显示主页所有的组件 */}
                    {this.props.children}
                    {/* 显示为你推荐部分 */}
                    {
                        <RecommendShow recommendShow={data}></RecommendShow>
                    }
                </ReactPullLoad>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PullRefresh)