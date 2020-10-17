import express from "express";
import path from "path";
import "express-async-errors";
import "./database/connection.ts";

import routes from "./routes";
import errorHandler from "./errors/handles";

const app = express();

app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(3333);
