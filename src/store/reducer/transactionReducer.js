const transactions = {
    'transactions': [
        {
            id: 1,
            name: 'Rokib',
        }
    ],
    count: 0
};

const transactionReducer = ( state= transactions, action ) => {
    const newState = { ...state }

    switch( action.type ) {

        default:
            return newState;
    }
}

export default transactionReducer;