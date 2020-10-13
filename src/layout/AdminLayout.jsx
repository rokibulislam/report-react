import React from 'react';
import { useTranslation } from 'react-i18next'
import AdminSidebar from '../components/adminSidebar'
import AdminTopbar from '../components/adminTopbar'

const AdminLayout = (props) => {

    const { t } = useTranslation();
    
    return ( 
        <React.Fragment>
            <div className="page-superadmin">
                <AdminSidebar/>
                <section className="dashboard-content">
                    <AdminTopbar/>
                    { props.children }
                </section>
            </div>
        </React.Fragment>
    );
}
 
export default AdminLayout;