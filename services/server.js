require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

const env = require("./src/config/env.js");

const app = require("./src/app.js");

app.listen(env.server.port, () => {
  console.log(`Server running at http://${env.server.host}:${env.server.port}`);
});