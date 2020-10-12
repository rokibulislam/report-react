import React  from 'react'
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import Action from './action'

const Card = () => {
    
    const { t } = useTranslation();

    return ( 
    <React.Fragment>                    
        <div className="data-card w-100 p-4" id="card_3">
            <div className="data-card__header d-flex align-items-center justify-content-between">
                <h5 className="data-card__title"> { t('Customers') }</h5>
                <Action/>
            </div>

            <div className="data-card__body">
                
                <div className="sm-info-card sm-info-card--theme-blue">
                    <div className="head d-flex justify-content-between align-items-center">
                        <div className="num">36,682</div>
                        <div className="info-icon">
                            <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                    <rect className="theme-color" x="20" y="14" width="36" height="36" rx="5" fill="#5B76F9"/>
                                </g>
                                <path d="M32.5 28.3158C32.5 30.1439 34.0703 31.6316 36 31.6316C37.9297 31.6316 39.5 30.1439 39.5 28.3158C39.5 26.4877 37.9297 25 36 25C34.0703 25 32.5 26.4877 32.5 28.3158ZM42.2222 39H43V38.2632C43 35.4197 40.557 33.1053 37.5556 33.1053H34.4444C31.4422 33.1053 29 35.4197 29 38.2632V39H29.7778H30.5556H41.4444H42.2222Z" fill="white"/>
                                <path opacity="0.6" d="M36.5 28.3158C36.5 30.1439 38.0703 31.6316 40 31.6316C41.9297 31.6316 43.5 30.1439 43.5 28.3158C43.5 26.4877 41.9297 25 40 25C38.0703 25 36.5 26.4877 36.5 28.3158ZM46.2222 39H47V38.2632C47 35.4197 44.557 33.1053 41.5556 33.1053H38.4444C35.4422 33.1053 33 35.4197 33 38.2632V39H33.7778H34.5556H45.4444H46.2222Z" fill="white"/>
                                <defs>
                                    <filter id="filter0_d" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dy="6"/>
                                        <feGaussianBlur stdDeviation="10"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.168627 0 0 0 0 0.603922 0 0 0 0 0.611765 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="foot">
            <span className="arrow-up">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="theme-color" d="M0.777462 8.39474H2.33302H3.88857V10.4967V13.2993C3.88857 13.6868 4.23624 14 4.66635 14H9.33302C9.76313 14 10.1108 13.6868 10.1108 13.2993V9.79606V8.39474H10.8886H13.2219C13.5214 8.39474 13.7928 8.2399 13.9227 7.99817C14.0518 7.75504 14.016 7.46707 13.8294 7.25618L7.60713 0.249609C7.3108 -0.083203 6.68857 -0.083203 6.39224 0.249609L0.170018 7.25618C-0.0166491 7.46707 -0.052427 7.75504 0.0766841 7.99817C0.206573 8.2399 0.478017 8.39474 0.777462 8.39474Z" fill="#5B76F9"/>
                </svg>
            </span>
                        <span className="percent-num">5.27%</span>
                        <span className="time-frame"> { t('Since last month') } </span>
                    </div>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Card);