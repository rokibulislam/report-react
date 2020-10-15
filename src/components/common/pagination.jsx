import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const Pagination = () => {

    const [ offset,setOffset ] = useState(0)

    const { t } = useTranslation();

    const handlePageClick = (e) => {

    }

    return ( 
    <React.Fragment>

        {/* <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/> */}

        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1"> { t('Previous') }</a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#"> { t('Next') }</a>
                </li>
            </ul>
        </nav>
    </React.Fragment>
    );
}
 
export default Pagination;