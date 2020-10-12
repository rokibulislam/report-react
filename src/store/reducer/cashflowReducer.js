const init = {
    'count': 0
}

const cashflowReducer = ( state= init, action ) => {
    const newState = { ...state }
    switch( action.type ) {
        default:
            return newState;
    }
}

export default cashflowReducer;