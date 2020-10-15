const init = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'phoneNo': '',
    'companyName': ''
};

const userReducer = ( state= init, action ) => {
    const newState = { ...state }

    switch( action.type ) {

        default:
            return newState;
    }
}

export default userReducer;