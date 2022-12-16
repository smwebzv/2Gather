const initialState = {
    token: false,
    profile: false,
    submitProfile: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "setToken": {
            return {
                ...state,
                token: action.payload
            }
        }
        case "setProfile": {
            return{
                ...state,
                profile: action.payload
            }
        }
        case "setSubmitProfile": {
            return{
                ...state,
                submitProfile: action.payload
            }
        }
        default:
            return state
    }
}