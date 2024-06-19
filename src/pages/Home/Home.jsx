import "./Home.css";
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import CoinTable from "../../components/CoinTable/CoinTable";

export default function Home() {
  const { allCoins } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [search, setSearch] = useState("");

  function searchItem(e) {
    setSearch(e.target.value);
  }

  function hanleCoinSearch(e) {
    e.preventDefault();
    const filteredCoins = allCoins.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setDisplayCoin(filteredCoins);
    setSearch("");
  }

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
        <form onSubmit={hanleCoinSearch} className="home-main-actions">
          <input
            onChange={searchItem}
            value={search}
            type="text"
            placeholder="Search crypto..."
          />
          <button>Search</button>
        </form>
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
