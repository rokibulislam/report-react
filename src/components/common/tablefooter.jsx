import React from 'react';
import { useTranslation } from "react-i18next";

const TableFooter = () => {

    const { t } = useTranslation()
    
    return (
        <React.Fragment>
            <tfoot className="tfoot-primary">
                <tr className="font-weight-bold">
                    <th scope="row">Kontantstrøm Fra Operasjonelle Aktiviteter (Drift)</th>
                    <td>-31,262.93</td>
                    <td>301,262.93</td>
                    <td>301,262.93</td>
                    <td>301,262.93</td>
                    <td>301,262.93</td>
                    <td>301,262.93</td>
                </tr>
            </tfoot>
        </React.Fragment>
    );
}
 
export default TableFooter;