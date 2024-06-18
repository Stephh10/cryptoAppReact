import React from "react";
import "./Nav.css";
import { CurrencyEth, ArrowUpRight } from "phosphor-react";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";

export default function Nav() {
  const { setCurrency } = useContext(CoinContext);

  async function handleCurrencyUpdate(event) {
    const value = event.target.value;
    if (value === "eur") {
      return setCurrency({ type: "eur", symbol: "€" });
    }
    if (value === "bam") {
      return setCurrency({ type: "bam", symbol: "KM" });
    }
    setCurrency({ type: "usd", symbol: "$" });
  }
  return (
    <div className="nav">
      <div className="navHeader">
        <CurrencyEth size={32} />
        <h1>CryptoSite</h1>
      </div>
      <ul className="navItems">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="navActions">
        <select onChange={handleCurrencyUpdate}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="bam">BAM</option>
        </select>
        <button>
          Sign up <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}
