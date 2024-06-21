import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import CoinContextProvider from "./context/CoinContext";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CoinContextProvider>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Footer />
      </div>
    </CoinContextProvider>
  );
}

export default App;
