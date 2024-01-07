import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Details = () => {
    let selected=useSelector(state=>state.selectedBook);
    const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDetails(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
   
    const imageSize = {
        width: "100px", // Set your preferred width
        height: "100px", // Set your preferred height
    };
    if (!showDetails) {
        setShowDetails(true); 
        return null; // Don't render the details if showDetails is false
      }
    return ( <div>
            <h3>פרטי הספר:</h3>
            <h4>{selected.name}</h4>
            <h4>{selected.price}</h4>
            <h4>{selected.author}</h4>
            <div className="img-div">
            <img src={selected.imgUrl} style={imageSize}/>
        </div>
    </div> );
}
 
export default Details;