const userReducers = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'REGISTER' :
            return {token: payload}
        case 'LOGOUT':
            return {token: null}
            localStorage.removeItem('token')
        case 'LOGIN':
            return {token: payload}
        default:
            return state
    }
}

export default userReducers