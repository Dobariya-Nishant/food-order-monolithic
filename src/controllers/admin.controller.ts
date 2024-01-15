import type { CreateVendorInput } from "../dto/vandor.dto";
import { vandorModel } from "../models";
import { asyncHndler } from "../utility/asyncHandler";

const createVendor = asyncHndler(async (req, res, next) => {
  const {
    name,
    ownerName,
    foodType,
    pincode,
    phone,
    email,
    password,
    address,
  } = <CreateVendorInput>req.body;

  const createVandor = await vandorModel.create({
    name: name,
    ownerName: ownerName,
    foodType: foodType,
    pincode: pincode,
    phone: phone,
    email: email,
    password: password,
    address: address,
    salt: "adsdafaf",
    serviceAvailable: false,
    rating: 0,
    coverImage: [],
  });

  res.json();
});

const getVendors = asyncHndler(async (req, res, next) => {
  res.json({ message: "Hello" });
});

const getVendorById = asyncHndler(async (req, res, next) => {
  res.json({ message: "Hello" });
});

export { createVendor, getVendors, getVendorById };
