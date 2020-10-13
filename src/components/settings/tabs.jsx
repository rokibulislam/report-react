import React from 'react';
import { useTranslation } from 'react-i18next';

const Tabs = () => {
    
    const { t } = useTranslation();

    return ( 
        <React.Fragment>
            <ul className="nav nav-tabs" id="settingsTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#profile" role="profile" aria-controls="home" aria-selected="true">
                        <span className="nav-icon">
                            <svg className="settings-nav-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="15" fill="#158385"/>
                                <path d="M21 22V20.4444C21 19.6193 20.6839 18.828 20.1213 18.2446C19.5587 17.6611 18.7956 17.3333 18 17.3333H12C11.2044 17.3333 10.4413 17.6611 9.87868 18.2446C9.31607 18.828 9 19.6193 9 20.4444V22M18 11.1111C18 12.8293 16.6569 14.2222 15 14.2222C13.3431 14.2222 12 12.8293 12 11.1111C12 9.39289 13.3431 8 15 8C16.6569 8 18 9.39289 18 11.1111Z" stroke="#2B9A9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span className="nav-text"> { t('Personal Information') } </span>
                    </a>
                </li>

                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#api" role="tab" aria-controls="api" aria-selected="false">
                        <span className="nav-icon">
                            <svg className="settings-nav-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="15" fill="#158385"/>
                                <path d="M22 8L14.3 15.7M22 8L17.1 22L14.3 15.7M22 8L8 12.9L14.3 15.7" stroke="#2B9A9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span className="nav-text"> { t('API Accounts')}</span>
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#billing" role="tab" aria-controls="billing" aria-selected="false">
                        <span className="nav-icon">
                            <svg className="settings-nav-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="30" rx="15" fill="#158385"/>
                                <path d="M15 8V22M18.3333 10.5455H13.3333C12.7145 10.5455 12.121 10.7801 11.6834 11.1978C11.2458 11.6155 11 12.182 11 12.7727C11 13.3634 11.2458 13.93 11.6834 14.3476C12.121 14.7653 12.7145 15 13.3333 15H16.6667C17.2855 15 17.879 15.2347 18.3166 15.6524C18.7542 16.07 19 16.6366 19 17.2273C19 17.818 18.7542 18.3845 18.3166 18.8022C17.879 19.2199 17.2855 19.4545 16.6667 19.4545H11" stroke="#2B9A9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span className="nav-text"> { t('Billing Info') } </span>
                    </a>
                </li>
            </ul>
        </React.Fragment>
    );
}
 
export default Tabs;