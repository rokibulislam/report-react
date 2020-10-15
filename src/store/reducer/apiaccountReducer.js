import * as Types from '../actions/type'

const apiAccount = {
    "apiAccount": []
};

const apiAccountReducer = ( state= apiAccount, action ) => {
    switch( action.type ) {
        case Types.LOAD_APIACCOUNT:
            return state
        case Types.ADD_APIACCOUNT:
            return state
        case Types.DELETE_APIACCOUNT:
            return state
        case Types.UPDATE_APIACCOUNT:
            return state
        default:
            return state;
    }
}

export default apiAccountReducer;