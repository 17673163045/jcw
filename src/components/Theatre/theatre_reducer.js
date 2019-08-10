import immutable from "immutable"
const defaultState = immutable.fromJS({
    theatreIndexData:""
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_THEATRE_INDEX_DATA":
            let theatreIndexData = action.val.data.data.theatre_list;
            return state.update("theatreIndexData", (value) => value = theatreIndexData)
        default:
            return state
    }
}