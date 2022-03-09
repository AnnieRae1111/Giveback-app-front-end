import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import '../css/FileUpload.css'


const FileUpload = ({files, setFiles, removeFile}) => {

    
    
    const uploadHandler =(event) => {
        const file = event.target.files[0]
        file.isUploading = true
        setFiles([...files, file])
        // set files array to all previous file plus new file that is uploaded 
        //upload file to back end 
        const formData = new FormData()
        formData.append(
            file.name,
            file,
            file.name
        )
        
            axios.post('http://localhost:8080/upload', formData)
            .then((res)=>{
                file.isUploading = false
                setFiles([...files, file])
            })
            .catch((err)=>{
                //inform user of error
                console.log(err)
                removeFile(file.name)


            })
    }
    console.log(files)

    return (  
        <>
        <form className="form-container">
        <div className="file-card">
            <div className="file-inputs">
                <input type="file" accept="image/*" onChange={uploadHandler}/>
                <button className="file-upload-button">
                    <i>
                        <FontAwesomeIcon icon={faPlus}/>
                    </i>
                    Upload
                </button>

            </div>
            <p className="main">Supported files</p>
            <p className="info">PDF, JPG, PNG</p>
        </div>
        </form>
      
        </>

    );
}
 
export default FileUpload;