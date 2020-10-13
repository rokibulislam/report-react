import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import { Doughnut } from 'react-chartjs-2';
import Chart from './Chart'
import Action from './action'

const Transaction = (props) => {
    const { count, increment, decrement } = props.transaction;
    const { t } = useTranslation();

    return ( 
    <React.Fragment>
        <div className="row">
        {/* single card */}
        <div className="col pl-0">
            <div className="data-card w-100 p-4" id="card_1">
                <div className="data-card__header d-flex align-items-center justify-content-between">
                    <h5 className="data-card__title"> { t('Transactions') } </h5>
                    <div className="card-filter-btn d-flex">
                        {/* filter */}
                        <button type="button" className="btn  data-card__filter data-card__filter--active">
                            <span className="color-dot color-dot--blue"></span>
                            <span className="card-filter-btn__label card-filter-btn__label--blue"> { t('Income') } </span>
                        </button>
                        {/* filter */}
                        {/* filter */}
                        <button type="button" className="btn  data-card__filter">
                            <span className="color-dot color-dot--orange"></span>
                            <span className="card-filter-btn__label card-filter-btn__label--orange"> { t('Expenses') } </span>
                        </button>
                        {/* filter */}
                        {/* filter  */}
                        <button type="button" className="btn  data-card__filter">
                            <span className="color-dot color-dot--green"></span>
                            <span className="card-filter-btn__label card-filter-btn__label--green"> { t('Profit') } </span>
                        </button>
                        {/* filter */}
                        {/* filter */}
                        <div className="data-card__filter data-card__filter-date">
                            <select className="custom-select">
                                <option selected>2020</option>
                                <option value="1">2019</option>
                                <option value="2">2018</option>
                                <option value="3">2017</option>
                            </select>
                        </div>
                        {/* filter */}
                        
                        <Action/>
                        
                    </div>
                </div>

                <div className="data-card__body mt-4">
                    <Chart/>
                    {/* <canvas id="myChart" width="400" height="200"></canvas> */}
                </div>
            </div>
        </div>
        {/* single card */}
    </div>
</React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        'transaction': state.transaction
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Transaction);