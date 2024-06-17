import React from "react";
import "./Home.css";
import CoinTable from "../../components/Nav/CoinTable/CoinTable";

export default function Home() {
  return (
    <div className="home">
      <div className="home-main">
        <h1>
          Largest <br></br> Crypto Marketplace
        </h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ipsum, deleniti enim atque delectus laboriosam!
        </h3>
        <div className="home-main-actions">
          <input type="text" placeholder="Search crypto..." />
          <button>Search</button>
        </div>
      </div>
      <div className="coinHeader">
        <p className="type">#</p>
        <p>Coins</p>
        <p>Price</p>
        <p className="coinChange">24HChange</p>
        <p className="coinMarket">Market Cap</p>
      </div>
      <CoinTable />
    </div>
  );
}
