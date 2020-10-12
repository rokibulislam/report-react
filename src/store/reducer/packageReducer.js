const init = {
    'count': 0
}

const packageReducer = ( state= init, action ) => {
    const newState = { ...state }
    switch( action.type ) {
        default:
            return newState;
    }
}

export default packageReducer;