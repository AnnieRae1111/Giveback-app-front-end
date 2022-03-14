import{ useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import {Routes, Route } from 'react-router-dom'
import AvailableItemsList from './components/AvailableItemsList';
import UploadItemForm from './components/UploadItemForm';
import LandingPage from './components/LandingPage';
import axios from 'axios';
import EditPostModal from './components/EditPostModal';
import Footer from './components/Footer'


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
  const[editDate, setEditDate]=useState('')
  const[editOwner, setEditOwner]=useState('')
  const[editDescription,setEditDescription]=useState('')
  const[editPhotoUrl, setEditPhotoUrl]=useState('')


  const handleEditCategory = (event) => {
    event.preventDefault()
    setEditCategory(event.target.value)
  }

  const handleEditTitle = (event) => {
    event.preventDefault()
    setEditTitle(event.preventDefault)
  }

  const handlePhotoEdit = (event) => {
    event.preventDefault()
    setEditPhotoUrl(event.target.value)
  }

  const handleEditDescription = (event) => {
    event.preventDefault()
    setEditDescription(event.target.value)
  }



  const[isEdited, setIsEdited]=useState(false)

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


  let editedItem = {
    itemCategory:editCategory, 
    itemDate: editTitle,
    photoUrl: editPhotoUrl,
    description:editDescription
  }


 

const submitEdits = async (id,event) => {
  setItemCategory(editCategory)
  setItemTitle(editTitle)
  setDescription(editDescription)
  setItemDate(editDate)
  setPhotoUrl(editPhotoUrl)
  console.log(itemCategory, "item category on update")
  console.log(itemTitle, "item title onpdate")
  console.log(description, 'item descriptoin on update')
  const updateUrl=`http://localhost:8000/api/items/${id}`
  event.preventDefault()
  console.log("submit eidts function")
  setIsEdited(true)
  await axios({
    method: 'DELETE',
    url: updateUrl,
    data:editedItem,
  })
  .then(res=> console.log(res, "axios put"))
  
}


  return (
    <div className="app-container">
      <Header/>
      {/* <Home/> */}
      <LandingPage/>
      <UploadItemForm getItems={getItems} photoUrl={photoUrl} setPhotoUrl={setPhotoUrl} imageUrl={imageUrl} setImageUrl={setImageUrl} itemCategory={itemCategory} setItemCategory={setItemCategory} itemTitle={itemTitle} setItemTitle={setItemTitle} itemDate={itemDate} setItemDate={setItemDate} images={images} setImages={setImages} file={file} setFile={setFile} owner={owner} setOwner={setOwner} items={items} setItems={setItems} description={description} setDescription={setDescription} />
      <Routes>
        <Route path="/" element={<AvailableItemsList setIsEdited={setIsEdited} isEdited={isEdited} items={items} setItems={setItems} editCategory={editCategory} setEditCategory={setEditCategory} editTitle={editTitle}setEditTitle={setEditTitle} editDate={editDate} setEditDate={setEditDate} 
        editDescription={editDescription} setEditDescription={setEditDescription} editOwner={editOwner} setEditOwner={setEditOwner} editPhotoUurl={editPhotoUrl} setEditPhotoUrl={setEditPhotoUrl}  />} />
        
        <Route path="/donate" elemet={<UploadItemForm/>}/>
        
        {/* <Route path="/edit-post" element={<EditPostModal submitEdits={submitEdits} setEditCategory={setEditCategory} setEditTitle={setEditTitle} setEditDate={setEditDate} setEditDescription={setEditDescription} setEditOwner={setEditOwner} setEditPhotoUrl={setEditPhotoUrl}/>} /> */}
        <Route path="/edit-post" element={<EditPostModal submitEdits={submitEdits} handleEditCategory={handleEditCategory} handleEditDescription={handleEditDescription} handleEditTitle={handleEditTitle} handlePhotoEdit={handlePhotoEdit}/>} />
      </Routes>
    
   
    </div>
  );
}

export default App;
