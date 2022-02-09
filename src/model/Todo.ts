import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

TodoSchema.set("timestamps", true);

export default mongoose.model("Todo", TodoSchema);
