import React from "react";
import "./Nav.css";
import { CurrencyEth, ArrowUpRight } from "phosphor-react";

export default function Nav() {
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
        <select>
          <option value="eur">EUR</option>
          <option value="eur">USD</option>
          <option value="eur">BAM</option>
        </select>
        <button>
          Sign up <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}
