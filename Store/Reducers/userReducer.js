import { actionTypes } from '../ActionsTypes/actionTypes';
const initialState = {}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user:action.payload
            };

        default:
            return state
    }
}