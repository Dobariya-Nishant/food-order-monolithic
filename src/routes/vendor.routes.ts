import { Router } from "express";
import { vandorLogin } from "../controllers";

const route = Router();

route.route("/login").post(vandorLogin);
// route.route("/").get(vandorLogin);

export { route as vendorRoute };
