import { Children } from "react";
import MainDisplay from "./MainDisplay";
import '../App.css'


const Banned = ({bannedList, imgDetails}) =>{
    if (bannedList.length == 0) {
        return (
            <p>No Banned Attributes Yet!</p>
        )
    }
   
    return (
       <div className="banned">
      <h2> Banned Items: </h2> <hr></hr> 
            {bannedList.map((value) => { 
                value.explanation = "";
                return(
                <div>
                <MainDisplay imgDetails={value}/>
                </div>
                );
                }
            )
                
            }
       </div>
    )
}

export default Banned;