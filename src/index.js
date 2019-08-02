import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//引入scss,定义resetcss和全局css mixin函数和全局样式
import "@/common/css/index.scss"

// 引入App作为根渲染组件
import App from './App';

//引入淘宝框架
import "react-flexible"

// 引入哈希路由包裹App
import { HashRouter as Router } from "react-router-dom"

//引入redux的provider包裹App
import { Provider } from "react-redux"

//导入store,包括所有的reducer
import store from "@/store"

//渲染
ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
