require("../config/db");
const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    userid : mongoose.Types.ObjectId,
    products : []
})

module.exports = mongoose.model("cart", CartSchema);