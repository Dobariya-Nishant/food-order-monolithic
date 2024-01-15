import { vandorModel } from "../models";

interface Vendor {
  id?: string;
  email?: string;
}

async function getVandors(query?: Vendor) {
  if (query) {
    return await vandorModel.findOne(query);
  }
  return await vandorModel.find();
}

export { getVandors };
