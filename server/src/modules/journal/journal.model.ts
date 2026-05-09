import mongoose from "mongoose"

const journalSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",

        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      content: {
        type: String,
        required: true,
      },

      mood: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )

const Journal =
  mongoose.model(
    "Journal",
    journalSchema
  )

export default Journal