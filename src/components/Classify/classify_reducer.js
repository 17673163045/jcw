import immutable from "immutable"
const defaultState = immutable.fromJS({
    ClassifyList: "",
    classifyRecommend: [],
    classifycategory: "0"
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CLASSIFY_LIST_DATA":
            let ClassifyList = action.val.data.data.show_category_list;
            return state.update("ClassifyList", (value) => value = ClassifyList);
        case "GET_CLASSIFY_RECOMMENDLIST":
            let classifyRecommendData = action.val;
            return state.update("classifyRecommend", (value) => {
                if (state.toJS().classifyRecommend.data) {
                    classifyRecommendData.data.data.list = classifyRecommendData.data.data.list.concat(state.toJS().classifyRecommend.data.data.list);
                    return value = classifyRecommendData
                }
                return value = classifyRecommendData
            })
        case "GET_CLASSIFY_CATEGORY":
            let classifycategory = action.val;
            return state.update("classifycategory", (value) => value = classifycategory)
        default:
            return state
    }
}