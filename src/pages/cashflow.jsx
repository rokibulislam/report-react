import React from 'react'
import Layout from '../layout/Layout'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next";

import Action from '../components/dashboard/action'
import DateRangePicker from '../components/common/daterangePicker'
import InvestmentActivity from '../components/cashflow/investmentActivity'
import OperationalActivity from '../components/cashflow/operationalActivity'

const Cashflow = (props) => {

    const { t } = useTranslation();

    return ( 
        <Layout>   
            <div className="data-table data-table--cashflow">
                <div className="data-table__header d-flex justify-content-between align-content-center">
                    <h5 className="card-title"> { t('Cash flow statement') } </h5>
                    <DateRangePicker/>
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