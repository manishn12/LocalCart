import User from '../models/user.js';

export const getUser = async (req,res)=>{
    res.send("<h1>HELLO</h1>");
}

export const register = async (req,res)=> {
    
    let {firstName, lastName, email, password, confirmPassword} = req.body;
    //console.log(email)
    

    //check for the same email address
    let user = await User.findOne({ email : req.body.email });
    if (user) {
        return res.status(400).json({message: 'That user already exists!'});
    } else {
       if(password !== confirmPassword){
           return res.status(400).send({message : "Please enter correct password in confirm Password Input!!!"})
       }
       else{
        let newUser = new User({
            firstName,
            lastName,
            email,
            password,
            confirmPassword
         });
         await newUser.save();
         res.status(200).json({
             message: "success"
         })
       }
        // Insert the new user if they do not exist yet
        
    }
}


export const getUser1 = async (req,res) => {
    
    User.find({}, function(err, users) {
        var userMap = [];
    
        users.forEach(function(user,key) {
          userMap[key] = user;
        });
    
        res.send(userMap);  
      });
}

export const login = async (req,res) => {
    let {email , password} = req.body;
    // let user = await User.findOne({email: req.body.email});
    // if(!user) {
    //     res.status(400).json({message: "Not found please Sign Up"})
    // }
    // else{
    //     if(user.password !== req.body.password){
    //         res.status(401).json({message: "Wrong Password, try again!"})
    //     }else{
    //         res.status(200).json({message: "Success"})
    //     }
    // }
    User.findOne({email: req.body.email} , function(err,docs){
        if(err){
            console.log(err)
            res.status(400).json({message: "Not found Please Sign Up"})
        }else{
            //console.log(docs)
         if(docs.password !== req.body.password){
             res.status(401).json({message:"Incorrect Password!!!"})
         }else{
             //res.status(200).json({message:"Success"})
             res.send(docs)
         }
        }
    })
}

export const Cart = async (req,res)=>{
  //  let { id,title,category,image,description,price } = req.body;
  let product = req.body;
  //console.log(product.emailId);
  //User.updateOne({email: product.emailId}, {$push: {cart: {id: product.id , title:product.title , category:product.category, description: product.description , price: product.price,image : product.image} }})
User.updateOne({email:product.emailId} , {$push : {cart: product}}, function(err){
    if(err ){
        console.log(err)
    }else{
        //console.log("product add to cart successfully")
        
        res.status(200).json({message: "Product Add to cart successfully"})
        //res.send(cart)
    }
})  
}

export const getCartData = async (req,res) => {

  let {username , email , password}= req.body;
   //console.log(email);
 await  User.findOne({email: email} , function(err ,getData ){
       if(err ){
           console.log(err)
       }else{
           //console.log(getData)
           res.send(getData)
       }
   } )
}

export const deleteCartProduct = async(req,res)=> {
    let credCart= req.body;
    //console.log(credCart);

    await User.findOneAndUpdate({email: credCart.email} ,{"$pull":{"cart":{"id":credCart.cart.id}}} , function(err,data){
        if(err){
            console.log(err)
        }else{
            //console.log(data)
            res.send(data)
        }
    })
}

export const buyNow = async(req,res) => {
  const  {username , email , password }= req.body;
  //console.log(email);
await  User.findOneAndUpdate({email: email} ,{ cart: [] } , function(err , docs){
      if(err){
          console.log(err)
      }else{
          //console.log(docs)
          res.send(docs)
      }
  })
}

export const AddAdmin = async ( req,res) => {
    const {email, password} = req.body;
    //console.log(email);
    if(!password === "test1234"){
        res.send("Wrong Admin Password")
    }
    else{
User.findOneAndUpdate({email: email} , {adminStatus : true} , function(err,docs){
        if(err){
            console.log(err)
        }else{
           // console.log(docs)
            res.status(200).json({message: "Change Admin setting Successfully!!!"})
        }
    })
    } 
}