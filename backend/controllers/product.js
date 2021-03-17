import Product from '../models/product.js';


export const getProduct = async  (req,res) => {
   await Product.find({}, function(err, products) {
        var productMap = [];
      products.forEach(function(product , key) {
                productMap[key] = product;
        });
        // res.send(productMap);
        // res.status(200).json(productMap)  
        res.send(productMap)
      });
}

export const postProduct = async (req,res) => {
let data={
  title:req.body.title,
  image:req.body.imageURL,
  description:req.body.description,
  price:req.body.price,
  category:req.body.category
};
   await  Product.insertMany(data , function(err , docs){
  console.log("insert")
  if(err){
      return console.log(err)
  } else{
      console.log("multiple data inserted!!!")
  }
})
//console.log(data)
res.send(data);

}
