import { FACEBOOK_MANAGER } from "../actions/facebookManager";

const initialState = {
    pages: [],
}

export const facebookManagerReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case FACEBOOK_MANAGER.GET_ALL_PAGES_SUCCESS:
            return {
                ...state,
                pages: [...payload.pages]
            }

        case FACEBOOK_MANAGER.UPDATE_PAGE_SUCCESS:
            return {
                ...state,
                pages: state.pages.map(item => {
                    if(item.id === payload.id) {
                        const newItem = {
                            ...item,
                            ...payload
                        }
                        return newItem
                    } else {
                        return item
                    }
                })
            }
            
        default:
            return state
    }
}