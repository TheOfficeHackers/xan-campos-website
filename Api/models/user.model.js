const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const WORK_FACTOR = 10;

function emailAllowed(email) {
  return email === process.env.EMAIL
  };

const PW_PATTERN = /^.{8,}$/;

const isURL = (value) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
      trim: true,
    },
    email: {
      type: String,
      required: "Email is required",
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: emailAllowed,
        message: "Register failed"
      }
    },
    password: {
      type: String,
      required: "Password is required",
      match: [PW_PATTERN, "Password needs at least 8 chars"],
    },
    bio: {
      type: String,
    },
    bioPic: {
      type: String,
      validate: {
        validator: isURL,
        message: "URL is not valid",
      },
    }, 
    admin: {
      type: Boolean,
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;

        return ret;
      },
    },
  }
);

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt
      .hash(this.password, WORK_FACTOR)
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch(next);
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (passwordToMatch) {
  return bcrypt.compare(passwordToMatch, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;