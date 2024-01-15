export interface CreateVendorInput {
  name: string;
  ownerName: string;
  foodType: [string];
  pincode: string;
  phone: number;
  email: string;
  password: string;
  address: string;
}

export interface VendorLoginInput {
  email: string;
  password: string;
}
