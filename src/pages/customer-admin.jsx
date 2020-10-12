import React from 'react'
import AdminLayout from '../layout/AdminLayout'

import CustomerTopbar from '../components/admin/customerTopbar'
import CustomerList from '../components/admin/customerList'
import Invoice from '../components/admin/invoice'

const CustomerAdmin = (props) => {
    return ( 
        <AdminLayout>
            <CustomerTopbar/>

            <div className="content row mt-4">
                <div className="col-md-7">
                    <CustomerList/>
                </div>

                <div className="col-md-5">
                    <Invoice/>
                </div>
            </div>  
            
        </AdminLayout>
    );
}
 
export default CustomerAdmin;