const init = {
    isAuthenticated: false,
    user: {},
    error: {},
    'count': 0
}

const authReducer = ( state= init, action ) => {
    const newState = { ...state }

    switch( action.type ) {

        default:
            return newState;
    }
}

export default authReducer;