const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: {
      type: String, // Make sure it's a String, not a value like 'listingimage'
      default: "listingimage", // Default value for the filename
    },
    url: {
      type: String, // Type should be String
      default:
        "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  price: Number,
  location: String,
  country: String,
});



const Listing = mongoose.model("Listing", ListingSchema) ;
module.exports = Listing;
