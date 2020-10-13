import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const CustomerTopbar = () => {
    
    const { t } = useTranslation();

    return ( 
        <React.Fragment>
            <div className="top-info-cards tic">
                <div className="tic__card highlight">
                    <div class="tic__number">34556</div>
                    <div className="tic__title"> { t('Paying Users') }</div>
                </div>
                
                <div className="tic__card">
                    <div className="tic__number">34556</div>
                    <div className="tic__title"> { t('Trial Users') }</div>
                </div>
                
                
                <div className="tic__card">
                    <div className="tic__number">34556</div>
                    <div className="tic__title"> { t('Total Companies') } </div>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(CustomerTopbar);