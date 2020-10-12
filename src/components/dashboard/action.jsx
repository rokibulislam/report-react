import React from 'react';
import { useTranslation } from "react-i18next";

const Action = () => {

    const { t } = useTranslation();

    return ( 
        <div className="data-card__options dropdown ml-3">
            <button className="btn " type="button" id="card_3_dd" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="4" height="4" rx="2" fill="#BCC4D0"/>
                    <rect x="7" width="4" height="4" rx="2" fill="#BCC4D0"/>
                    <rect x="14" width="4" height="4" rx="2" fill="#BCC4D0"/>
                </svg>
            </button>

            <div className="dropdown-menu" aria-labelledby="card_3_dd">
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#cardOptionsModal"> { t('Options') }</a>
                <a className="dropdown-item" href="#"> { t('Archive') }</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" href="#" data-toggle="modal" data-target="#exampleModal"> { t('Delete card') } </a>
            </div>
        </div>
    );
}
 
export default Action;