
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

import '../css/EditPostModal.css'
const EditPostModal = ({submitEdits, closeModal,handleEditDescription, handleEditCategory, handleEditTitle,handlePhotoEdit}) => {



    return ( 
        <div className="edit-post-modal-container">
            <Form id="edit-post-form"  >
                <FormGroup>
                    <Label for="edit-categories">
                    Category:
                    </Label>
                    <Input
                    id="edit-category"
                    name="edit-category"
                    type="select"
                    onChange={handleEditCategory}
                    >
                    <option>
                        Clothing
                    </option>
                    <option>
                        Books
                    </option>
                    <option>
                    Furniture
                    </option>
                    <option>Household</option>
                    <option>Other</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label id="edit-title-label" for="edit-title">
                    Title:
                    </Label>
                    <Input
                    id="edit-title"
                    name="edit-title"
                    placeholder="Edit Title"
                    type="text"
                    onChange = {handleEditTitle}
                    />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="exampleDate">
                    Date
                    </Label>
                    <Input
                    id="edit-date"
                    name="edit-date"
                    placeholder="Edit Date"
                    type="date"
                    />
                </FormGroup> */}
                {/* <FormGroup>
                    <Label id="own-label" for="edit-owner">
                    Owner:
                    </Label>
                    <Input
                    id="edit-owner"
                    name="edit-owner"
                    placeholder="Edit Owner"
                    type="text"
                    onChange = {(event)=>{setEditOwner(event.target.value)}}
                    />
                </FormGroup> */}
                <FormGroup>
                    <Label id="description-label" for="description">
                    Description:
                    </Label>
                    <Input
                    id="edit-description"
                    name="edit-description"
                    placeholder="Edit Description"
                    type="text"
                    onChange = {handleEditDescription}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">
                    Photo URL
                    </Label>
                    <Input
                    id="edit-photo-url"
                    name="edit-photo-url"
                    type="text"
                    onChange = {handlePhotoEdit}
                    />
                </FormGroup>
            </Form>
            <div className="modal-button-container">
            <Button onClick={submitEdits}>Submit Edits</Button><br/>
            <Button onClick={closeModal}>Cancel</Button>
            </div>
            </div>
     );
}
 
export default EditPostModal;