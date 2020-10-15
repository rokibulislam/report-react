import React from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux';
import TopbarMenu from '../topbarMenu';
import Notification from '../common/notification'

const AdminTopbar = () => {

    const { t } = useTranslation()

    return ( 
        <React.Fragment>
            <div class="top-bar">
                <h3 class="card-title"> { t('Customers Information') } </h3>
                <div class="user-controls">
                    <Notification/>
                    <div class="divider divider--vertical mx-3"></div>
                    <TopbarMenu/>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminTopbar);