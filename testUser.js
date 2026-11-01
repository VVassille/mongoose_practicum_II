/* import User from "./models/User.js";

import Profile from "./models/Profile.js";

import User from "./models/User.js";
import Profile from "./models/Profile.js";

const testUser = new User({
  name: " Vasile ",
  email: "VASILE@GMAIL.COM",
  password: "123456",
  age: 42,
});

try {
  await testUser.validate();

  console.log("User is valid!");
  console.log(testUser.toObject());
} catch (error) {
  console.log("Validation error:", error.message);
}
console.log("Profile model loaded:", Profile.modelName);
console.log("User model:", User.modelName);
console.log("Profile model:", Profile.modelName);

const testProfile = new Profile({
  bio: "I am learning Node.js and Mongoose",
  city: "Leipzig",
  country: "Germany",
  user: testUser._id,
});

testUser.profile = testProfile._id;

const futureProfile = new Profile({
  user: testUser._id,
  birthdate: new Date("2099-01-01"),
});

try {
  await futureProfile.validate();
  console.log("Profile is valid!");
} catch (error) {
  console.log("Profile validation error:", error.message);
}

console.log("User profile ID:", testUser.profile);
console.log("Profile user ID:", testProfile.user);
 */

/* import Post from "./models/Post.js";
import User from "./models/User.js";

const testUser = new User({
  name: "Vasile",
  email: "vasile.post@gmail.com",
  password: "123456",
  age: 42,
});

const testPost = new Post({
  title: "Learning Mongoose",
  content: "Today I am learning how to create Mongoose schemas.",
  tags: [
    "nodejs",
    "mongodb",
    "backend",
    "express",
    "mongoose",
    "javascript",
    "react",
    "html",
    "css",
    "git",
    "docker",
  ],
  author: testUser._id,
});

try {
  await testPost.validate();

  console.log("Post is valid!");
  console.log(testPost.toObject());
} catch (error) {
  console.log("Validation error:", error.message);
}
 */

/* import Comment from "./models/Comment.js";
import User from "./models/User.js";
import Post from "./models/Post.js";

const testUser = new User({
  name: "Vasile",
  email: "comment@gmail.com",
  password: "123456",
});

const testPost = new Post({
  title: "Learning Mongoose",
  content: "Today I am learning Mongoose relationships.",
  author: testUser._id,
});

const testComment = new Comment({
  text: "  Great explanation!  ",
  author: testUser._id,
  post: testPost._id,
});

try {
  await testComment.validate();

  console.log("Comment is valid!");
  console.log(testComment.toObject());
} catch (error) {
  console.log("Validation error:", error.message);
}
 */

/* import User from "./models/User.js";

const user1 = new User({
  name: "Vasile",
  email: "vasile.followers@gmail.com",
  password: "123456",
  bio: "Learning Node.js and Mongoose",
  avatarUrl: "https://example.com/avatar.jpg",
});

const user2 = new User({
  name: "Andrei",
  email: "andrei.followers@gmail.com",
  password: "123456",
});

user1.following.push(user2._id);
user2.followers.push(user1._id);

try {
  await user1.validate();
  await user2.validate();

  console.log("Users are valid!");
  console.log("Vasile following:", user1.following);
  console.log("Andrei followers:", user2.followers);
  console.log("Last login:", user1.lastLoginAt);
  console.log("Bio:", user1.bio);
} catch (error) {
  console.log("Validation error:", error.message);
}
 */

/* import Product from "./models/Product.js";

const testProduct = new Product({
  name: "  Laptop  ",
  description: "A laptop for learning web development",
  price: 799.99,
  stock: 5,
  sku: "  lap-001  ",
  category: "accessories",
});

try {
  await testProduct.validate();

  console.log("Product is valid!");
  console.log(testProduct.toObject());
} catch (error) {
  console.log("Validation error:", error.message);
}
 */

/* import mongoose from "mongoose";
import Order from "./models/Order.js";

const order = new Order({
  user: new mongoose.Types.ObjectId(),

  items: [
    {
      product: new mongoose.Types.ObjectId(),
      quantity: 101,
      priceAtPurchase: 799.99,
    },
  ],

  status: "pending",
  total: 1599.98,

  shippingAddress: {
    city: "Leipzig",
    street: "Hauptstraße 10",
    zip: "04109",
  },
});

try {
  await order.validate();

  console.log("Order is valid!");
  console.log(order.toObject());
} catch (error) {
  console.log("Validation error:", error.message);
}
 */
