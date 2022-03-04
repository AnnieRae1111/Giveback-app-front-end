import{ useState } from 'react'
import './App.css';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';

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
      <p className="upload-file-title">Upload File</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
      <FileList files={files} removeFile={removeFile}/>
    </div>
  );
}

export default App;
