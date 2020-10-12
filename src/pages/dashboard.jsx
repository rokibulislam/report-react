import React from 'react'
import Layout from '../layout/Layout'

import Transaction from '../components/dashboard/transaction'
import LargeClient from '../components/dashboard/largeclient'
import Leverandorer from '../components/dashboard/leverandorer'
import TotalSales  from '../components/dashboard/totalSales'
import Cards from '../components/dashboard/card'

import { connect } from 'react-redux'

const Dashboard = () => {
    return ( 
        <Layout>
            {/* START data cards */}
            <div className="data-cards-wrap">
                {/* column 1 */}
                <div className="col-12 col-xl-7">
                <Transaction/>
                <LargeClient/>
                </div>

                <div className="col-12 col-xl-5">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                        <TotalSales/>
                        <Leverandorer/>
                        </div>

                        <div className="col-12 col-lg-6">
                            <Cards/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);