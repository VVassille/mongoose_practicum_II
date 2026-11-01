import mongoose from "mongoose";

// Subdocument pentru fiecare produs din comandă
const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product is required"],
    },

    quantity: {
      type: Number,
      default: 1,
      min: [1, "Quantity must be at least 1"],
      max: [100, "Quantity cannot exceed 100"],
    },

    priceAtPurchase: {
      type: Number,
      required: [true, "Price at purchase is required"],
      min: [0, "Price cannot be negative"],
    },
  },
  { _id: false },
);

// Subdocument pentru adresa de livrare
const shippingAddressSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
      maxlength: [100, "City cannot exceed 100 characters"],
    },

    street: {
      type: String,
      required: [true, "Street is required"],
      trim: true,
      maxlength: [100, "Street cannot exceed 100 characters"],
    },

    zip: {
      type: String,
      required: [true, "ZIP code is required"],
      trim: true,
      maxlength: [20, "ZIP code cannot exceed 20 characters"],
    },
  },
  { _id: false },
);

// Schema principală Order
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },

    items: {
      type: [orderItemSchema],
      required: [true, "Order must contain at least one item"],
      validate: {
        validator: function (items) {
          return items.length > 0;
        },
        message: "Order must contain at least one item",
      },
    },

    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending",
    },

    total: {
      type: Number,
      required: [true, "Order total is required"],
      min: [0, "Total cannot be negative"],
    },

    shippingAddress: {
      type: shippingAddressSchema,
      required: [true, "Shipping address is required"],
    },

    paidAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
