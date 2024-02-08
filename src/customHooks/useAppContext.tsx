import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";

export type Language = "en" | "rs";
export type ScreenSize =
  | "xx-large-screen" // > 1920px
  | "x-large-screen" // < 1920px
  | "large-screen" // < 1280px
  | "medium-screen" // < 720px
  | "small-screen" // < 480px
  | "x-small-screen" // < 400px
  | "xx-small-screen"; // < 350px

type AppContextProps = {
  language: Language;
  screenSize: ScreenSize;
  smallScreen: boolean;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  setScreenSize: React.Dispatch<React.SetStateAction<ScreenSize>>;
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [screenSize, setScreenSize] = useState<ScreenSize>("large-screen");
  const smallScreen =
    screenSize === "small-screen" ||
    screenSize === "x-small-screen" ||
    screenSize === "xx-small-screen";

  return (
    <AppContext.Provider
      value={{ language, screenSize, smallScreen, setLanguage, setScreenSize }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
