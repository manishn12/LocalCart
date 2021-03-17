import React , {useState,useContext} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {AdminContext, CredentialsContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Create() {

    const history = useHistory()
    // const [credentials] = useContext(CredentialsContext);
    const postProductToast =() => toast.success("Product Added Successfully", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const [admin] = useContext(AdminContext);
//const [addResponse,setAddResponse] = useContext(AddResponseContext);
    const [title,setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [price,setPrice] = useState(0);
    const [description,setDescription] = useState("");
    const [imageURL,setImageURL] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        postProductToast()
      const  data = {
          title,
          category,
          price,
          description,
          imageURL
      } 
        //console.log(data)
        axios.post("http://localhost:5000/postProduct" , data)
        .then(res => {
            //console.log(res) 
        console.log("product added!!!")
        //setAddResponse(...data);
        //console.log(addResponse)
    
    })
        .catch(err => console.log(err))
    }

    return (
        <div>
        <h2 style={{textAlign: "center" ,margin:"20px"}}>Upload your Product</h2>
        {!admin &&<h4 style={{textAlign:"center" ,color: "red"}}>You need to Login via Admin</h4>}
            <form onSubmit={handleSubmit}>
                <div class="form-group-sm">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" name="title" id="title" placeholder="Title" required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <br />
                <div class="form-group-sm">
                    <label for="Category">Category</label>
                    <input type="text" class="form-control" name="category" id="Category" placeholder="Category" required
                         onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <br />
                <div class="form-group-sm">
                    <label for="Price">Price</label>
                    <input type="number" class="form-control" name="price" id="Price" placeholder="100"  required
                         onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <br />
                <div class="form-group-sm">
                    <label for="ImageURL">ImageURL</label>
                    <input type="text" class="form-control" name="imageURL" id="ImageURL" placeholder="ImageURL" required 
                         onChange={(e) => setImageURL(e.target.value)}
                    />
                </div>
                <br />
                    <div class="form-group-sm">
                        <label for="description">description</label>
                        <textarea class="form-control" id="description" name="description" rows="3" cols="2" placeholder="Description" required 
                             onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <br />
                    {admin ? <div style={{textAlign :"center"}}>  <button  type="submit" className="btn btn-primary">Upload</button>
                  </div> : <div style={{textAlign :"center"}}>  <button  type="submit" className="btn btn-primary" disabled>Upload</button>
                  </div>}
                  
            </form>
            <ToastContainer 
 position="bottom-left"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
        </div>
    )
}

export default Create
