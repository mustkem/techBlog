import { actionTypes } from '../../ActionsTypes/actionTypes';
const initialState = {}

export default function myReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return {
                ...state,
                ...action
            };
        case actionTypes.GET_POSTS:
            // console.log("test", )
            return {
                ...state,
                ...action.payload
            };
            break;

        default:
            return state
    }
}