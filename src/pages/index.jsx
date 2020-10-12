import React from 'react'
import { useTranslation } from "react-i18next";
import Layout from '../layout/Layout'

const Home = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            {t('Thanks')}
            <h2>{t('Welcome to React')}</h2>
        </Layout>
    );
}
 
export default Home;