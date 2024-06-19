import "./Coin.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import ChartDisplay from "../../components/Chart/Chart";

export default function Coin() {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState("");
  const [chartData, setChartData] = useState();
  const { currency } = useContext(CoinContext);

  async function fetchCoinData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
      },
    };

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}`,
      options
    );
    const resData = await response.json();
    setCoinData(resData);
  }

  async function fetchChartData() {
    console.log("hitt");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
      },
    };

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.type}&days=10&interval=daily`,
      options
    );
    const resData = await response.json();
    setChartData(resData);
  }

  useEffect(() => {
    fetchCoinData();
    fetchChartData();
  }, [currency]);

  if (coinData) {
    return (
      <div className="coinDetails">
        <div className="coinDetailsWrapper">
          <div className="detailsLeft">
            <img src={coinData.image.large} alt="coinImage" />
            <h1>{coinData.name}</h1>
          </div>
          <div className="detailsRight">
            <h2>Coin Details</h2>
            <div className="coinDetailsWrap">
              <h4>Coin Rank</h4>
              <h4>No:{coinData.market_cap_rank}</h4>
            </div>
            <div className="coinDetailsWrap">
              <h4>24h High</h4>
              <h4>
                {currency.symbol}
                {coinData.market_data.high_24h[currency.type].toLocaleString()}
              </h4>
            </div>
            <div className="coinDetailsWrap">
              <h4>24h Low</h4>
              <h4>
                {currency.symbol}
                {coinData.market_data.low_24h[currency.type].toLocaleString()}
              </h4>
            </div>
            <div className="coinDetailsWrap">
              <h4>Market Cap</h4>
              <h4>
                {currency.symbol}
                {coinData.market_data.market_cap[
                  currency.type
                ].toLocaleString()}
              </h4>
            </div>
          </div>
        </div>
        <ChartDisplay chartData={chartData} />
      </div>
    );
  } else {
    return (
      <div className="loadingResponse">
        <h1>Loading...</h1>
      </div>
    );
  }
}
