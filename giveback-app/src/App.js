import{ useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import {Routes, Route } from 'react-router-dom'
import AvailableItemsList from './components/AvailableItemsList';
import UploadItemForm from './components/UploadItemForm';
import LandingPage from './components/LandingPage';
import axios from 'axios';

function App() {
  const[itemCategory, setItemCategory]=useState('')
  const[itemTitle, setItemTitle]=useState('')
  const[itemDate, setItemDate]=useState()
  const [images, setImages]=useState([])
  const [newImage, setNewImage]=useState() 
  const[owner, setOwner]=useState('')
  const[items, setItems]=useState([])

  const BASE_URL = "http://localhost:8000/api/items";
  const getItems = () => {
    axios.get(BASE_URL).then((res) => {
      // console.log(res.data)
      setItems(res.data);
      // setIsDeleted(false)
      // setIsCreated(false)
      console.log(items);       //getting all the items inititally 
    });                            
  };

  useEffect(() => {
    getItems();
  }, []);







  return (
    <div className="app-container">
      <Header/>
      {/* <Home/> */}
      <LandingPage/>
      <Routes>
        <Route path="/" element={<AvailableItemsList/>} />
      </Routes>
      <UploadItemForm itemCategory={itemCategory} setItemCategory={setItemCategory} itemTitle={itemTitle} setItemTitle={setItemTitle} itemDate={itemDate} setItemDate={setItemDate} images={images} setImages={setImages} newImage={newImage} setNewImage={setNewImage} owner={owner} setOwner={setOwner} items={items} setItems={setItems}/>
    
    </div>
  );
}

export default App;
