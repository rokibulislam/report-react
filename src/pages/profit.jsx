import React from 'react'
import Layout from '../layout/Layout'
import SalesRevenue from '../components/lossprofit/salesRevenue'
import OperationRevenue from '../components/lossprofit/operationRevenue'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next";

const Profit = () => {

    const { t } = useTranslation();

    return ( 
        <Layout>   
            <div className="data-table data-table--cashflow mt-4">
                <div className="data-table__header d-flex justify-content-between align-content-center">
                    <h5 className="card-title"> { t('Profit & Loss report') }</h5>
                    <div className="data-table__options d-flex align-content-center justify-content-end">
                        <div className="form-group">
                            <select className="custom-select">
                                <option selected>Year 2020</option>
                                <option value="1">Year 2019</option>
                                <option value="2">Year 2018</option>
                                <option value="3">Year 2017</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="data-table__cashflow-table">
                    <SalesRevenue/>
                    <OperationRevenue/>
                </div>
            </div>
        </Layout>
    );
}

const mapStateToProps = state => {
    return {
        'profit': state.proft
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Profit);