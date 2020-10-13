import React from 'react';
import Sidebar from '../components/sidebar'
import Topbar from '../components/topbar'
import Language from '../components/common/language'


const Layout = (props) => {
    return ( 
        <React.Fragment>
            <div className="page-dashboard">
                <Sidebar/>
                <section className="dashboard-content">
                    <Language/>
                    <Topbar/>
                    { props.children }
                </section>
            </div>
        </React.Fragment>
    );
}
 
export default Layout;