import{ useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import {Routes, Route } from 'react-router-dom'
import AvailableItemsList from './components/AvailableItemsList';
import UploadItemForm from './components/UploadItemForm';
import LandingPage from './components/LandingPage';
import axios from 'axios';
import EditPost from './components/EditPost';


function App() {
  const[imageUrl, setImageUrl] = useState()
  const[itemCategory, setItemCategory]=useState('')
  const[itemTitle, setItemTitle]=useState('')
  const[itemDate, setItemDate]=useState()
  const[images, setImages]=useState([])
  const[file, setFile]=useState([]) 
  const[owner, setOwner]=useState('')
  const[description, setDescription]=useState('')
  const[items, setItems]=useState([])
  const[photoUrl, setPhotoUrl]=useState('')
  
  // const[newItem, setNewItem]=useState({
  //     category:"",
  //     title: "",
  //     date_posted: "",
  //     owner: "",
  //     description:"",
  //     images: "",
  //     url:""
  // })


  
  const[editCategory, setEditCategory]=useState('')
  const[editTitle, setEditTitle]=useState('')
  const[editDescription,setEditDescription]=useState('')
  const[editPhotoUrl, setEditPhotoUrl]=useState('')

  const BASE_URL = "http://localhost:8000/api/items";
  const getItems = () => {
    axios.get(BASE_URL).then((res) => {
      setItems(res.data);   
    });                            
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log(items, "all items")


  const handleEdit = async (id) => {
    const editedItem = {
      category:editCategory, 
      title: editTitle,
      photoUrl: editPhotoUrl,
      description:editDescription
    }
    try{
      const response = await axios.put(`http://localhost:8000/api/items/${id}`, editedItem)
      setItems(items.map(item => item._id === id ? {...response.data }: item))
      setEditTitle('')
      setEditDescription('')
      //then navigate back home 
    }catch(err){
      console.log(err)
    }

  }


  return (
    <div className="app-container">
      <Header/>
      {/* <Home/> */}
      <LandingPage/>
      <UploadItemForm getItems={getItems} photoUrl={photoUrl} setPhotoUrl={setPhotoUrl} imageUrl={imageUrl} setImageUrl={setImageUrl} itemCategory={itemCategory} setItemCategory={setItemCategory} itemTitle={itemTitle} setItemTitle={setItemTitle} itemDate={itemDate} setItemDate={setItemDate} owner={owner} setOwner={setOwner} items={items} setItems={setItems} description={description} setDescription={setDescription} />
      <Routes>
        <Route path="/" element={<AvailableItemsList  items={items} setItems={setItems} />} />
        
        <Route path="/donate" elemet={<UploadItemForm getItems={getItems}/>}/>
       
        <Route path="/edit/:id" element={<EditPost items={items} handleEdit={handleEdit} editCategory={editCategory} setEditCategory={setEditCategory} editTitle={editTitle} setEditTitle={setEditTitle} editDescription={editDescription} setEditDescription={setEditDescription} editPhotoUrl={editPhotoUrl} setEditPhotoUrl={setEditPhotoUrl}/>}  />
  
      </Routes>
    
   
    </div>
  );
}

export default App;
