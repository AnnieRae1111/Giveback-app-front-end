import '../css/UploadItemForm.css'
import axios from "axios";
import { useState } from 'react'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const UploadItemForm = ({photoUrl, setPhotoUrl,imageUrl, setImageUrl, itemCategory, setItemCategory, itemTitle, setItemTitle, itemDate, setItemDate, images, setImages, owner, setOwner,items, setItems, description, setDescription}) => {
    console.log(items)
    
        let newItem = {
            category: itemCategory,
            title: itemTitle,
            date_posted: itemDate,
            owner: owner,
            description:description,
            images: images,
            url:imageUrl,
            photoUrl:photoUrl
        }
    
        const itemsUrl="http://localhost:8000/api/items"

        const addNewItem = (event) => {
            event.preventDefault()
            const allItems = [...items, newItem]
            setItems([...items, newItem])
            setImages([...images, photoUrl])
            console.log(allItems, "allItems")
            console.log(items, "these are all of the items")
            console.log(photoUrl)

            axios.post(itemsUrl, allItems)
            // .then(getItems())
            console.log(items)
            

        }

        const DeleteItem = (event) => {

        }

        const onFormSubmit = (event)=> {
            event.preventDefault()
        }

        const claimItem = (filename)=>{
            setItems(items.filter(file => file.name !== filename))
    
        }


    return (  
            <div className="upload-form-container">
            <Form id="upload-form" onSubmit={onFormSubmit}>
                <FormGroup>
                    <Label for="categories">
                    Category:
                    </Label>
                    <Input
                    id="category"
                    name="category"
                    type="select"
                    onChange = {(event)=>{setItemCategory(event.target.value)}}
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
                    <option>
                        Household
                    </option>
                    <option>
                        Other
                    </option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label id="title-label" for="exampleEmail">
                    Title:
                    </Label>
                    <Input
                    id="title"
                    name="title"
                    placeholder="title"
                    type="text"
                    onChange = {(event)=>{setItemTitle(event.target.value)}}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">
                    Date
                    </Label>
                    <Input
                    id="exampleDate"
                    name="date"
                    placeholder="date placeholder"
                    type="date"
                    onChange = {(event)=>{setItemDate(event.target.value)}}
                    />
                </FormGroup>
                <FormGroup>
                    <Label id="own-label" for="owner">
                    Owner:
                    </Label>
                    <Input
                    id="owner"
                    name="owner"
                    placeholder="owner"
                    type="text"
                    onChange = {(event)=>{setOwner(event.target.value)}}
                    />
                </FormGroup>
                <FormGroup>
                    <Label id="description-label" for="description">
                    Description:
                    </Label>
                    <Input
                    id="description"
                    name="description"
                    placeholder="descriptionr"
                    type="text"
                    onChange = {(event)=>{setDescription(event.target.value)}}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">
                    Photo URL
                    </Label>
                    <Input
                    id="exampleFile"
                    name="url"
                    type="text"
                    onChange = {(event)=>{setPhotoUrl(event.target.value)}}
                    />
                </FormGroup>
                <Button type="submit" id="submit-button">
                    Upload Image
                </Button><br/>
                <Button type="submit" onClick={addNewItem} id="submit-button">
                    Add New Item
                </Button>
                
            </Form>
            <img className="preview-image" src={imageUrl} alt=""/> 
            </div>
                );
            }
            
        export default UploadItemForm