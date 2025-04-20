

// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   product_id: String,
//   product_name: String,
//   category: String,
//   current_stock: Number,
//   product_company: String,
//   shelf_life: String,
//   entryDate: {
//     type: Date,
//     default: Date.now,
//   },
//   managerId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Manager",
//     required: true,
//   },
// });

// module.exports = mongoose.model("Product", productSchema);


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_id: String,
  product_name: String,
  category: String,
  current_stock: Number,
  product_company: String,
  entryDate: {
    type: Date,
    default: Date.now,
  },
  expiryDate: Date,           // 🆕 Expiry date in YYYY-MM-DD
  productRate: Number,        // 🆕 Price per unit
  totalRate: Number,          // 🆕 Price × Quantity
  thresholdValue: Number,     // 🆕 For low-stock alerts
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manager",
    required: true,
  },
  city:String,
});



module.exports = mongoose.model("Product", productSchema);
