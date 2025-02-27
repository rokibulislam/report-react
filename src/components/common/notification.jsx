import React from 'react'

const Notification = () => {
    return ( 
        <React.Fragment>
            <button class="btn btn-link has-notification">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.7499 16.5204C8.8798 16.5204 9.80425 15.6204 9.80425 14.5204H5.69556C5.69556 15.6204 6.60974 16.5204 7.7499 16.5204Z" stroke="#2D2D2D" stroke-width="1.5"/>
                    <path d="M12.6413 11.9286V7.88095C12.6413 5.39571 11.2776 3.31524 8.89946 2.76476V2.21429C8.89946 1.54238 8.34234 1 7.65217 1C6.96201 1 6.40489 1.54238 6.40489 2.21429V2.76476C4.01842 3.31524 2.66304 5.38762 2.66304 7.88095V11.9286L1 13.5476V14.3571H14.3043V13.5476L12.6413 11.9286Z" stroke="#2D2D2D" stroke-width="1.5"/>
                    <path class="new-activity" d="M17.9999 12.4285C17.9999 14.3759 16.3708 16 14.3043 16C12.2378 16 10.6086 14.3759 10.6086 12.4285C10.6086 10.4812 12.2378 8.85712 14.3043 8.85712C16.3708 8.85712 17.9999 10.4812 17.9999 12.4285Z" fill="#F64831" stroke="#F64831" stroke-width="2"/>
                </svg>
            </button>
        </React.Fragment>
    );
}
 
export default Notification;