import { Document, Schema, SchemaTypes, model } from "mongoose";

interface VandorDoc extends Document {
  name: string;
  ownerName: string;
  foodType: [string];
  pincode: string;
  phone: number;
  email: string;
  password: string;
  salt: string;
  serviceAvailable: boolean;
  coverImage: [string];
  rating: number;
  foods: any;
  address: string;
}

const vandorShcema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    foodType: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    serviceAvailable: {
      type: Boolean,
      required: false,
    },
    coverImage: {
      type: [String],
      required: false,
    },
    rating: {
      type: Number,
      required: true,
    },
    foods: [
      {
        type: SchemaTypes.ObjectId,
        ref: "food",
      },
    ],
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const vandorModel = model<VandorDoc>("vandor", vandorShcema);

export { vandorModel };
