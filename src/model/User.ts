import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 6,
  },

  password: {
    type: String,
    required: true,
    min: 8,
  },
});
UserSchema.set("timestamps", true);

export default mongoose.model("User", UserSchema);
