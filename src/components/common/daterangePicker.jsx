import React from 'react';

const DateRangePicker = (props) => {

    const datechange = (event) => {
        console.log(event);
    }

    return ( 
        <React.Fragment>
            <div className="data-table__options d-flex align-content-center justify-content-end">
                <div className="form-group">
                    <select className="custom-select" onChange={datechange}>
                        <option selected>Year 2020</option>
                        <option value="1">Year 2019</option>
                        <option value="2">Year 2018</option>
                        <option value="3">Year 2017</option>
                    </select>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default DateRangePicker;