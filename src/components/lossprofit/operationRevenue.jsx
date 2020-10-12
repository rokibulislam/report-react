import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const OperationRevenue = (props) => {
    const { t } = useTranslation();

    return ( 
    <React.Fragment>
        <table className="table" data-tid="">
            <thead className="thead-primary">
            <tr className="font-weight-bold">
                <th scope="col">{ t('Account') } </th>
                <th scope="col" className="month-name">Jan</th>
                <th scope="col" className="month-name">Feb</th>
                <th scope="col" className="month-name">Mar</th>
                <th scope="col" className="month-name">Apr</th>
                <th scope="col" className="month-name">May</th>
                <th scope="col" className="month-name">2020 up to and incl. 05-18</th>
                <th scope="col" className="month-name py-1" colspan="2">
                    <div className="">2019 up to and incl. 05-18</div>
                    <div className="d-flex flex-wrap border-top mt-1 pt-1">
                        <span className="w-50"> { t('Period') } </span>
                        <span className="w-50"> { t('Difference') }</span>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row" colspan="10"> { t('Operating Revenues') }</th>
            </tr>
            <tr>
                <th scope="row" className="color-green" colspan="8"> { t('Sales revenue') } </th>
            </tr>
            <tr>
                <th scope="row">3000 Salgsinntekt, avgiftspliktig </th>
                <td className="">161,696</td>
                <td>121,883</td>
                <td>158,499</td>
                <td>239,142</td>
                <td>16,000</td>
                <td>697,220</td>
                <td>617,122</td>
                <td>80,098</td>
            </tr>
            <tr>
                <th scope="row">3100 Salgsinntekt, avgiftsfri </th>
                <td className="">161,696</td>
                <td>121,883</td>
                <td>158,499</td>
                <td>239,142</td>
                <td>16,000</td>
                <td>697,220</td>
                <td>617,122</td>
                <td>80,098</td>
            </tr>
            <tr className="color-green">
                <th scope="row"> { t('Total Sales Revenue') } </th>
                <td className="">-31,262.93</td>
                <td>301,262.93</td>
                <td>301,262.93</td>
                <td>301,262.93</td>
                <td>301,262.93</td>
                <td>301,262.93</td>
                <td>301,262.93</td>
                <td>301,262.93</td>
            </tr>
            <tr>
                <th scope="row" className="color-green" colspan="12"> { t('Other operating revenues') }</th>
            </tr>
            <tr>
                <th scope="row">3805 { t('Total sale of fixed assets, duty free') }</th>
                <td className="">3,500</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>3,500</td>
                <td>13,525</td>
                <td>10,025</td>
            </tr>
                <tr>
                    <th scope="row">3900 { t('Other operating income') } </th>
                    <td className="">70</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>70</td>
                    <td>740</td>
                    <td>-670</td>
                </tr>
                <tr className="color-green">
                    <th scope="row"> { t('Total Other operating revenues') } </th>
                    <td className="">3,570</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>3,570</td>
                    <td>14,265</td>
                    <td>-10,695</td>
                </tr>
            </tbody>

            <tfoot className="tfoot-primary">
                <tr className="font-weight-bold">
                    <th scope="row"> { t('Operating Revenues') } </th>
                    <td>165,266</td>
                    <td>121,883</td>
                    <td>158,499</td>
                    <td>239,142</td>
                    <td>16,000</td>
                    <td>700,790</td>
                    <td>676,387</td>
                    <td>24,403</td>
                </tr>
            </tfoot>
        </table>
    </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        'profit': state.profit
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OperationRevenue);