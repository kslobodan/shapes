import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import global_en from "./translations/en/global.json";
import global_sr from "./translations/sr/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { Translation } from "./Types";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "en",
  resources: {
    en: {
      global: global_en as Translation,
    },
    sr: {
      global: global_sr as Translation,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
