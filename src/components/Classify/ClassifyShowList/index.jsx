//这是分类组件
import React, { PureComponent } from "react"
import globalFns from "@/core/globalFns"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
//导入react-pullload插件
import ReactPullLoad, { STATS } from 'react-pullload'

//导入下拉,上拉样式
import "./PullRefresh.css"

//导入分类热门推荐组件,这是需要上拉加载不同page页的组件
import RecommendShow from "@/components/Home/RecommendShow"

const r = globalFns.r; //计算rem的函数

export class ClassifyShowList extends PureComponent {
    constructor() {
        super();
        this.state = {
            hasMore: true,
            action: STATS.init,
            page: 1,
            city_id: "",
            noMoreNode: "",
            total: ""
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
                noMoreNode: [<div style={{ color: "#ccc", paddingBottom: `${r(10)}`, textAlign: "center" }} key={1}>没有更多了</div>]
            })
            return;
        }
        this.props.getClassifyRecommendShow(this.props.category, this.state.city_id, ++this.state.page, (res) => {
            if (JSON.stringify(res.data.data.recommend_show_list) === "[]") {
                this.setState({
                    action: STATS.reset,
                    hasMore: false
                });
            } else {
                //上拉刷新后的回调
                this.setState({
                    // data: [...this.state.data, ...arr],  //新数据和旧数据合并
                    action: STATS.reset
                });
            }
        })
        this.setState({
            action: STATS.loading
        })
    }

    componentDidMount() {
        let city_id = JSON.parse(window.sessionStorage.getItem("userSelect")).id;
        this.setState([
            city_id
        ])
    }
    render() {
        return (
            <div>
                {/* 配置下拉 */}
                < ReactPullLoad
                    downEnough={50}
                    action={this.state.action}
                    handleAction={this.handleAction}
                    distanceBottom={50} >
                    {/* 显示为你推荐部分 */}
                    {
                        < RecommendShow recommendShow={this.props.ClassifyRecommendShow} ></RecommendShow >
                    }
                    {/* 没有更多 */}
                    {this.state.noMoreNode}
                </ReactPullLoad >
            </div >
        )
    }
}

export default withRouter(ClassifyShowList)