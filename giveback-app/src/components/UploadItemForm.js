import '../css/UploadItemForm.css'
import axios from "axios";
import { useState } from 'react'

import {
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button
} from 'reactstrap'

const UploadItemForm = ({imageUrl, setImageUrl, itemCategory, setItemCategory, itemTitle, setItemTitle, itemDate, setItemDate, images, setImages, owner, setOwner,items, setItems, description, setDescription, file, setFile}) => {
    console.log(items)
        // const[imageUrl, setImageUrl] = useState()
        const displayImage = (event)=> {
            let file = event.target.files[0]
            setFile(file)
            console.log(file)
            setImageUrl(URL.createObjectURL(file))
            console.log(imageUrl)
            setImages([...images,file.name])
            console.log(images, "these are the images")
        }

        // const handleChange = (event)=> {
        //     console.log(event)
        //     const value = event.target.value
        //     const name = event.target.name
        //     // setNewItem((prevState)=> ({
        //     //     ...prevState, 
        //     //     [name]:value
        //     // }))
        //     setNewItem(values => ({...values, [name]:value}))
        //     setItems(...items, newItem)
        //     console.log(newItem, "this is the new item")
        //     console.log(items, 'these are the items')
        // }

        let newItem = {
            category: itemCategory,
            title: itemTitle,
            date_posted: itemDate,
            owner: owner,
            description:description,
            images: images,
            url:imageUrl
        }
    

        const addNewItem = (event) => {
        
            setItems([...items, newItem])
            console.log(items, "these are all of the items")

        }

        const onFormSubmit = (event)=> {
            event.preventDefault()
        }

        const removeFile = (filename)=>{
            setImages(images.filter(file => file.name !== filename))
            // filtering the files that do not equal the file we want to remove 
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
                    // value={newItem.itemCategory}
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
                    // value={newItem.itemTitle}
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
                    // value={newItem.itemDate}
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
                    // value={newItem.owner}
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
                    // value={newItem.description}
                    onChange = {(event)=>{setDescription(event.target.value)}}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">
                    File
                    </Label>
                    <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                    accept="image/*"
                    onChange={displayImage}
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