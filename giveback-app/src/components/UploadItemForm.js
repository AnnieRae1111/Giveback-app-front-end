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

const UploadItemForm = ({file, setFile, getItems,photoUrl, setPhotoUrl,imageUrl, setImageUrl, itemCategory, setItemCategory, itemTitle, setItemTitle, itemDate, setItemDate, images, setImages, owner, setOwner,items, setItems, description, setDescription}) => {
    console.log(items)
    

        const addNewItem = async (event) =>{
            event.preventDefault()
            const itemsUrl="http://localhost:8000/api/items"
            const newItem= {
                category: itemCategory,
                title: itemTitle,
                date_posted: itemDate,
                owner: owner,
                description:description,
                images: images,
                url:imageUrl,
                photoUrl:photoUrl,
                image:images
            }
            const response = await axios.post(itemsUrl, newItem,{ headers: {'Content-Type': 'multipart/form-data'}})
            .then(setItems([...items, newItem]))
            .then(getItems())
            console.log(items, "items again ")
            console.log(response.data)
        }

        // const uploadImage = async (file, id) => {
        //     const formData = new FormData()
        //     formData.append('file', file)
        //     return fetch(`http://localhost:8000/api/items/${id}`,{
        //         headers:{
        //             Accept: 'application/json'
        //         },
        //         method:'post',
        //         body: formData,
        //     }).then((response)=>console.log((response.json())))
            
        // }

        // async function postImage({image, description}) {
        //     const formData = new FormData();
        //     formData.append("file", file)
        //     const result = await axios.post('http://localhost:8000/api/items', formData, { headers: {'Content-Type': 'multipart/form-data'}})
        //     return console.log(result.data, "result.data")
           
        //   }



      

        // const uploadImage = async (event)=> {
        //     event.preventDefault()
        //     const result = await postImage({image: file})
        //     setImages([result.image, ...file])
        //     console.log(images, "images")
        // }

        const onFormSubmit = async (event) => {
            event.preventDefault()
            const formData = new FormData()
            formData.append('file', file)
            formData.append('images', images)
            try {
                const response = await axios({
                    method:'post',
                    url:'http://localhost:8000/api/items',
                    data:formData,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                console.log(response, "response")
            }catch(err){
                console.log(err)
            }
        }



        const displayImage = (event)=> {
            let file = event.target.files[0]
            setFile(file)
            console.log(file)
            setImageUrl(URL.createObjectURL(file))
            setImages(file)
            console.log(imageUrl)
            console.log(file, "this is the file")
            console.log(images, 'Images in state')
        }

        
    return (  
        <div className="upload-form-container">
            <h1 className="donate-your-stuff">Donate Your Stuff</h1>
            <h4 className="fill-out-form"> Fill out the form below to post your items</h4>
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
                    placeholder="description"
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
                <Button type="submit" id="submit-button" >
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