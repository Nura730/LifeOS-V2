import mongoose from "mongoose"

const habitSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    streak: {
      type: Number,
      default: 0,
    },

    completedToday: {
      type: Boolean,
      default: false,
    },
    
    lastCompletedDate: {
  type: Date,
},
completionDates: [
  {
    type: Date,
  },
],

  },
  {
    timestamps: true,
  }
)

const Habit = mongoose.model(
  "Habit",
  habitSchema
)

export default Habit