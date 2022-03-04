import axios from "axios";
import FileItem from "./FileItem";

const FileList = ({files, removeFile}) => {
const deleteFileHandler = ({files, removeFile,_name})=>{
    axios.delete(`http://localhost:8080/upload?name=${_name}`)
    .then((res)=> removeFile(_name))
    //neeed to change name to id when using actual database
    .catch((err)=>console.log(err))
}

    return ( 
        <ul className="file-list">
            {
                files&&
                files.map(f => <FileItem
                key={f.name}
                file={f}
                deleteFile={deleteFileHandler}
                
                />)
            }
{/* comment this out until get files function is working */}
        </ul>
        );
}

export default FileList;