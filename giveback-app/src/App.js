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
  const[imageUrl, setImageUrl] = useState()
  const[itemCategory, setItemCategory]=useState('')
  const[itemTitle, setItemTitle]=useState('')
  const[itemDate, setItemDate]=useState()
  const [images, setImages]=useState([])
  const [file, setFile]=useState([]) 
  const[owner, setOwner]=useState('')
  const[description, setDescription]=useState('')
  const[items, setItems]=useState([])
  const[newItem, setNewItem]=useState({
      category:"",
      title: "",
      date_posted: "",
      owner: "",
      description:"",
      images: "",
  })

  const BASE_URL = "http://localhost:8000/api/items";
  const getItems = () => {
    axios.get(BASE_URL).then((res) => {
      setItems(res.data);
      console.log(items);      
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
      <UploadItemForm imageUrl={imageUrl} setImageUrl={setImageUrl} itemCategory={itemCategory} setItemCategory={setItemCategory} itemTitle={itemTitle} setItemTitle={setItemTitle} itemDate={itemDate} setItemDate={setItemDate} images={images} setImages={setImages} file={file} setFile={setFile} owner={owner} setOwner={setOwner} items={items} setItems={setItems} description={description} setDescription={setDescription} newItem={newItem} setNewItem={setNewItem}/>
      <Routes>
        <Route path="/" element={<AvailableItemsList imageUrl={imageUrl} setImageUrl={setImageUrl} items={items}/>} />
      </Routes>

    
    </div>
  );
}

export default App;
