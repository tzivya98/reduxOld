import { useSelector,useDispatch } from "react-redux";
import LibraryItem from "./LibraryItem";
import  "./Library.css"
import { addBook } from "../store/actions/book";
const Library = ({showExperience}) => {
    let arr=useSelector(allState =>allState.arr);
    
    return (<>
             <input value="AddBook" onClick={showExperience
        } type="button"/>
            <h1>רשימת הספרים בספרייה</h1>
            <div  className="show">
                {arr.map(item=><li key={item.id}><LibraryItem one={item}/></li>)}
            </div>
    </>  );
}
 
export default Library;