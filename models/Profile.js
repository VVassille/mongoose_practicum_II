import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    avatarUrl: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
      maxlength: [500, "Bio cannot exceed 500 characters"],
    },
    city: {
      type: String,
      trim: true,
      maxlength: [100, "City cannot exceed 100 characters"],
    },
    country: {
      type: String,
      trim: true,
      maxlength: [100, "Country cannot exceed 100 characters"],
    },
    birthdate: {
      type: Date,
      validate: {
        validator: function (value) {
          if (!value) return true;
          return value <= new Date();
        },
        message: "Birthdate cannot be in the future",
      },
    },
    website: {
      type: String,
      trim: true,
    },
    socials: {
      telegram: {
        type: String,
        trim: true,
      },
      github: {
        type: String,
        trim: true,
      },
      linkedin: {
        type: String,
        trim: true,
      },
    },
    // Связь 1:1 с User (обязательная и уникальная)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User reference is required"],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
