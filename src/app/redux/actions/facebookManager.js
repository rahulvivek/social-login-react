import { getAllFacebookPagesAPI, updateFacebookPagesAPI } from "../../services/facebookManager";
import { logout } from "./auth";

export const FACEBOOK_MANAGER = {
    GET_ALL_PAGES_SUCCESS: "GET_ALL_PAGES_SUCCESS",
    GET_ALL_FAIL: "GET_ALL_FAIL",
    UPDATE_PAGE_SUCCESS: "UPDATE_PAGE_SUCCESS"
}

export const getAllFacebookPages = (token) => async (dispatch) => {
    const body = JSON.stringify({
        auth_token: token
    });

    try {
        const response = await getAllFacebookPagesAPI(body);

        dispatch({
            type: FACEBOOK_MANAGER.GET_ALL_PAGES_SUCCESS,
            payload:response.data,
        });
    } catch (err) {
        console.log(err.response)
        const { status } = err.response
        
        if (status === 401) {
            dispatch(logout)
        } else {
            dispatch({
                type: FACEBOOK_MANAGER.GET_ALL_FAIL
            })
        }
    }
}

export const updatePageDetails = (payload) => async (dispatch) => {
    const token = localStorage.getItem("facebook_token") || null;
    if (token) {
        const body = JSON.stringify({
            auth_token: token,
            ...payload
        })
        try {
            const response = await updateFacebookPagesAPI(body)
            dispatch({
                type: FACEBOOK_MANAGER.UPDATE_PAGE_SUCCESS,
                payload: response.data.page
            })
        } catch (err) {
            console.log(err)
        }
    }
    

    
}