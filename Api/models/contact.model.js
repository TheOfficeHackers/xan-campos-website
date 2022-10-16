const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
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

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;