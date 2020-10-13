import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Pagination from '../pagination'

const CustomerList = () => {
    const { t } = useTranslation();
    return ( 
        <React.Fragment>
            <div className="customer-info-table">
                <div className="table-filter">
                    <div className="row">
                        <div className="col">
                            <h4 className="card-title"> { t('Customers List') } </h4>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <div className="searh-customer mr-2">
                                <input type="search" className="form-control" placeholder={ t('Search') }/>
                            </div>
                            <div className="select-board filter-item mr-2">
                                <select className="custom-select">
                                    <option selected> { t('Sort By') } </option>
                                    <option value="1"> { t('Name') } </option>
                                    <option value="2"> { t('Employee') }</option>
                                    <option value="3"> { t('Transactions') }</option>
                                </select>
                            </div>
                            <div className="select-board filter-item">
                                <select className="custom-select">
                                    <option selected>10</option>
                                    <option value="1">30</option>
                                    <option value="2">50</option>
                                    <option value="3">100</option>
                                    <option value="3">150</option>
                                    <option value="3">200</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="table-content table-responsive">
                        <table className="table">
                            <thead className="border-0">
                            <tr className="font-weight-bold">
                                <th scope="col"> { t('Name') } </th>
                                <th scope="col"> { t('Employees') } </th>
                                <th scope="col"> { t('Paying/mo') } </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr className="is-active">
                                    <td scope="row" className="d-flex justify-content-start">
                                        <div className="data-clients__img mr-3">
                                            <div className="icon icon--image">
                                                <img src="images/logos/edge.jpg" alt="company_name_here"/>
                                            </div>
                                        </div>
                                        <div className="data-clients__info">
                                            <div className="data-clients__name">Soly Group</div>
                                            <div className="data-clients__address color-light">Oslo, Norway</div>
                                        </div>
                                    </td>

                                    <td className="">
                                        245
                                    </td>

                                    <td className="">
                                        $15
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="table-pagination mt-4">
                    <Pagination/>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);