import type { CreateVendorInput } from "../dto/vandor.dto";
import { vandorModel } from "../models";
import { getVandors } from "../services";
import { asyncHndler, generatePassword } from "../utility";

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

  const isVandorExist = await getVandors({ email: email });

  if (isVandorExist) {
    return res
      .status(400)
      .json({ message: "A vandor is exist with this email ID" });
  }

  const { salt, hashedPassword } = await generatePassword(password);

  const createdVandor = await vandorModel.create({
    name: name,
    ownerName: ownerName,
    foodType: foodType,
    pincode: pincode,
    phone: phone,
    email: email,
    password: hashedPassword,
    address: address,
    salt: salt,
    serviceAvailable: false,
    rating: 0,
    coverImage: [],
  });

  res.json(createdVandor);
});

const getVendors = asyncHndler(async (req, res, next) => {
  const vandors = await getVandors();

  if (Array.isArray(vandors)) {
    return res.status(200).json(vandors);
  }

  return res.status(200).json({ message: "vendors not available" });
});

const getVendorById = asyncHndler(async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(200).json({ message: "vendor Id is required" });
  }

  const vandor = await getVandors({ id: id });

  if (!vandor) {
    return res.status(200).json({ message: "vendor not exist" });
  }

  return res.status(200).json(vandor);
});

export { createVendor, getVendors, getVendorById };
