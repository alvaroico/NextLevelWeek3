import express from "express";

import "./database/connection.ts";

const app = express();

app.get("/users", (request, response) => {
  return response.json({ message: "Hello Word" });
});

app.listen(3333);
