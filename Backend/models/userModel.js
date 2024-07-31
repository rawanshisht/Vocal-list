import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name."],
    },
    email: {
      type: String,
      required: [true, "Please enter an email."],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email."],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Password must be at least 6 characters long"], // Minimum length validation
      validate: {
        validator: (value) => {
          if (typeof value !== "string") return false;
          const regex =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
          return regex.test(value);
        },
      },
      select: false,
    },
    passwordChangedDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  //encrypt password
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
userSchema.methods.comparePassword = async (password, passwordDB) => {
  return await bcrypt.compare(password, passwordDB);
};

export const User = mongoose.model("User", userSchema);
