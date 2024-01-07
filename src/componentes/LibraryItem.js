import { useDispatch } from "react-redux";
import { deleteBook,selectBook ,selectBookForEdit } from "../store/actions/book";
import "./LibraryItem.css"
const LibraryItem = ({one}) => {
    let xxxdispatch=useDispatch();
    console.log(xxxdispatch);
    return ( <div>
        <h3>{one.name}</h3>
        <h3>{one.auther}</h3>
        <div className="img-div">
            <img className="imgo" src={one.imgUrl}/>
        </div>
        <input value="Edit" onClick={()=>{
            xxxdispatch(selectBookForEdit(one))
        }} type="button"/>
        <input value="Delete" onClick={()=>{
            xxxdispatch(deleteBook(one.id))
        }} type="button"/>
        <input value="Details" onClick={()=>{
            xxxdispatch(selectBook(one))
        }} type="button"/>

    </div> );
}
 
export default LibraryItem;