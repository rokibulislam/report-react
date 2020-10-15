import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { logout } from '../store/actions/authAction'

const TopbarMenu = (props) => {

    const { history, auth } = props;

    const { t } = useTranslation();

    const logout = () => {
        props.logout( history )
    }

    return ( 
        <React.Fragment>
            <div className="user ml-2">
                <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="user-img">
                            <img src="images/users/user-img.png" alt=""/>
                        </span>
                        <span className="user-name pl-3"> { auth.user.name } </span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to="/settings" className="dropdown-item"> { t('Settings') } </Link>
                        <Link to="/" className="dropdown-item"> { t('Billing') } </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/" onClick={logout} className="dropdown-item"> { t('Logout') } </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
})
 
export default withRouter( connect(mapStateToProps, {
    logout
})(TopbarMenu) );