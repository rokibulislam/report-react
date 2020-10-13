import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';

import Layout from '../layout/Layout'
import Billing from '../components/settings/billing'
import Personal from '../components/settings/personal'
import Account from '../components/settings/account'
import Tabs from '../components/settings/tabs'


const Settings = (props) => {
    
    const { t } = useTranslation();

    return ( 
        <Layout>   
        
        <div className="settings-page">
            <div className="settings-page__header d-flex justify-content-start align-content-center align-items-center">
                <h5 className="card-title m-0"> { t('Settings') } </h5>
                <div className="divider divider--vertical mx-4"></div>
                <Tabs/>
            </div>

            <div className="tab-content mt-4" id="settingsTabContent">
                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Personal/>
                </div>
                 
                <div className="tab-pane fade" id="api" role="tabpanel" aria-labelledby="api-tab">
                    <Account/>
                </div>

                <div className="tab-pane fade" id="billing" role="tabpanel" aria-labelledby="billing-tab">
                    <Billing/>
                </div>
            </div>
        </div>
        </Layout>
    );
}
 

const mapStateToProps = state => {
    // console.log(state);
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Settings);