const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({

name: {
    type: String,
    required : true
},
price: {
    type: Number,
    required : true,
    min : 0
},
  
category: {
    type: String,     
    required : true,
    enum : ['electronics', 'books', 'clothes', 'food', 'furniture']
},
inStock: {
    type : Boolean,
    default:true

},
releaseDate: {
    type :Date
    
},
reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'

      }
   ]
});

const ReviewSchema = mongoose.Schema({
    reviewerName: {
        type: String,   
        required : true
    },
    rating: {
        type: Number,   
        required : true,
        min : 1,
        max : 5
    },  
    comment: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

const Product = mongoose.model('Product', ProductSchema);
const Review = mongoose.model('Review', ReviewSchema);
module.exports = { Product, Review };
