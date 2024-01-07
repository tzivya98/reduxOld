import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveChanges } from "../store/actions/book";

const Edit = () => {
    let selectedForEdit=useSelector(st=>st.selectedBookForEdit)
    let disp=useDispatch();
    let [data,setData]=useState({...selectedForEdit})
    const change=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        
    }
    const save=(e)=>{
       
        e.preventDefault();
        console.log(data);
        disp(saveChanges(data));
    }
    return ( <form onSubmit={save}>
                <label>Name:</label>
                <input onChange={change} value={data.name} name="name"
                    type="text"/>
                <label>Price:</label>
                <input onChange={change} value={data.price} name="price"
                    type="number"/>
                <label>Author:</label>
                <input onChange={change} value={data.author} name="author"
                    type="text"/>  
                <label>Image:</label>
                <input onChange={change} value={data.imgUrl} name="image"
                    type="url"/>
                <input type="submit"/>
    </form>);
}
 
export default Edit;