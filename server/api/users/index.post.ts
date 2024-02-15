import { users } from "../../dbModels";

interface IRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  countryPhoneNumberPrefix: number;
  phoneNumber: number;
  metMinAge: string;
  agreedToTermsAndConditions: string;
}
export default defineEventHandler(async (event) => {
  console.log("POST /api/users");
  const {
    firstName,
    lastName,
    email,
    password,
    countryPhoneNumberPrefix,
    phoneNumber,
    metMinAge,
    agreedToTermsAndConditions,
  } = await readBody<IRequestBody>(event);
  try {
    const userData = await users.findOne({
      email,
    });
    if (userData) {
      console.log(`User with email ${email} already exists`);
      event.node.res.statusCode = 409;
      return {
        code: "USER_EXISTS",
        message: "User with given email already exists.",
        status: "error",
      };
    } else {
      console.log("Create user");
      const newUserData = await users.create({
        firstName,
        lastName,
        email,
        password,
        countryPhoneNumberPrefix,
        phoneNumber,
        metMinAge,
        agreedToTermsAndConditions,
      });
      return {
        id: newUserData._id,
        name: newUserData.firstName,
        email: newUserData.email,
        status: "error",
      };
    }
  } catch (err) {
    console.dir(err);
    event.node.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something wrong.",
      status: "error"
    };
  }
});
