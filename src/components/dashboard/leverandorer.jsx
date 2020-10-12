import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import Action from './action'
import Item from './item'


const leverandorer = () => {
    
    // const { t } = useTranslation();

    return (
    <React.Fragment>
        {/* single card */}
        <div className="data-card w-100 p-4 mt-4" id="card_6">
            <div className="data-card__header d-flex align-items-center justify-content-between">
                <h5 className="data-card__title"> Top 10 Leverandorer </h5>
                <Action/>
            </div>

            <div className="data-card__body">
                <div className="data-card__body">
                    <div className="data-clients mt-2">
                        <table className="table">
                            <tbody>
                                {/* <Item/> */}
                                <tr>
                                    <th scope="row">
                                        <div className="data-clients__img">
                                            <div className="icon icon--image">
                                                <img src="images/logos/edge.jpg" alt="company_name_here"/>
                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="data-clients__name">Soly Group</div>
                                        <div className="data-clients__address color-light">Oslo, Norway</div>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">
                                        <div className="data-clients__img">
                                            <div className="icon icon--image">AG</div>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="data-clients__name">Abcd Group</div>
                                        <div className="data-clients__address color-light">Oslo, Norway</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* info card */}
            </div>
        </div>
        {/* single card */}
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
 
export default connect(mapStateToProps, mapDispatchToProps)(leverandorer);