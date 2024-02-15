import { users } from "../../dbModels";

export default defineEventHandler(async (event) => {
  const userId = event.context?.params?.id;
  console.log(`GET /api/users/${userId}`);
  try {
    console.log("Find user");
    const userData = await users.findOne({
      _id: userId,
    });
    if (userData) {
      console.log("User found");
      return {
        id: userData._id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        countryPhoneNumberPrefix: userData.countryPhoneNumberPrefix,
        phoneNumber: userData.phoneNumber,
   //     password: userData.password,
        metMinAge: userData.metMinAge,
        agreedToTermsAndConditions: userData.agreedToTermsAndConditions,
        status: "success"
      };
    } else {
      console.log("User not found");
      event.node.res.statusCode = 404;
      return {
        code: "USER_NOT_FOUND",
        message: `User with id ${userId} doesn't exists.`,
        status: "error"
      };
    }
  } catch (err) {
    console.dir(err);
    event.node.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
      status: "error"
    };
  }
});
