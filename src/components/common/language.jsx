import React from 'react'
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Language = (props) => {

    const { t } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang)
    }

    return ( 
        <>
            <button onClick={()=>handleClick('en')} >
                { t('English') }
            </button>
            <button onClick={()=>handleClick('ko')} >
                { t('Norway') }
            </button>
        </>
    );
}
 
export default Language;