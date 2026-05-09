import mongoose from "mongoose"

const focusSessionSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      duration: {
        type: Number,
        required: true,
      },

      completed: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    }
  )

const FocusSession =
  mongoose.model(
    "FocusSession",
    focusSessionSchema
  )

export default FocusSession