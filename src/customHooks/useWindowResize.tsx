import { useEffect } from "react";
import { useAppContext } from "./useAppContext";

const useWindowResize = () => {
  const { setScreenSize } = useAppContext();
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1920) setScreenSize("xx-large-screen");
      else if (screenWidth > 1280) setScreenSize("x-large-screen");
      else if (screenWidth > 720) setScreenSize("large-screen");
      else if (screenWidth >= 480) setScreenSize("medium-screen");
      else if (screenWidth < 480) setScreenSize("small-screen");
      else if (screenWidth < 400) setScreenSize("x-small-screen");
      else if (screenWidth < 350) setScreenSize("xx-small-screen");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setScreenSize]);
};

export default useWindowResize;
