import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext(null);

function CoinContextProvider({ children }) {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({
    type: "usd",
    symbol: "$",
  });

  async function fetchAllCoins() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": `${import.meta.env.VITE_API_KEY}`,
      },
    };
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.type}`,
      options
    );

    const resData = await response.json();
    setAllCoins(resData);
  }

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  const coinContext = {
    allCoins,
    currency,
    setCurrency,
  };
  return (
    <CoinContext.Provider value={coinContext}>{children}</CoinContext.Provider>
  );
}

export default CoinContextProvider;
