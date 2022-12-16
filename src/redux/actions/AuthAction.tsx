
export const setToken = (payload:boolean) => {
    return {
        type: "setToken",
        payload: payload
    }
}

export const setProfile = (payload: boolean) => {
    return {
        type: "setProfile",
        payload: payload
    }
}

export const setSubmitProfile = (payload: boolean) => {
    return {
        type: "setSubmitProfile",
        payload: payload
    }
}


