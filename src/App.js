import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Library from './componentes/library';
import Details from './componentes/Details';
import Edit from './componentes/Edit';
import AddBookItem from './componentes/AddBook';
import { useState } from 'react';

function App() {
  let selectedB=useSelector(sta=>sta.selectedBook)
  let selectedForEdit=useSelector(sta=>sta.selectedBookForEdit)
  let [isShow,setIsShow]=useState(false);
  function showExperience(){
    setIsShow(!isShow)
  }
  console.log(selectedB)
  return (
    <>
    <Library showExperience={showExperience}/>
    {isShow&&<AddBookItem showExperience={showExperience} />} 
    {selectedB && <Details/>}
    {selectedForEdit && <Edit/>}
    </>
  );
}

export default App;
