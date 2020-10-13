import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AdminSidebar = () => {

    const { t } = useTranslation()

    return ( 
        <React.Fragment>
            <section className="sidebar">
                <div className="brand">
                    <Link to="/dashboard" className="icon icon--logo">
                        <img src="images/logo-reportify.svg" alt="Reportify logo"/>
                    </Link>
                </div>
                
                <div className="divider divider--full"></div>
            
                <nav className="main-menu" >
                    <Link to="/" className="menu-item">
                        <span className="menu-item__icon">
                            <img src="/images/super-admin/customer.svg" alt=""/>
                        </span>
                        <span className="menu-item__text"> { t('Customers List') } </span>
                    </Link>

                    <Link to="/" className="menu-item">
                        <span className="menu-item__icon">
                            <img src="/images/super-admin/transactions.svg" alt=""/>
                        </span>
                        <span className="menu-item__text"> { t('Transactions') } </span>
                    </Link>

                    <Link to="/" className="menu-item">
                        <span className="menu-item__icon">
                            <img src="/images/super-admin/api.svg" alt=""/>
                        </span>
                        <span className="menu-item__text"> { t('All Api') }</span>
                    </Link>

                    <Link to="/" className="menu-item">
                        <span className="menu-item__icon">
                            <img src="/images/super-admin/info.svg" alt=""/>
                        </span>
                        <span className="menu-item__text"> { t('Registration Info') } </span>
                    </Link>

                    <Link to="/" className="menu-item">
                        <span className="menu-item__icon">
                            <img src="/images/super-admin/billing.svg" alt=""/>
                        </span>
                        <span className="menu-item__text"> { t('Billing Info') }</span>
                    </Link>

                </nav>
                
                <div className="divider divider--full"></div>
                
                <div className="sidebar-footer">
                    <Link to="/settings">
                        <span className="menu-item__icon">
                            <img src="/images/super-admin/settings.svg" alt=""/>
                        </span>
                        <span className="menu-item__text"> { t('Settings') } </span>
                    </Link>

                    <Link to="/">
                        <span className="menu-item__icon">
                            <img src="/images/super-admin/logout.svg" alt=""/>
                        </span>
                        <span className="menu-item__text">  { t('Log Out') }</span>
                    </Link>
                </div>
            </section>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminSidebar);