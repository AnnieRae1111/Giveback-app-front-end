import '../css/UploadItemForm.css'
import axios from "axios";


import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const UploadItemForm = ({getItems,photoUrl, setPhotoUrl,imageUrl, setImageUrl, itemCategory, setItemCategory, itemTitle, setItemTitle, itemDate, setItemDate, images, setImages, owner, setOwner,items, setItems, description, setDescription}) => {
    console.log(items)
    
        // let newItem = {
        //     category: itemCategory,
        //     title: itemTitle,
        //     date_posted: itemDate,
        //     owner: owner,
        //     description:description,
        //     images: images,
        //     url:imageUrl,
        //     photoUrl:photoUrl
        // }
    
        // const itemsUrl="http://localhost:8000/api/items"

        // const addNewItem = async (event) => {
        //     event.preventDefault()
        //     // console.log(newItem, "new Item")
        //     const allItems = [...items, newItem]
        //     console.log(allItems, "all items")
        //     const result = await axios.post(itemsUrl, allItems)
        //     console.log(result.data, "result.data")
        //     setItems([...items, newItem])
        //     // setImages([...images, photoUrl])
        //     // console.log(allItems, "allItems")
        //     console.log(items, "these are all of the items")
        //     console.log(photoUrl)

        //     // .then(getItems())
        //     console.log(items)
            

        // }


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
            try{
            const response = await axios.post(itemsUrl, newItem)
            const allItems=[...items, response.data]
            setItems(allItems)
            }catch(err){
                console.log(err)
            }
        }



        const onFormSubmit = (event)=> {
            event.preventDefault()
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
                <Button type="submit" id="submit-button">
                    Upload Image
                </Button><br/>
                <Button type="submit" onClick={addNewItem} id="submit-button">
                    Add New Item
                </Button>
                
            </Form>
            </div>
                );
            }
            
        export default UploadItemForm