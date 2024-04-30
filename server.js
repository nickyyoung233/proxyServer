const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const response = await fetch(
    "https://api.juejin.cn/growth_api/v1/lottery_config/get?aid=6587&uuid=7280803055729214987"
  );
  const json = await response.json();
  res.json(json);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
