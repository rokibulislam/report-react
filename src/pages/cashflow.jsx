import React from 'react'
import Layout from '../layout/Layout'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next";

import Action from '../components/dashboard/action'

import InvestmentActivity from '../components/cashflow/investmentActivity'
import OperationalActivity from '../components/cashflow/operationalActivity'

const Cashflow = (props) => {

    const { t } = useTranslation();

    return ( 
        <Layout>   
            <div className="data-table data-table--cashflow">
                <div className="data-table__header d-flex justify-content-between align-content-center">
                    <h5 className="card-title"> { t('Cash flow statement') } </h5>
                    <div className="data-table__options d-flex align-content-center justify-content-end">
                        <div className="form-group">
                            <select className="custom-select">
                                <option selected>Jan 01 - Jun 8, 2020</option>
                                <option value="1">Jan 01 - Jun 8, 2020</option>
                                <option value="2">Jan 01 - Jun 8, 2020</option>
                                <option value="3">Jan 01 - Jun 8, 2020</option>
                            </select>
                        </div>
                        <Action/>
                    </div>
                </div>

                <div className="data-table__cashflow-table">
                    <OperationalActivity/>
                    <InvestmentActivity/>
                </div>
            </div>
        </Layout>
    );
}
 

const mapStateToProps = state => {
    return {
        'cashflow': state.cashflow
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Cashflow);