import React from 'react';
import { useTranslation } from "react-i18next";

const TableHeader = () => {

    const { t } = useTranslation()

    return ( 
        <React.Fragment>
            <thead className="thead-primary">
                <tr className="font-weight-bold">
                    <th scope="col"> { t('Cash Flow From Operational Activities (Operations)') } </th>
                    <th scope="col" className="month-name">Jan</th>
                    <th scope="col" className="month-name">Feb</th>
                    <th scope="col" className="month-name">Mar</th>
                    <th scope="col" className="month-name">Apr</th>
                    <th scope="col" className="month-name">May</th>
                    <th scope="col" className="month-name">Jun</th>
                </tr>
            </thead>
        </React.Fragment>
    );
}
 
export default TableHeader;