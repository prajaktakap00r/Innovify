import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "lastName",
  },
  location: {
    type: String,
    default: "Jammu",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});
// remove the password when we display the current user/used in userController
//fucntion name is toJSON
UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};
export default mongoose.model("User", UserSchema);
