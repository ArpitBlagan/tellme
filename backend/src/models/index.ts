import { Model, Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  image: String,
  hobbies: [String],
  friends: {
    type: Schema.Types.ObjectId,
    ref: "userModel",
  },
  createdAd: {
    type: Date,
    default: new Date(),
  },
});

export const userModel = new Model("userModel", userSchema);
