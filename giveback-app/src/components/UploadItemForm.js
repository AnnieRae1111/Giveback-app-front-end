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

    const UploadItemForm = ({itemCategory, setItemCategory, itemTitle, setItemTitle, itemDate, setItemDate, images, setImages, newImage, setNewImage, owner, setOwner,items, setItems}) => {
        const newItem = {
            category:itemCategory,
            title: itemTitle,
            date_posted: itemDate,
            owner: owner,
            images: images,
        }

        const [ imageUrl, setImageUrl ] = useState()

        const handleFileUploadChange = (event) => {
          const tempFile = event.target.files[0]
          if (tempFile && tempFile.type.includes('image/')) {
            setNewImage(tempFile)
            setImageUrl(URL.createObjectURL(tempFile))
          } else {
            setNewImage(null)
            setImageUrl(null)
          }
        }

        const handleUpload = (event) => {
          event.stopPropagation()
          uploadImage(newImage, owner).then((response) => {
            if (response.profilePhoto) {
              setNewImage(null)
              setImageUrl(null)
            }
          })
        }

        function uploadImage(file, owner) {
          const formData = new FormData()
          formData.append('file', file)
          return fetch(`/api/items/${owner}`, {
            headers: {
              Accept: 'application/json',
            },
            method: 'post',
            body: formData,
          }).then((response) => response.json())
        }


        //setting images state // probably don't need this  
        // const uploadImage = (event)=> {
        //     event.preventDefault()
        //     setImages([...images, newImage])
        //     console.log(images)
        //     // const imageData = new FormData()
        //     // imageData.append('newImage', newImage)
        //     // imageData.append('owner', owner)

        //     // console.log(imageData)
        //     console.log(images)
      
        // }

        //posting to database ad setting items state 
        const handleSubmit = (event)=>  {
            event.preventDefault()
            setImages([...images, newImage])
            console.log(images)
            console.log(images)
            setItems(newItem)
            setItems([...items, newItem])
            console.log(items)
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
        }
        

        const removeFile = (filename)=>{
            setImages(images.filter(file => file.name !== filename))
            // filtering the files that do not equal the file we want to remove 
        }

    return (
      <div className='upload-form-container'>
        <img
          src='https://good-karma-bucket123.s3.amazonaws.com/dca44a814834aa5ae0b8ff486c566785'
          alt='s3'></img>
        <Form id='upload-form' onSubmit={handleSubmit}>
          <FormGroup>
            <Label for='categories'>Category:</Label>
            <Input
              id='category'
              name='category'
              type='select'
              onChange={(event) => {
                setItemCategory(event.target.value)
              }}>
              <option>Clothing</option>
              <option>Books</option>
              <option>Furniture</option>
              <option>Household</option>
              <option>Other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label id='title-label' for='exampleEmail'>
              Title:
            </Label>
            <Input
              id='title'
              name='title'
              placeholder='title'
              type='text'
              onChange={(event) => {
                setItemTitle(event.target.value)
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for='exampleDate'>Date</Label>
            <Input
              id='exampleDate'
              name='date'
              placeholder='date placeholder'
              type='date'
              onChange={(event) => {
                setItemDate(event.target.value)
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label id='own-label' for='owner'>
              Owner:
            </Label>
            <Input
              id='owner'
              name='owner'
              placeholder='owner'
              type='text'
              onChange={(event) => {
                setOwner(event.target.value)
              }}
            />
          </FormGroup>
          {/* <FormGroup>
            <Label for='exampleFile'>File</Label>
            <Input
              id='exampleFile'
              name='file'
              type='file'
              accept='image/*'
              onChange={(event) => {
                setNewImage(event.target.files[0])
              }}
            />
            <FormText>
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup> */}
          <input
            type='file'
            name='file'
            accept='image/*'
            onChange={ handleFileUploadChange }
          />
          {imageUrl && (
            <Button onClick={ handleUpload } color='primary'>
              Save
            </Button>
          )}
          {!(imageUrl || newImage) && 'Upload photo'}
          <Button type='button' onClick={ uploadImage } id='submit-button'>
            Upload Image
          </Button>
          <br />
          <Button type='submit' id='submit-button'>
            Add New Item
          </Button>
        </Form>
      </div>
    )
    }
            
  export default UploadItemForm