import mongoose from "mongoose"

const checkInSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    mood: {
      type: Number,
      required: true,
    },

    energy: {
      type: Number,
      required: true,
    },

    focus: {
      type: Number,
      required: true,
    },

    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const CheckIn = mongoose.model(
  "CheckIn",
  checkInSchema
)

export default CheckIn