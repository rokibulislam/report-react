import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import Table from '../common/table'

const InvestmentActivity = () => {

    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Table/>
                {/* <table className="table" data-tid="">
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
                </table> */}
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
 
export default connect(mapStateToProps, mapDispatchToProps)(InvestmentActivity);