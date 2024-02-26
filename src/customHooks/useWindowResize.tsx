import { useEffect, useState } from "react";
import { useAppContext } from "./useAppContext";

const useWindowResize = () => {
  const { setScreenSize, screenSize } = useAppContext();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth: number = window.innerWidth;
      if (screenWidth > 1920) setScreenSize("xx-large-screen");
      else if (screenWidth > 1280) setScreenSize("x-large-screen");
      else if (screenWidth > 720) setScreenSize("large-screen");
      else if (screenWidth >= 480) setScreenSize("medium-screen");
      else if (screenWidth < 480) setScreenSize("small-screen");
      else if (screenWidth < 400) setScreenSize("x-small-screen");
      else if (screenWidth < 350) setScreenSize("xx-small-screen");
      console.log("screenSize1: ", screenSize);
    };

    if (initialLoad) {
      handleResize();
      setInitialLoad(false);
    }

    const debouncedHandleResize = debounce(handleResize, 200);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [setScreenSize, initialLoad]);
};

export default useWindowResize;

function debounce(func: Function, wait: number): () => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]): void {
    const later = (): void => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
