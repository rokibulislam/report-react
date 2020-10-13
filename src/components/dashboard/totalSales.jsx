import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import PieChart from './Pie'
import Action from './action'

const TotalSales = () => {
    
    const { t } = useTranslation();

    return ( 
    <React.Fragment>
        <div className="data-card w-100 p-4" id="card_2">
            <div className="data-card__header d-flex align-items-center justify-content-between">
                <h5 className="data-card__title"> { t('Total Sales') } </h5>
                <Action/>
            </div>

            <div className="data-card__body mt-4">
                <PieChart/>
                {/* <canvas id="myChart2" width="200" height="200"></canvas> */}
            </div>

            <div className="data-card__footer mt-3">
                
                <div className="data-line-item">
                    <div className="color-box color-box--blue"></div>
                    <div className="data-line-item__title"> { t('Profit') } </div>
                    <div className="data-line-item__price">$569.6</div>
                </div>
                
                
                <div className="data-line-item">
                    <div className="color-box color-box--blue"></div>
                    <div className="data-line-item__title"> { t('Salary of Employees') } </div>
                    <div className="data-line-item__price">$1780</div>
                </div>
                
                
                <div className="data-line-item">
                    <div className="color-box color-box--blue"></div>
                    <div className="data-line-item__title"> { t('Travel Coasts') } </div>
                    <div className="data-line-item__price">$234.07</div>
                </div>
                
                
                <div className="data-line-item">
                    <div className="color-box color-box--blue"></div>
                    <div className="data-line-item__title"> { t('Office coasts') } </div>
                    <div className="data-line-item__price">$1264</div>
                </div>
                
                
                <div className="data-line-item">
                    <div className="color-box color-box--blue"></div>
                    <div className="data-line-item__title"> { t('It, files or others') } </div>
                    <div className="data-line-item__price">$1264</div>
                </div>
                
            </div>
        </div>
    </React.Fragment>
     );
}


const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TotalSales);