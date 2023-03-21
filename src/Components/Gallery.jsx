import MainDisplay from "./MainDisplay"
import '../App.css'


const Gallery = ({galleryList}) => {
    

    return (
        <div className="gallery">
            <h2>Your Gallery: </h2><hr></hr>
            

        { 
        
        galleryList.map((value) => { 
            value.explanation = "";
            value.copyright = "";
            if (value.date != "Unknown") 
            return(
            <div >
            <MainDisplay imgDetails={value}/>
            <hr></hr>
            </div>
            
            );
            }
        )   
        }
    </div>)
}

export default Gallery