import{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import Header from './components/Header';
import {Routes, Route } from 'react-router-dom'
import Home from './Home';
import AvailableItemsList from './components/AvailableItemsList';
import UploadItemForm from './components/UploadItemForm';
import LandingPage from './components/LandingPage';

function App() {

//   const [files, setFiles]=useState([
//     {
//     name:'myfile.pdf'
//    },
//    {
//     name:'myfile2.pdf'
//   },
//   {
//     name:'myfile3.pdf'
//   },
// ])

//   const removeFile = (filename)=>{
//     setFiles(files.filter(file => file.name !== filename))
//     // filtering the files that do not equal the file we want to remove 
//   }

//   console.log(files)

  return (
    <div className="app-container">
      <Header/>
      {/* <Home/> */}
      <LandingPage/>
      <Routes>
        <Route path="/" element={<AvailableItemsList/>} />
      </Routes>
      <UploadItemForm/>
      {/* <p className="upload-file-title">Upload File</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
      <FileList files={files} removeFile={removeFile}/> */}
    </div>
  );
}

export default App;
