const initialState = {
    token: false,
    profile: false,
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
        default:
            return state
    }
}