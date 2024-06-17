import React from "react";
import "./CoinTable.css";

export default function CoinTable() {
  return (
    <div className="coinTable">
      <p className="type">1</p>
      <p className="coinName">BitCoin</p>
      <p>$5,000,000</p>
      <p className="coinChange">+1.5</p>
      <p className="coinMarket">100000000</p>
    </div>
  );
}
