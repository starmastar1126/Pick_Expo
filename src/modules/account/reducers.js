import types from './types';

const initialState = {
    logged: false,
    user: null,
};

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };
        default:
            return state;
    }
}