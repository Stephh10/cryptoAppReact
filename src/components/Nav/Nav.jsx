import React from "react";
import "./Nav.css";
import { CurrencyEth, ArrowUpRight } from "phosphor-react";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

export default function Nav() {
  const { setCurrency } = useContext(CoinContext);

  async function handleCurrencyUpdate(event) {
    const value = event.target.value;
    if (value === "eur") {
      return setCurrency({ type: "eur", symbol: "€" });
    }
    if (value === "chf") {
      return setCurrency({ type: "chf", symbol: "₣" });
    }
    setCurrency({ type: "usd", symbol: "$" });
  }
  return (
    <div className="nav">
      <Link to={"/"} className="navHeader">
        <CurrencyEth size={32} />
        <h1>CryptoSite</h1>
      </Link>
      <ul className="navItems">
        <Link to={"/"}>
          {" "}
          <li>Home</li>
        </Link>
        <Link to={"/"}>
          {" "}
          <li>Features</li>
        </Link>
        <Link to={"/"}>
          {" "}
          <li>Pricing</li>
        </Link>
        <Link to={"/"}>
          {" "}
          <li>Blog</li>
        </Link>
      </ul>
      <div className="navActions">
        <select onChange={handleCurrencyUpdate}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="chf">CHF</option>
        </select>
        <button>
          Sign up <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}
