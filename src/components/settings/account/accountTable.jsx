import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const AccountTable = (props) => {
    const { t } = useTranslation();

    return ( 
        <React.Fragment>
            <div className="card card--all-accounts">
                <h5 className="card-title mb-3"> { t('All Accounts') }</h5>
                { 
                    props.apiAccount.map( account => {
                        return (
                            <div className="card card--account" key={account._id}>
                                <div className="card--account__info">
                                    <div className="card--account__name">
                                        <div className="label"> { t('Account Name') }</div>
                                        <div className="text"> { account.name } </div>
                                    </div>
                                    <div className="card--account__expdate">
                                        <div className="label"> { t('Expiration Date') }</div>
                                        <div className="date"> {account.expirationDate} </div>
                                    </div>
                                </div>
    
                                <div className="card--account__cta">
                                    <div className="card--account__edit">
                                        <button onClick={ () => props.editRow(account) } style={{background: "None",border: "None"}}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.26201 2.47598H2.39156C2.02249 2.47598 1.66855 2.62259 1.40758 2.88356C1.14661 3.14453 1 3.49848 1 3.86754V13.6084C1 13.9775 1.14661 14.3315 1.40758 14.5924C1.66855 14.8534 2.02249 15 2.39156 15H12.1325C12.5015 15 12.8555 14.8534 13.1164 14.5924C13.3774 14.3315 13.524 13.9775 13.524 13.6084V8.73799M12.4803 1.4323C12.7571 1.1555 13.1326 1 13.524 1C13.9155 1 14.2909 1.1555 14.5677 1.4323C14.8445 1.7091 15 2.08452 15 2.47597C15 2.86742 14.8445 3.24284 14.5677 3.51964L7.95779 10.1295L5.17467 10.8253L5.87045 8.0422L12.4803 1.4323Z" stroke="#BCC4D0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
    
                                    <div className="divider"></div>
    
                                    <div className="card--account__delete">
                                        <button onClick={ () => props.deleteAccount(account._id,account) } style={{background: "None",border: "None"}}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 3.8H2.55556M2.55556 3.8H15M2.55556 3.8V13.6C2.55556 13.9713 2.71944 14.3274 3.01117 14.5899C3.30289 14.8525 3.69855 15 4.11111 15H11.8889C12.3014 15 12.6971 14.8525 12.9888 14.5899C13.2806 14.3274 13.4444 13.9713 13.4444 13.6V3.8H2.55556ZM4.88889 3.8V2.4C4.88889 2.0287 5.05278 1.6726 5.3445 1.41005C5.63622 1.1475 6.03189 1 6.44444 1H9.55556C9.96811 1 10.3638 1.1475 10.6555 1.41005C10.9472 1.6726 11.1111 2.0287 11.1111 2.4V3.8M6.44444 7.3V11.5M9.55556 7.3V11.5" stroke="#BCC4D0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

// const mapStateToProps = state => {
//     return {
//         'apiAccount': state.apiAccount
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
        
//     }
// }
 
// export default connect(mapStateToProps, mapDispatchToProps)(AccountTable);

export default AccountTable;