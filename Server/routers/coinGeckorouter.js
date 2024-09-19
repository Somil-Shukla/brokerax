const express = require("express");
const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 60 * 10 });

const router = express.Router();

router.get("/coins/markets", async (req, res) => {
  const cacheKey = "coins_markets_inr";

  // Check if data is in cache
  if (cache.has(cacheKey)) {
    console.log("Returning cached data");
    return res.json(cache.get(cacheKey));
  }

  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "inr",
      },
      headers: {
        "User-Agent": "brokerax/1.0", // Set your custom User-Agent
      },
    });
    cache.set(cacheKey, response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching coins markets:", error);

    // Handle specific error cases
    if (error.response) {
      if (error.response.status === 403) {
        return res.status(403).send("Access forbidden. Check if your IP is blocked.");
      } else {
        return res.status(error.response.status).send(error.response.data);
      }
    } else {
      res.status(500).send("Internal server error.");
    }
  }
});

router.get("/coin/:id", async (req, res) => {
  try {
    const coinId = req.params.id;
    const cacheKey = `coin_${coinId}`;
    if (cache.has(cacheKey)) {
      return res.json(cache.get(cacheKey));
    }
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
      headers: {
        "User-Agent": "brokerax/1.0", // Set your custom User-Agent
      },
    });
    cache.set(cacheKey, response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching coin details:", error);
    res.status(500).send("Something went wrong");
  }
});

router.get("/coins/:coinId", async (req, res) => {
  const { coinId } = req.params;
  const cacheKey = `coins_${coinId}`;

  // Check if data is in cache
  if (cache.has(cacheKey)) {
    console.log("Returning cached data");
    return res.json(cache.get(cacheKey));
  }

  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
      params: {
        localization: false,
        tickers: true,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
      },
      headers: {
        "User-Agent": "brokerax/1.0", // Set your custom User-Agent
      },
    });

    // Save response in cache
    cache.set(cacheKey, response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching specific coin data:", error);
    res.status(500).send("Internal server error.");
  }
});

module.exports = router;
