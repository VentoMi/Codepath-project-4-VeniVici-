import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import MainDisplay from './Components/MainDisplay';
import Banned from './Components/Banned';
import Gallery from './Components/Gallery';

const ACCESS_KEY = import.meta.env.ACCESS_KEY;
// console.log(ACCESS_KEY);

function App() {
  const [imgDetails, setImgDetails] = useState({copyright:"Unknown", date: "Unknown", title: "This is the default title!", explanation:"Default explanation", url:""});
  const [bannedList, setBannedList] = useState([]);
  const [canBan, setCanBan] = useState(1);
  const [galleryList, setGalleryList] = useState([]);


const URL = 'https://api.nasa.gov/planetary/apod?api_key=YPQNnRRXc2qNnhVlpSe60cTetXG5SBuMKoc1QKWh&count=1';

const displayInfor = () => {
  //fetch data from API
  setCanBan(1);
  let isBanned = false;

  const getData = async () => {
  do {
  
    const response = await fetch(URL);
    const data = await response.json();
    const dataInfor = data[0]; 

     setImgDetails({
      copyright: dataInfor.copyright,
      date: dataInfor.date,
      title: dataInfor.title,
      explanation: dataInfor.explanation,
      url: dataInfor.url
  });

  let item
  item = [...galleryList, imgDetails]
  setGalleryList(item);

  console.log("Gallery list " + galleryList)

    //check if retrieved value is in banned list
    for (const value of Object.values(bannedList)) {
      console.log("Value in bannedList loop" + value.title);
      if ( dataInfor.title  == value.title || dataInfor.date == value.date || dataInfor.copyright == value.copyright) {
          isBanned = true;
      } else {
        isBanned = false;
      }
    }
  } while (isBanned == true);

}
    getData().catch(console.error);

}

useEffect(() => {
  displayInfor();
}, []
)

  const banAttribute = () => {
    let item 
    if (canBan == 1) {
    item = [...bannedList, imgDetails]
    setBannedList((item));
    setCanBan(0);}
  }

  return (  
    <div>
      <h1>Beautiful Pictures from NASA!</h1>
    <div className='mainContainer'>

      <Gallery galleryList = {galleryList}/>
      
      <div className='mainDisplay'>
      <MainDisplay imgDetails={imgDetails}/>
      <button onClick={displayInfor}>Surprise Me!</button>
      <button onClick= {banAttribute}> Ban Title</button>
      <button onClick= {banAttribute}>Ban Copyright</button>
      <button onClick= {banAttribute}> Ban Date</button>

      </div>
      <Banned bannedList = {bannedList} imgDetails= {imgDetails}/>
      
    </div>
    </div>
  )
  }

export default App
