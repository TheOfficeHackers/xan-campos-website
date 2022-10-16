const mongoose = require("mongoose");
const Schema = mongoose.Schema;

PHONE_PATTERN = /^(6|7|8|9)([0-9][ -]*){8}$/
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const messageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, "Your name is too long"]
    },
    email: {
      type: String,
      trim: true, 
      required: true,
      lowercase: true,
      match: [EMAIL_PATTERN, "Invalid email"]

    },
    phone: {
      type: String,
      trim: true,
      match: [PHONE_PATTERN, "Invalid phone number"],
    },
    message: {
      type: String,
      trim: true,
      required: true,
      maxLength: [500, "Your message is too long"]
    }    
  }, 
  { 
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    }, 
  }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;