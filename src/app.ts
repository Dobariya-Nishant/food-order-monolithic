import express from "express";
import cors from "cors";
import { adminRoute, vendorRoute } from "./routes";

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));

app.use("/admin", adminRoute);
app.use("/vandor", vendorRoute);

export { app };
