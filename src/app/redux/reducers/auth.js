import { AUTH_ACTIONS } from "../actions/auth";

const initialState = {
    user: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')) || {},
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    facebookToken: localStorage.getItem('facebook_token')
}

export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case AUTH_ACTIONS.FACEBOOK_LOGIN_SUCCESS:
            const { res, facebookToken } = payload
            localStorage.setItem('token', res.tokens.access)
            localStorage.setItem('user', JSON.stringify(res))
            localStorage.setItem('facebook_token', facebookToken)
            return {
                ...state,
                isAuthenticated: true,
                token: res.tokens.access,
                facebookToken: facebookToken,
                user: res
            }

        case AUTH_ACTIONS.LOGIN_FAIL:
        case AUTH_ACTIONS.LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('facebook_token')
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                facebookToken: null,
                user: null
            }
        default:
            return state
    }
}