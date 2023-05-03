import React from "react";
import Verify from "../Code/Marketsverify";
import BuyBitcoin from "../Code/buyBitcoin";
import BuyStocks from "../Code/buyStocks";
import BuyBonds from "../Code/buyBonds";
import BuyFunds from "../Code/buyFunds";
import AddOn from "../Code/MarketsAddOn";
import Last from "../Code/Marketslast";
import Craousel from "../Code/renderCraousel";
export default function Markets() {
  return (
    <div className="Markets">
      <Craousel />
      <Verify />
      <BuyBitcoin />
      <BuyStocks />
      <BuyBonds />
      <BuyFunds />
      <AddOn />
      <Last />
    </div>
  );
}
