import '../css/UploadItemForm.css'
import { useState } from 'react'
import axios from "axios";

import {
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button
} from 'reactstrap'

    const UploadItemForm = () => {
        const[itemCategory, setItemCategory]=useState('')
        const[itemTitle, setItemTitle]=useState('')
        const[itemDate, setItemDate]=useState()
        const [images, setImages]=useState([])
        const [newImage, setnewImage]=useState() 
        const[owner, setOwner]=useState('')
    
        // let newItem = {
        //     category:itemCategory,
        //     title: itemTitle,
        //     date_posted: itemDate,
        //     owner: owner,
        //     images: images,

        // }



        const uploadImage = (event)=> {
            event.preventDefault()
            setImages([...images, newImage])
            console.log(images)
            // const imageData = new FormData()
            // imageData.append('newImage', newImage)
            // imageData.append('owner', owner)

            // console.log(imageData)
            
        

        }


        const onUpload = (event)=> {
            event.preventDefault()
            setImages([...images, newImage])
            console.log(images)

            const data = new FormData()
            data.append('itemCategory', itemCategory)
            data.append('images', images)
            data.append('itemTitle', itemTitle)
            data.append('itemDate', itemDate)
            data.append('owner', owner)
            data.append('newImage', newImage)


            console.log(data)
            
            axios.post("http://localhost:8000/api/items", data, {
                headers: {
                "Content-Type": "multipart/form-data"
                }
            })
            .then((response) => {
              // successfully uploaded response
            })
            .catch((error) => {
              // error response
            });



            // axios.post('http//localhost:8000/api/items', newItem)
            // .then((response)=> {
            //     console.log(response)
            // })
            // .catch((error)=>{
            //     console.log(error)
            // })
        }
        

        const removeFile = (filename)=>{
            setImages(images.filter(file => file.name !== filename))
            // filtering the files that do not equal the file we want to remove 
        }


        console.log(images)



    return (  
            <div className="upload-form-container">
            <Form id="upload-form">
                <FormGroup>
                    <Label for="categories">
                    Category:
                    </Label>
                    <Input
                    id="category"
                    name="category"
                    type="select"
                    onChange={(event)=>{setItemCategory(event.target.value)}}
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
                    onChange={(event)=>{setItemTitle(event.target.value)}}
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
                    onChange={(event)=>{setItemDate(event.target.value)}}
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
                    onChange={(event)=>{setOwner(event.target.value)}}
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
                    onChange={(event)=>{setnewImage(event.target.files[0])}}
                    />
                    <FormText>
                    This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>
                <Button type="submit" onClick={uploadImage} id="submit-button">
                    Upload Image
                </Button><br/>
                <Button type="submit" onClick={onUpload} id="submit-button">
                    Add New Item
                </Button>
            </Form>
            <img src="haryo-setyadi-acn5ERAeSb4-unsplash.jpg" alt="s3" />
            </div>
                );
            }
            
        export default UploadItemForm