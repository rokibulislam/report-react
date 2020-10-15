import React from 'react'
import TableHeader from './tableHeader'
import TableBody from './tablebody'
import TableFooter from './tablefooter'

const Table = (props) => {
    return ( 
        <React.Fragment>
            <table className="table" data-tid="">
                <TableHeader/>
                <TableBody/>
                <TableFooter/>
            </table>
        </React.Fragment>
    );
}
 
export default Table;