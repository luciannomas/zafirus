import { Schema, model, models } from "mongoose";

const UsersSchema = new Schema(
  {
    /* id: { type: Number, unique: true}, */
    name: {
      type: String,
      required: [true, "The Task title is required "],
      unique: true,
      trim: true,
      maxlength: [40, "title cannot be grater than 40 characters"],
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, "title cannot be grater than 200 characters"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: [20, "title cannot be grater than 20 characters"],
    },
    certificates: {
      type: Array,
      required: true
    },
    work_experiences: {
      type: Array,
      required: true
    },
    links: {
      type: Object,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Task || model("Users", UsersSchema);