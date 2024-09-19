const express = require("express");
const axios = require("axios");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 60 * 10 });
const API_KEY = "CG-yiKBJTeFuWW5MMYRcM5ZRyz6"; 

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
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
        sparkline: false,
        x_cg_demo_api_key: API_KEY,  // Add API key as query parameter
      },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36", // Updated User-Agent for Chrome
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
      params: {
        x_cg_demo_api_key: API_KEY,  // Add API key as query parameter
      },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36", // Updated User-Agent for Chrome
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
        x_cg_demo_api_key: API_KEY,  // Add API key as query parameter
      },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36", // Updated User-Agent for Chrome
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
