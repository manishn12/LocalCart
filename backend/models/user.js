import mongoose from 'mongoose';
import {productSchema} from './product.js'

const userSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    adminStatus : {
        type: Boolean,
        default: false
    },
    confirmPassword: String,
    
    cart: [{
        id: String,
        title: String,
        category:String,
        price: Number,
        description:String,
        image:String,
        default: []
        }
    ]
});

const User = mongoose.model('User',userSchema);
export default User;