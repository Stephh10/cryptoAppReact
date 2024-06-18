import "./Home.css";
import CoinTable from "../../components/Nav/CoinTable/CoinTable";
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";

export default function Home() {
  const { allCoins } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);

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
      {displayCoin.slice(0, 10).map((coin, index) => {
        return <CoinTable key={index} coin={coin} />;
      })}
    </div>
  );
}
