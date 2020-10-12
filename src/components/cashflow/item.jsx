import React from 'react'

const Item = (props) => {
    return ( 
    <React.Fragment>
        <tr>
            <th scope="row">Innbetaling fra kunder (salg av varer og tjenester)</th>
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
    </React.Fragment>
    );
}
 
export default props;