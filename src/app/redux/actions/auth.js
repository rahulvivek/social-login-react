import { facebookLoginAPI } from '../../services/authentication'

export const AUTH_ACTIONS = {
    FACEBOOK_LOGIN_SUCCESS: "FACEBOOK_LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    LOGOUT: "LOGOUT"
}

export const facebookLogin = (token) => async (dispatch) => {
    const body = JSON.stringify({
        auth_token: token
    });

    try {
        const response = await facebookLoginAPI(body);

        dispatch({
            type: AUTH_ACTIONS.FACEBOOK_LOGIN_SUCCESS,
            payload: {
                res: response.data,
                facebookToken: token
            }
        });
    } catch (err) {
        dispatch({
            type: AUTH_ACTIONS.LOGIN_FAIL
        })
    }
}

export const logout = (dispatch) => {
    return dispatch({
        type: AUTH_ACTIONS.LOGOUT
    })
}