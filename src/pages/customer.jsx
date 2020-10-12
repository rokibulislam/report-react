import React from 'react'
import AdminLayout from '../layout/AdminLayout'

import CustomerTopbar from '../components/admin/customerTopbar'
import CustomerList from '../components/admin/customerList'
import CustomerDetails from '../components/admin/customerDetails'

const Customer = (props) => {
    return ( 
        <AdminLayout>
            <CustomerTopbar/>

          <div className="content row mt-4">
              <div className="col-md-7">
                  <CustomerList/>
              </div>

              <div className="col-md-5">
                  <CustomerDetails/>
              </div>
          </div>  
        </AdminLayout>
    );
}
 
export default Customer;