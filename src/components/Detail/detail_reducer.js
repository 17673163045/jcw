import immutable from "immutable"

let defaultState = immutable.fromJS({
    scheduleInfo: ""
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_SCHEDULE_INFO":
            let scheduleInfo = action.val.data.data
            return state.update("scheduleInfo",(value)=>(value=scheduleInfo))
        default:
            return state
    }
}