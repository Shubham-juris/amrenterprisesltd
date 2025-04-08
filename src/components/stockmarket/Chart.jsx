import React, { useEffect, useRef } from "react";

const Chart = () => {
return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Market Overview</h2>

        <div className="mb-6">
            <TradingViewWidget symbol="NASDAQ:NDX" />
        </div>
    </div>
);
};

const TradingViewWidget = ({ symbol = "NASDAQ:NDX" }) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "100%",
      height: "220",
      locale: "en",
      dateRange: "12M",
      colorTheme: "light",
      isTransparent: false,
      autosize: true,
      largeChartUrl: "",
    });
    container.current.innerHTML = ""; // Clear previous if re-rendering
    container.current.appendChild(script);
  }, [symbol]);

  return <div className="w-full" ref={container} />;
};

export default Chart;
