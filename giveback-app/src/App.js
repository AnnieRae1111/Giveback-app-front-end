import{ useState } from 'react'
import './App.css';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import Header from './components/Header';
import {Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome';
import Signup from './components/ auth/Signup';

function App() {
  const [files, setFiles]=useState([
    {
    name:'myfile.pdf'
   },
   {
    name:'myfile2.pdf'
  },
  {
    name:'myfile3.pdf'
  },
])

  const removeFile = (filename)=>{
    setFiles(files.filter(file => file.name !== filename))
    // filtering the files that do not equal the file we want to remove 
  }

  console.log(files)

  return (
    <div className="app-container">
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <p className="upload-file-title">Upload File</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
      <FileList files={files} removeFile={removeFile}/>
    </div>
  );
}

export default App;
