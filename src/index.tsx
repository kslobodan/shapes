import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import global_en from "./translations/en/global.json";
import global_sr from "./translations/sr/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { Translation } from "./translations/Types";
import { AppProvider } from "./customHooks/useAppContext";

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
      <AppProvider>
        <App />
      </AppProvider>
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
