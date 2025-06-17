const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
    totalBlogs: {
      type: Number,
      default: 0,
    },
    blogs: [
      {
        blogID: mongoose.Schema.Types.ObjectId,
        // ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);

//! this is a pre-hook: whenever a new resource is about to be created in db, this pre-hook will be executed first
//? hashing ==> for encrypting the password, it is a one way process, which means we cant decrypt the password
//~ 1) a random string is generated (salt)
//~ 2) salt is hashed with password (hp)
//~ 3) this (hp) is stored in db

userSchema.pre("save", async function () {
  let salt = await bcryptjs.genSalt(10);
  let handlePassword = await bcryptjs.hash(this.password, salt);
  this.password = handlePassword;
});

module.exports = mongoose.model("User", userSchema);
