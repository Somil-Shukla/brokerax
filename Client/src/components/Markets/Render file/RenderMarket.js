import React, {useEffect, useState}from "react";
import Verify from "../Code/Marketsverify";
import BuyBitcoin from "../Code/buyBitcoin";
import BuyStocks from "../Code/buyStocks";
import BuyBonds from "../Code/buyBonds";
import BuyFunds from "../Code/buyFunds";
import AddOn from "../Code/MarketsAddOn";
import Last from "../Code/Marketslast";
// import Craousel from "../Code/renderCraousel";
import Craousel from "../Code/MarketCraousel";
import axios from "axios";
import Header from "../../Header/Code/header";
import SimpleFooter from "../../Footer/Code/footer.js";
import Coins from "../coins";

export default function Markets() {
  const [coins, setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="Markets">
      <Header/>
      <Craousel />
      <Coins coins={coins}/>
      <AddOn />
      <Last />
      <SimpleFooter/>
    </div>
  );
}
