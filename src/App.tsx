import "./styles/Main.scss";
import Home from "./pages/Home";
import useWindowResize from "./customHooks/useWindowResize";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppContext } from "./customHooks/useAppContext";
import { useEffect } from "react";
import i18next, { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

function App() {
  useWindowResize();

  const { language } = useAppContext();
  const [translate, i18n] = useTranslation("global");

  useEffect(() => {
    const urlParts = window.location.href.split("/");
    const language = urlParts[3]; // Assuming '/en' is at the third position, adjust as needed
    if (language === "") {
      window.history.pushState({}, "", window.location.origin + "/en");
      i18n.changeLanguage("en");
    } else i18n.changeLanguage(language);
  }, [i18n.language]);

  useEffect(() => {
    const metaDescription = document.getElementById("metaDescription");
    if (metaDescription) {
      metaDescription.setAttribute("content", translate("index.description"));
    }
  }, [i18n.language]);

  useEffect(() => {
    document.title = translate("index.title");
  }, [i18n.language]);

  // return <Home />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${i18next.language}`} element={<Home />} />
        <Route path={`/sr`} element={<Home />} />
        <Route path={`/en`} element={<Home />} />
        <Route path={`/`} element={<Home />} />
        <Route
          // path={`/:lang(${i18next.languages.join("|")})/`}
          path={`/:lang(${i18next.languages[0]})/`}
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
