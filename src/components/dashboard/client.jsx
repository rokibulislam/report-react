import React from 'react'

const Client = (props) => {
    return (  
        <tr>
            <th scope="row">
                <div className="data-clients__img">
                    <div className="icon icon--image">
                        <img src="images/logos/edge.jpg" alt="company_name_here"/>
                    </div>
                </div>
            </th>
            <td>
                <div className="data-clients__name">Soly Group</div>
                <div className="data-clients__address color-light">Oslo, Norway</div>
            </td>
        </tr>
    );
}
 
export default Client;