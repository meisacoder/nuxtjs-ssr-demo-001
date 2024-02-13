// import { users, IUser } from "../../dbModels";
// export default defineEventHandler(async (event) => {
//   console.log("GET /api/users");
//   try {
//     console.log("Find users");
//     const usersData = await users.find();
//     return usersData.map((user) => ({
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//       countryPhoneNumberPrefix: user.countryPhoneNumberPrefix,
//       phoneNumber: user.phoneNumber,
//       password: "",
//       metMinAge: user.metMinAge,
//       agreedToTermsAndConditions: user.agreedToTermsAndConditions
//     }));
//   } catch (err) {
//     console.dir(err);
//     event.res.statusCode = 500;
//     return {
//       code: "ERROR",
//       message: "Something went wrong.",
//     };
//   }
// });

import { users } from "../../dbModels";
export default defineEventHandler(async (event) => {
  console.log("GET /api/users");
  try {
    console.log("Find users");
    const usersData = await users.find();
    return usersData.map((user) => ({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      countryPhoneNumberPrefix: user.countryPhoneNumberPrefix,
      phoneNumber: user.phoneNumber,
      password: user.password,
      metMinAge: user.metMinAge,
      agreedToTermsAndConditions: user.agreedToTermsAndConditions,
    }));
  } catch (err) {
    console.dir(err);
    event.node.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
