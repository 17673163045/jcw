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
        getRecommendShowData(page,callback) {
            dispatch(getRecommendShow(dispatch,page,callback))
        }
    }
}

export class PullRefresh extends Component {
    constructor() {
        super();
        this.state = {
            hasMore: true,
            data: '',
            action: STATS.init,
            page: 1,
            noMoreNode:""
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
            this.setState({
                noMoreNode:[<p key={1}>没有更多了</p>]
            })
            return;
        }
        this.props.getRecommendShowData(++this.state.page,(res)=>{
            if (JSON.stringify(res.data.data.recommend_show_list) === "[]") {
                this.setState({
                    action: STATS.reset,
                    hasMore: false
                });
            }else {
                //上拉刷新后的回调
                let arr = this.props.RecommendShow.data.data.recommend_show_list; //这是新数据
                this.setState({
                    data: [...this.state.data, ...arr],  //新数据和旧数据合并
                    action: STATS.reset
                });
            }
        })
        this.setState({
            action: STATS.loading
        })
    }
    componentDidMount() {
        this.props.getRecommendShowData(this.state.page,(res)=>{this.setState({
            data:res.data.data.recommend_show_list
        })});
    }

    render() {
        if (!this.state.data) return null;
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
                        <RecommendShow recommendShow={this.state.data}></RecommendShow>
                    }
                    {this.state.noMoreNode}
                </ReactPullLoad>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PullRefresh)