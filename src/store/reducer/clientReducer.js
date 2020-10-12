const clients = [
    {
        id: 1,
        name: 'Rokib',
    }
];

const clientReducer = ( state= clients, action ) => {
    const newState = { ...state }

    switch( action.type ) {

        default:
            return newState;
    }
}

export default clientReducer;