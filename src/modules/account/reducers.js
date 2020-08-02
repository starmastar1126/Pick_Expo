import types from './types';

const initialState = {
    logged: false,
    user_info: null,
};

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                logged: true,
                user_info: action.payload,
            };
        case types.SIGN_OUT:
            return {
                ...state,
                logged: false,
                user_info: initialState
            };
        default:
            return state;
    }
}