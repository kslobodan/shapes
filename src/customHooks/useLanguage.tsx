import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";

export type Language = "en" | "rs";

type LanguageContextProps = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
