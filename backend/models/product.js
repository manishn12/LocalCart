import mongoose from 'mongoose';

 export const productSchema = mongoose.Schema({
 
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String
});

const Product = mongoose.model('Product',productSchema);

export default Product;