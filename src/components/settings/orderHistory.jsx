import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const OrderHistory = () => {

    const { t } = useTranslation();

    return ( 
    <React.Fragment>
            <div className="card card--order-history">
                <h5 className="card-title mb-3"> { t('Order history') } </h5>
                <div className="input-group" id="search-order-history">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-order-history2"/>
                    <div className="input-group-append">
                        <span className="input-group-text bg-transparent border-0" id="search-order-history2">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 11L9.125 9.125M5.0625 9.125C7.30616 9.125 9.125 7.30616 9.125 5.0625C9.125 2.81884 7.30616 1 5.0625 1C2.81884 1 1 2.81884 1 5.0625C1 7.30616 2.81884 9.125 5.0625 9.125Z" stroke="#158385" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="card--order-history__data">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"> { t('Date') }    </th>
                            <th scope="col"> { t('Plan' ) }   </th>
                            <th scope="col"> { t('Invoice') } </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>April 4, 2020</td>
                            <td>Pro Business</td>
                            <td>
                                <a href="#" className="btn-link btn--download-invoice">
                                    <img src="images/file-download.svg" alt="download invoice"/>
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <nav aria-label="..." className="card--order-history__pagination mt-4">
                        <ul className="pagination pagination-sm">
                            <li className="page-item active" aria-current="page">
                            <span className="page-link">
                                1
                                <span className="sr-only">(current)</span>
                            </span>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);