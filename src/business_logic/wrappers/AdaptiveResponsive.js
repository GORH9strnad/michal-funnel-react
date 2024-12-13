import { createContext, useContext, useEffect, useRef, useState } from "react";

const AdaptiveResponsiveContext = createContext();

function AdaptiveResponsive({ children }) {
  const [currentInnerWidth, setCurrentInnerWidth] = useState(window.innerWidth);
  const [currentInnerHeight, setCurrentInnerHeight] = useState(
    window.innerHeight
  );

  const [device, setDevice] = useState("mobile");

  const [widthScaleRatio, setWidthScaleRatio] = useState(1.0);
  const [heightScaleRatio, setHeightScaleRatio] = useState(1.0);
  const [scaleFactor, setScaleFactor] = useState(1.0);

  const adaptiveResponsiveRef = useRef(null);

  const maxWidth = 1920;
  const maxWidthTablet = 1920;
  const maxWidthMobile = 768;

  const maxHeight = 963;

  useEffect(() => {
    if (currentInnerWidth <= 1250 && currentInnerWidth > 768) {
      setDevice("tablet");
    } else if (currentInnerWidth <= 768) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
  }, [currentInnerWidth, currentInnerHeight]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrentInnerWidth(window.innerWidth);
      setCurrentInnerHeight(window.innerHeight);
    });
    window.addEventListener("orientationchange", () => {
      setCurrentInnerWidth(window.innerWidth);
      setCurrentInnerHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    if (device === "mobile") {
      setWidthScaleRatio(currentInnerWidth / maxWidthMobile);
    } else if (device === "tablet") {
      setWidthScaleRatio(currentInnerWidth / maxWidthTablet);
    } else {
      setWidthScaleRatio(currentInnerWidth / maxWidth);
      setHeightScaleRatio(currentInnerHeight / maxHeight);
    }
    setScaleFactor((widthScaleRatio + heightScaleRatio) / 2);
  }, [
    currentInnerWidth,
    currentInnerHeight,
    device,
    widthScaleRatio,
    heightScaleRatio,
  ]);

  useEffect(() => {
    adaptiveResponsiveRef.current.style.setProperty(
      "--widthScaleRatio",
      widthScaleRatio
    );
    adaptiveResponsiveRef.current.style.setProperty(
      "--heightScaleRatio",
      heightScaleRatio
    );
    adaptiveResponsiveRef.current.style.setProperty(
      "--scaleFactor",
      scaleFactor
    );
  }, [widthScaleRatio, heightScaleRatio, scaleFactor]);

  useEffect(() => {
    adaptiveResponsiveRef.current.style.setProperty("--maxHeight", maxHeight);
    adaptiveResponsiveRef.current.style.setProperty("--maxWidth", maxWidth);
  }, []);

  useEffect(() => {
    console.log("device: ", device);
  }, [device]);

  return (
    <AdaptiveResponsiveContext.Provider
      value={{
        device,
        currentInnerWidth,
        currentInnerHeight,
        widthScaleRatio,
        heightScaleRatio,
        adaptiveResponsiveRef,
      }}
    >
      <div className="adaptive-responsive" ref={adaptiveResponsiveRef}>
        {children}
      </div>
    </AdaptiveResponsiveContext.Provider>
  );
}

const useAdaptiveResponsiveContext = () =>
  useContext(AdaptiveResponsiveContext);

export { AdaptiveResponsive, useAdaptiveResponsiveContext };
