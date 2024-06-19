import React from "react";
import "./CoinTable.css";
import { useContext } from "react";
import { CoinContext } from "../../../context/CoinContext";

export default function CoinTable({ coin }) {
  const { currency } = useContext(CoinContext);
  const coinChange = coin.market_cap_change_percentage_24h;
  const minusStyle = coin.market_cap_change_percentage_24h < 0;

  return (
    <div className="coinTable">
      <p className="type">{coin.market_cap_rank}</p>
      <div className="coinTableCoins">
        <img src={coin.image} alt="coinLogo" />
        <p className="coinName">{coin.name}</p>
      </div>

      <p>
        {currency.symbol}
        {coin.current_price.toLocaleString()}
      </p>
      <p className={minusStyle ? "red coinChange" : "coinChange"}>
        {coinChange.toFixed(2)}
      </p>
      <p className="coinMarket">
        {currency.symbol}
        {coin.market_cap.toLocaleString()}
      </p>
    </div>
  );
}
