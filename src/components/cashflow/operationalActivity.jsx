import React from 'react'
import { connect } from 'react-redux';

const OperationalActivity = () => {
    return (  
        <React.Fragment>
            <table className="table" data-tid="first-table">
                <thead className="thead-primary">
                    <tr className="font-weight-bold">
                        <th scope="col">Kontantstrøm Fra Operasjonelle Aktiviteter (Drift)</th>
                        <th scope="col" className="month-name">Jan</th>
                        <th scope="col" className="month-name">Feb</th>
                        <th scope="col" className="month-name">Mar</th>
                        <th scope="col" className="month-name">Apr</th>
                        <th scope="col" className="month-name">May</th>
                        <th scope="col" className="month-name">Jun</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>

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
            </table>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        'cashflow': state.cashflow
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OperationalActivity);