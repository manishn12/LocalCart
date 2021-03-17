import express from 'express';

import {getProduct , postProduct} from '../controllers/product.js';
import Product from '../models/product.js';

const router = express.Router();

router.get("/",getProduct);

router.post("/postProduct",postProduct);
router.get("/postProduct",postProduct);
router.get("/product-details/:id", async (req,res) => {
const productId = req.params.id;
     Product.findById(productId,function(err,foundProduct){
        
        if(err){
            console.log(err + "from Find by Id panel")
        }else{
            res.status(200).send(foundProduct)
        }
    })
})
export default router;