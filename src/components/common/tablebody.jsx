import React from 'react'
import { useTranslation } from "react-i18next";

const TableBody = (props) => {

    const { t } = useTranslation()
    
    return ( 
        <React.Fragment>
            <tbody>
                    <tr>
                        <th scope="row">(Utbetaling)/Innbetaling ved (kjøp)/salg av Immaterielle eiendeler o.l.</th>
                        <td className="color-green">301,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                    </tr>
                    <tr>
                        <th scope="row">Utbetaling til leverandører (kjøp av varer, tjenester)</th>
                        <td className="color-red">-31,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                    </tr>
                    <tr>
                        <th scope="row">Utbetaling/Tilbakebetaling av merverdiavgift (mva) </th>
                        <td className="">-31,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                        <td>301,262.93</td>
                    </tr>
                </tbody>
        </React.Fragment>
    );
}
 
export default TableBody;