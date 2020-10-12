import React from 'react'
import { connect } from 'react-redux';

const CustomerTopbar = () => {
    return ( 
        <React.Fragment>
            <div className="top-info-cards tic">
                <div className="tic__card highlight">
                    <div class="tic__number">34556</div>
                    <div className="tic__title">Paying Users</div>
                </div>
                
                <div className="tic__card">
                    <div className="tic__number">34556</div>
                    <div className="tic__title">Trial Users</div>
                </div>
                
                
                <div className="tic__card">
                    <div className="tic__number">34556</div>
                    <div className="tic__title">Total Companies</div>
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