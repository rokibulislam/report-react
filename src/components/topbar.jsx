import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import TopbarMenu from './topbarMenu';

const Topbar = () => {

    const { t } = useTranslation();

    return ( 
        <React.Fragment>
        {/* START top bar  */}
        <div className="top-bar">
            <div className="app-controls">
                {/* add widget btn */}
                <button className="btn btn-link ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.97231 1H2.02769C1.46092 1 1 1.46092 1 2.02769V7.97231C1 8.53908 1.46092 9 2.02769 9H7.97231C8.53908 9 9 8.53908 9 7.97231V2.02769C9 1.46092 8.53908 1 7.97231 1ZM8.38462 7.97231C8.38462 8.19969 8.19969 8.38462 7.97231 8.38462H2.02769C1.80031 8.38462 1.61538 8.19969 1.61538 7.97231V2.02769C1.61538 1.80031 1.80031 1.61538 2.02769 1.61538H7.97231C8.19969 1.61538 8.38462 1.80031 8.38462 2.02769V7.97231Z" fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.6"/>
                        <path d="M17.9723 1H12.0277C11.4609 1 11 1.46092 11 2.02769V7.97231C11 8.53908 11.4609 9 12.0277 9H17.9723C18.5391 9 19 8.53908 19 7.97231V2.02769C19 1.46092 18.5391 1 17.9723 1ZM18.3846 7.97231C18.3846 8.19969 18.1997 8.38462 17.9723 8.38462H12.0277C11.8003 8.38462 11.6154 8.19969 11.6154 7.97231V2.02769C11.6154 1.80031 11.8003 1.61538 12.0277 1.61538H17.9723C18.1997 1.61538 18.3846 1.80031 18.3846 2.02769V7.97231Z" fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.6"/>
                        <path d="M7.97231 11H2.02769C1.46092 11 1 11.4609 1 12.0277V17.9723C1 18.5391 1.46092 19 2.02769 19H7.97231C8.53908 19 9 18.5391 9 17.9723V12.0277C9 11.4609 8.53908 11 7.97231 11ZM8.38462 17.9723C8.38462 18.1997 8.19969 18.3846 7.97231 18.3846H2.02769C1.80031 18.3846 1.61538 18.1997 1.61538 17.9723V12.0277C1.61538 11.8003 1.80031 11.6154 2.02769 11.6154H7.97231C8.19969 11.6154 8.38462 11.8003 8.38462 12.0277V17.9723Z" fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.6"/>
                        <path d="M18.6923 14.6923H15.3077V11.3077C15.3077 11.1375 15.1702 11 15 11C14.8298 11 14.6923 11.1375 14.6923 11.3077V14.6923H11.3077C11.1375 14.6923 11 14.8298 11 15C11 15.1702 11.1375 15.3077 11.3077 15.3077H14.6923V18.6923C14.6923 18.8625 14.8298 19 15 19C15.1702 19 15.3077 18.8625 15.3077 18.6923V15.3077H18.6923C18.8625 15.3077 19 15.1702 19 15C19 14.8298 18.8625 14.6923 18.6923 14.6923Z" fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.6"/>
                    </svg>
                </button>

                {/* add page btn */}
                <button className="btn btn-link ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.2969 9.29688H10.7031V1.70312C10.7031 1.31479 10.3883 1 10 1C9.61166 1 9.29688 1.31479 9.29688 1.70312V9.29688H1.70312C1.31479 9.29688 1 9.61166 1 10C1 10.3883 1.31479 10.7031 1.70312 10.7031H9.29688V18.2969C9.29688 18.6852 9.61166 19 10 19C10.3883 19 10.7031 18.6852 10.7031 18.2969V10.7031H18.2969C18.6852 10.7031 19 10.3883 19 10C19 9.61166 18.6852 9.29688 18.2969 9.29688Z" fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.4"/>
                    </svg>
                </button>

                {/* share link (public) btn */}
                <button className="btn btn-link ">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5717 8.71489C11.3522 8.92707 11.3522 9.26737 11.5717 9.47956C12.4789 10.3563 12.4789 11.7816 11.5717 12.6584L6.80781 17.2625C5.9006 18.1392 4.42586 18.1392 3.51865 17.2625L2.80199 16.5698C1.89478 15.6931 1.89478 14.2678 2.80199 13.391L7.56589 8.78695C7.78545 8.57476 7.78545 8.23446 7.56589 8.02227C7.34634 7.81008 6.99423 7.81008 6.77467 8.02227L2.01077 12.6264C1.3604 13.2549 1 14.0917 1 14.9804C1 15.8692 1.35625 16.706 2.01077 17.3345L2.72743 18.0271C3.39852 18.6757 4.28087 19 5.16323 19C6.04559 19 6.92794 18.6757 7.59903 18.0271L12.3629 13.4231C13.7051 12.1259 13.7051 10.012 12.3629 8.71489C12.1475 8.5027 11.7913 8.5027 11.5717 8.71489Z" fill="#2D2D2D"/>
                        <path d="M19.9934 2.66548L19.2767 1.97286C17.9345 0.675713 15.7473 0.675713 14.4051 1.97286L9.64122 6.57694C8.29904 7.87409 8.29904 9.98796 9.64122 11.2851C9.86077 11.4973 10.2129 11.4973 10.4324 11.2851C10.652 11.0729 10.652 10.7326 10.4324 10.5204C9.52522 9.64366 9.52522 8.2184 10.4324 7.34162L15.1963 2.73754C16.1035 1.86076 17.5783 1.86076 18.4855 2.73754L19.2021 3.43015C20.1094 4.30693 20.1094 5.73219 19.2021 6.60897L14.4382 11.213C14.2187 11.4252 14.2187 11.7655 14.4382 11.9777C14.546 12.0818 14.6909 12.1379 14.8318 12.1379C14.9726 12.1379 15.1176 12.0858 15.2253 11.9777L19.9892 7.37365C20.6396 6.74509 21 5.90835 21 5.01956C21 4.13077 20.6437 3.29403 19.9934 2.66548Z" fill="#2D2D2D"/>
                        <path d="M11.5717 8.71489C11.3522 8.92707 11.3522 9.26737 11.5717 9.47956C12.4789 10.3563 12.4789 11.7816 11.5717 12.6584L6.80781 17.2625C5.9006 18.1392 4.42586 18.1392 3.51865 17.2625L2.80199 16.5698C1.89478 15.6931 1.89478 14.2678 2.80199 13.391L7.56589 8.78695C7.78545 8.57476 7.78545 8.23446 7.56589 8.02227C7.34634 7.81008 6.99423 7.81008 6.77467 8.02227L2.01077 12.6264C1.3604 13.2549 1 14.0917 1 14.9804C1 15.8692 1.35625 16.706 2.01077 17.3345L2.72743 18.0271C3.39852 18.6757 4.28087 19 5.16323 19C6.04559 19 6.92794 18.6757 7.59903 18.0271L12.3629 13.4231C13.7051 12.1259 13.7051 10.012 12.3629 8.71489C12.1475 8.5027 11.7913 8.5027 11.5717 8.71489Z" stroke="#2D2D2D" stroke-width="0.5"/>
                        <path d="M19.9934 2.66548L19.2767 1.97286C17.9345 0.675713 15.7473 0.675713 14.4051 1.97286L9.64122 6.57694C8.29904 7.87409 8.29904 9.98796 9.64122 11.2851C9.86077 11.4973 10.2129 11.4973 10.4324 11.2851C10.652 11.0729 10.652 10.7326 10.4324 10.5204C9.52522 9.64366 9.52522 8.2184 10.4324 7.34162L15.1963 2.73754C16.1035 1.86076 17.5783 1.86076 18.4855 2.73754L19.2021 3.43015C20.1094 4.30693 20.1094 5.73219 19.2021 6.60897L14.4382 11.213C14.2187 11.4252 14.2187 11.7655 14.4382 11.9777C14.546 12.0818 14.6909 12.1379 14.8318 12.1379C14.9726 12.1379 15.1176 12.0858 15.2253 11.9777L19.9892 7.37365C20.6396 6.74509 21 5.90835 21 5.01956C21 4.13077 20.6437 3.29403 19.9934 2.66548Z" stroke="#2D2D2D" stroke-width="0.5"/>
                    </svg>
                </button>

                {/* change page background btn */}
                <button className="btn btn-link ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 17.1022C1 18.1504 1.85329 19 2.89783 19H17.1022C18.1504 19 19 18.1467 19 17.1022V2.89783C19 1.84961 18.1467 1 17.1022 1H2.89783C1.84961 1 1 1.85329 1 2.89783V17.1022ZM17.1022 18.0989H2.89783C2.34982 18.0989 1.9011 17.6502 1.9011 17.1022V14.7299L5.31426 11.3167L8.2309 14.2333C8.40744 14.4099 8.69064 14.4099 8.86718 14.2333L14.134 8.96649L18.0989 12.9313V17.1022C18.0989 17.6502 17.6502 18.0989 17.1022 18.0989ZM2.89783 1.9011H17.1022C17.6502 1.9011 18.0989 2.34982 18.0989 2.89783V11.6551L14.4503 8.01022C14.2738 7.83367 13.9906 7.83367 13.8141 8.01022L8.5472 13.2771L5.63057 10.3604C5.45403 10.1839 5.17082 10.1839 4.99428 10.3604L1.9011 13.4536V2.89783C1.9011 2.34982 2.34982 1.9011 2.89783 1.9011Z" fill="#2D2D2D"/>
                        <path d="M6.57988 8.21259C7.8451 8.21259 8.87125 7.18275 8.87125 5.92121C8.87125 4.65966 7.84142 3.62983 6.57988 3.62983C5.31833 3.62983 4.2885 4.65966 4.2885 5.92121C4.2885 7.18275 5.31465 8.21259 6.57988 8.21259ZM6.57988 4.53094C7.34857 4.53094 7.97015 5.15619 7.97015 5.92121C7.97015 6.68623 7.34489 7.31148 6.57988 7.31148C5.81486 7.31148 5.1896 6.68623 5.1896 5.92121C5.1896 5.15619 5.81118 4.53094 6.57988 4.53094Z" fill="#2D2D2D"/>
                        <path d="M1 17.1022C1 18.1504 1.85329 19 2.89783 19H17.1022C18.1504 19 19 18.1467 19 17.1022V2.89783C19 1.84961 18.1467 1 17.1022 1H2.89783C1.84961 1 1 1.85329 1 2.89783V17.1022ZM17.1022 18.0989H2.89783C2.34982 18.0989 1.9011 17.6502 1.9011 17.1022V14.7299L5.31426 11.3167L8.2309 14.2333C8.40744 14.4099 8.69064 14.4099 8.86718 14.2333L14.134 8.96649L18.0989 12.9313V17.1022C18.0989 17.6502 17.6502 18.0989 17.1022 18.0989ZM2.89783 1.9011H17.1022C17.6502 1.9011 18.0989 2.34982 18.0989 2.89783V11.6551L14.4503 8.01022C14.2738 7.83367 13.9906 7.83367 13.8141 8.01022L8.5472 13.2771L5.63057 10.3604C5.45403 10.1839 5.17082 10.1839 4.99428 10.3604L1.9011 13.4536V2.89783C1.9011 2.34982 2.34982 1.9011 2.89783 1.9011Z" stroke="#2D2D2D" stroke-width="0.5"/>
                        <path d="M6.57988 8.21259C7.8451 8.21259 8.87125 7.18275 8.87125 5.92121C8.87125 4.65966 7.84142 3.62983 6.57988 3.62983C5.31833 3.62983 4.2885 4.65966 4.2885 5.92121C4.2885 7.18275 5.31465 8.21259 6.57988 8.21259ZM6.57988 4.53094C7.34857 4.53094 7.97015 5.15619 7.97015 5.92121C7.97015 6.68623 7.34489 7.31148 6.57988 7.31148C5.81486 7.31148 5.1896 6.68623 5.1896 5.92121C5.1896 5.15619 5.81118 4.53094 6.57988 4.53094Z" stroke="#2D2D2D" stroke-width="0.5"/>
                    </svg>
                </button>

                {/* edit board name btn */}
                <button className="btn btn-link ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6139 12.2961C17.3663 12.2961 17.1657 12.4978 17.1657 12.7466V16.7471C17.1648 17.4933 16.5632 18.098 15.8207 18.0987H3.24154C2.49903 18.098 1.89748 17.4933 1.89659 16.7471V5.00613C1.89748 4.26008 2.49903 3.65535 3.24154 3.65447H7.22204C7.46967 3.65447 7.67039 3.45278 7.67039 3.20392C7.67039 2.95524 7.46967 2.75337 7.22204 2.75337H3.24154C2.00414 2.75478 1.0014 3.76254 1 5.00613V16.7472C1.0014 17.9908 2.00414 18.9986 3.24154 19H15.8207C17.0581 18.9986 18.0608 17.9908 18.0622 16.7472V12.7466C18.0622 12.4978 17.8615 12.2961 17.6139 12.2961Z" fill="#2D2D2D"/>
                        <path d="M17.8849 1.59386C17.097 0.802047 15.8196 0.802047 15.0318 1.59386L7.0337 9.63198C6.97889 9.68707 6.93931 9.75536 6.91864 9.83034L5.86684 13.6465C5.82359 13.8029 5.8675 13.9705 5.98168 14.0854C6.09603 14.2002 6.26281 14.2443 6.41848 14.201L10.2156 13.1438C10.2902 13.1231 10.3581 13.0833 10.413 13.0282L18.4109 4.98989C19.1976 4.19755 19.1976 2.91489 18.4109 2.12255L17.8849 1.59386ZM8.01048 9.92485L14.5564 3.34608L16.6674 5.46772L10.1213 12.0465L8.01048 9.92485ZM7.58875 10.7753L9.27535 12.4705L6.9424 13.1201L7.58875 10.7753ZM17.777 4.35278L17.3016 4.83061L15.1903 2.7088L15.6659 2.23097C16.1035 1.79115 16.8131 1.79115 17.2508 2.23097L17.777 2.75966C18.2139 3.2 18.2139 3.91261 17.777 4.35278Z" fill="#2D2D2D"/>
                        <path d="M17.6139 12.2961C17.3663 12.2961 17.1657 12.4978 17.1657 12.7466V16.7471C17.1648 17.4933 16.5632 18.098 15.8207 18.0987H3.24154C2.49903 18.098 1.89748 17.4933 1.89659 16.7471V5.00613C1.89748 4.26008 2.49903 3.65535 3.24154 3.65447H7.22204C7.46967 3.65447 7.67039 3.45278 7.67039 3.20392C7.67039 2.95524 7.46967 2.75337 7.22204 2.75337H3.24154C2.00414 2.75478 1.0014 3.76254 1 5.00613V16.7472C1.0014 17.9908 2.00414 18.9986 3.24154 19H15.8207C17.0581 18.9986 18.0608 17.9908 18.0622 16.7472V12.7466C18.0622 12.4978 17.8615 12.2961 17.6139 12.2961Z" stroke="#2D2D2D" stroke-width="0.5"/>
                        <path d="M17.8849 1.59386C17.097 0.802047 15.8196 0.802047 15.0318 1.59386L7.0337 9.63198C6.97889 9.68707 6.93931 9.75536 6.91864 9.83034L5.86684 13.6465C5.82359 13.8029 5.8675 13.9705 5.98168 14.0854C6.09603 14.2002 6.26281 14.2443 6.41848 14.201L10.2156 13.1438C10.2902 13.1231 10.3581 13.0833 10.413 13.0282L18.4109 4.98989C19.1976 4.19755 19.1976 2.91489 18.4109 2.12255L17.8849 1.59386ZM8.01048 9.92485L14.5564 3.34608L16.6674 5.46772L10.1213 12.0465L8.01048 9.92485ZM7.58875 10.7753L9.27535 12.4705L6.9424 13.1201L7.58875 10.7753ZM17.777 4.35278L17.3016 4.83061L15.1903 2.7088L15.6659 2.23097C16.1035 1.79115 16.8131 1.79115 17.2508 2.23097L17.777 2.75966C18.2139 3.2 18.2139 3.91261 17.777 4.35278Z" stroke="#2D2D2D" stroke-width="0.5"/>
                    </svg>
                </button>

                {/* export as pdf btn */}
                <button className="btn btn-link ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8912 12.8515V16.5902C15.8912 17.9189 14.8475 19 13.5645 19H3.32674C2.04384 19 1 17.9189 1 16.5902V5.98696C1 4.65815 2.04384 3.57704 3.32674 3.57704H7.21321C7.53453 3.57704 7.79495 3.84688 7.79495 4.17955C7.79495 4.51234 7.53453 4.78206 7.21321 4.78206H3.32674C2.68523 4.78206 2.16337 5.32256 2.16337 5.98696V16.5902C2.16337 17.2546 2.68523 17.7951 3.32674 17.7951H13.5645C14.206 17.7951 14.7278 17.2546 14.7278 16.5902V12.8515C14.7278 12.5187 14.9883 12.249 15.3096 12.249C15.6308 12.249 15.8912 12.5187 15.8912 12.8515ZM17.6652 4.43068C17.7757 4.54447 17.8366 4.69545 17.8366 4.85573C17.8366 5.01612 17.7757 5.16699 17.6652 5.28078L15.3324 7.68164C15.1046 7.91617 15.1035 8.29768 15.3299 8.53363C15.4435 8.65213 15.5931 8.71144 15.7425 8.71144C15.8908 8.71144 16.039 8.65307 16.1525 8.53633L18.4853 6.13547C18.8172 5.79374 19 5.33938 19 4.85573C19 4.37207 18.8172 3.9176 18.4853 3.57598L16.1525 1.17512C15.9247 0.940591 15.5564 0.941767 15.3299 1.17783C15.1035 1.41389 15.1046 1.79528 15.3324 2.02982L17.6652 4.43068ZM16.4114 4.82701C16.4114 4.49422 16.1509 4.2245 15.8297 4.2245C13.7322 4.2245 11.7602 5.07049 10.277 6.60665C8.79374 8.14282 7.97692 10.1852 7.97692 12.3577V12.8096C7.97692 13.1422 8.23734 13.412 8.55866 13.412C8.87986 13.412 9.14028 13.1422 9.14028 12.8096V12.3577C9.14028 8.53739 12.1411 5.42941 15.8297 5.42941C16.1509 5.42941 16.4114 5.15969 16.4114 4.82701Z" fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.5"/>
                    </svg>
                </button>

                {/* delete board btn */}
                <button className="btn btn-link ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.914287" y="2.30779" width="1.9" height="18" rx="0.95" transform="rotate(-45 0.914287 2.30779)" fill="#2D2D2D"/>
                        <rect x="13.7279" y="1" width="1.9" height="18" rx="0.95" transform="rotate(45 13.7279 1)" fill="#2D2D2D"/>
                    </svg>
                </button>
            </div>
            {/* app-controls */}

            <div className="filters">
                {/* select a page to display */}
                <div className="select-board filter-item">
                    <select className="custom-select">
                        <option selected>Company One</option>
                        <option value="1">Company Zero</option>
                        <option value="2">Company Two</option>
                        <option value="3">Company Three</option>
                    </select>
                </div>

                {/* <date range selector */}
                <div className="select-date filter-item">
                    <select className="custom-select">
                        <option selected>Apr 9,2020 - May 9,2020</option>
                        <option value="1">June 9,2020 - Aug 9,2020</option>
                        <option value="2">July 9,2020 - Sep 9,2020</option>
                        <option value="3">Jan 9,2020 - Dec 9,2020</option>
                    </select>
                </div>

                {/* date range shortcuts */}
                <div className="select-date-shortcut filter-item">
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group mr-2" role="group" aria-label="First group">
                            <button type="button" className="btn btn-outline-secondary"> { t('Daily') } </button>
                            <button type="button" className="btn btn-outline-secondary"> { t('Weekly') } </button>
                            <button type="button" className="btn btn-outline-secondary active"> { t('Monthly') }</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* filters */}

            <div className="user-controls">
                {/* help/docs link */}
                <button className="btn btn-link">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.67212 6.59998C6.8602 6.06531 7.23144 5.61447 7.72008 5.32729C8.20872 5.04011 8.78324 4.93513 9.34186 5.03095C9.90048 5.12677 10.4072 5.4172 10.7722 5.8508C11.1372 6.2844 11.337 6.8332 11.3361 7.39998C11.3361 8.99998 8.93612 9.79998 8.93612 9.79998" stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 13H9.008" stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

                {/* notifications link */}
                <button className="btn btn-link has-notification">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.7499 16.5204C8.8798 16.5204 9.80425 15.6204 9.80425 14.5204H5.69556C5.69556 15.6204 6.60974 16.5204 7.7499 16.5204Z" stroke="#2D2D2D" stroke-width="1.5"/>
                        <path d="M12.6413 11.9286V7.88095C12.6413 5.39571 11.2776 3.31524 8.89946 2.76476V2.21429C8.89946 1.54238 8.34234 1 7.65217 1C6.96201 1 6.40489 1.54238 6.40489 2.21429V2.76476C4.01842 3.31524 2.66304 5.38762 2.66304 7.88095V11.9286L1 13.5476V14.3571H14.3043V13.5476L12.6413 11.9286Z" stroke="#2D2D2D" stroke-width="1.5"/>
                        <path className="new-activity" d="M17.9999 12.4285C17.9999 14.3759 16.3708 16 14.3043 16C12.2378 16 10.6086 14.3759 10.6086 12.4285C10.6086 10.4812 12.2378 8.85712 14.3043 8.85712C16.3708 8.85712 17.9999 10.4812 17.9999 12.4285Z" fill="#2B9A9C" stroke="#E9F7FA" stroke-width="2"/>
                    </svg>
                </button>

                <div className="divider divider--vertical mx-3"></div>

                <TopbarMenu/>
            </div>
            {/* user-controls */}
        </div>
        {/* END top bar */}

        {/* divider */}
        <div className="divider divider--full my-3"></div>
        {/* divider */}
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Topbar);