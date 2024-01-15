import { Router } from "express";
import { createVendor, getVendorById, getVendors } from "../controllers";

const route = Router();

route.route("/vendor").get(getVendors).post(createVendor);
route.route("/vendor/:id").get(getVendorById);

export { route as adminRoute };
