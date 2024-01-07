import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/actions/book";
const AddBookItem = ({showExperience}) => {
    
    let disp=useDispatch();
    console.log(disp)
    let id;
    let [book,setBook]=useState({
        id:++id,
        name:"",
        code:0,
        price:0,
        author:"",
        imgUrl:"",
    })
    const change=(e) =>{
        let inputName=e.target.name;
        let inputValue=e.target.value;
       
        let copy={...book,[inputName]:inputValue}
        setBook(copy)
    } 
    const save=(e)=>{
        e.preventDefault();
        disp(addBook(book));
        setBook({
            id:++id,
            name:"",
            code:0,
            price:0,
            author:"",
            imgUrl:"",
        })
        showExperience()
    }
    return (<form onSubmit={save}>
             <label>Name:</label>
                <input onChange={change} value={book.name} name="name"
                    type="text"/>
                <label>Price:</label>
                <input onChange={change} value={book.price} name="price"
                    type="number"/>
                <label>Author: </label>
                <input onChange={change} value={book.author} name="author"
                    type="text"/>  
                <label>image:</label>
                <input onChange={change} value={book.imgUrl} name="imgUrl"
                    type="url"/>
                <input type="submit"/>
                
    </form>  );
}
 
export default AddBookItem;