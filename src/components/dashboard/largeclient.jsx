import React from 'react'
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import Client from './client';
import Action from './action'
import Item from './item'

const LargeClient = (props) => {
    const {  clients } = props;

    const { t } = useTranslation();

    return ( 
        <React.Fragment>
        <div className="row">
            <div className="col-12 col-lg-6 pl-0">
                {/* single card */}
                <div className="data-card w-100  p-4" id="card_4">
                    <div className="data-card__header d-flex align-items-center justify-content-between">
                        <h5 className="data-card__title"> { t('Largest Clients') } </h5>
                        <Action/>
                    </div>

                    <div className="data-card__body">
                        <div className="data-clients mt-2">
                            <table className="table">
                                <tbody>
                                    <Item/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* single card */}
            </div>

            <div className="col-12 col-lg-6">
                {/* single card */}
                <div className="data-card w-100  p-4" id="card_5">
                    <div className="data-card__header d-flex align-items-center justify-content-between">
                        <h5 className="data-card__title"> { t('Largest Transaction') }</h5>
                        <Action/>
                    </div>

                    <div className="data-card__body">
                        <div className="data-clients mt-2">
                            <table className="table">
                                <tbody>

                                {
                                    Object.keys(clients).map(client => (
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
                                            <td>
                                                <div className="data-clients__email">$98561221</div>
                                                <div className="data-clients__address color-light">Transaction name type.</div>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* single card */}
            </div>
        </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        'clients': state.client
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LargeClient);