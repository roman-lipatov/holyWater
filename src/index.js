import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import "./index.scss"
import { PageProvider } from './components/context/Context';
import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json'
import global_fr from './translations/fr/global.json'
import global_ger from './translations/ger/global.json'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    },
    fr: {
      global: global_fr
    },
    ger: {
      global: global_ger
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </PageProvider>
  </React.StrictMode>
);
