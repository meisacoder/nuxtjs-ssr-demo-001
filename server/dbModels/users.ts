import mongoose from "mongoose";
import bcrypt from "mongoose-bcrypt";

export interface IUser {
 //_someId: String,
  firstName: String,
  lastName: String,
  email: String,
  countryPhoneNumberPrefix: Number,
  phoneNumber: Number,
  password: String,
  metMinAge: Boolean,
  agreedToTermsAndConditions: Boolean
}

const schema = new mongoose.Schema(
  {
    //_someId: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: {type: String, unique: true},
    countryPhoneNumberPrefix: Number,
    phoneNumber: Number,
    password: { type: String, bcrypt: true },
    metMinAge: Boolean,
    agreedToTermsAndConditions: Boolean
  },
  { timestamps: true, strict: true, strictQuery: true }
);
schema.plugin(bcrypt);
export default mongoose.model<IUser>("users", schema); 