import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Routes from './routes';
import { store } from './store'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_en from "./locales/en/translation.json";
import common_nor from "./locales/nor/translation.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: common_en
      },
      nor: {
        translation: common_nor
      },
    },
    lng: "nor",
    fallbackLng: "nor",

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>Loading</div>)}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);