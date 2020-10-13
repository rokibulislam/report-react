import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Pagination = () => {
    const { t } = useTranslation();
    return ( 
    <React.Fragment>
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