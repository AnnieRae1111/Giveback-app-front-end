import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../css/FileItem.css'

const FileItem = ({file, deleteFile}) => {
    // console.log(file.name)

    return (  
        <div className="file-item-container">
        <li className="list=item" 
        key={file.name}>
            
            <FontAwesomeIcon icon={faFileAlt}/>
            <p>{file.name}</p>
            <div className="actions">
                {file.isUploading &&
                    <FontAwesomeIcon
                    icon={faSpinner} className="fa-spinner"
                    />}
                    {/* if we are not uploading a file */}
                    {!file.isUploading &&
                    <FontAwesomeIcon
                    icon={faTrash} className="fa-trash"
                    onClick={()=>deleteFile(file.name)}
                    />}

            </div>
        </li>
        </div>
    );
}
 
export default FileItem;