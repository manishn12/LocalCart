import express from 'express';
import {getUser , register , getUser1 , login, Cart , getCartData , deleteCartProduct , buyNow, AddAdmin} from '../controllers/user.js';

const router = express.Router();

router.get("/", getUser);
router.post("/register" , register);
router.get("/register",getUser1);
router.post("/login",login);
router.post("/cart" , Cart);
router.post("/getCart",getCartData);
router.post("/delete-cart",deleteCartProduct);
router.post("/buy-now",buyNow);
router.post("/add-admin",AddAdmin)
export default router;