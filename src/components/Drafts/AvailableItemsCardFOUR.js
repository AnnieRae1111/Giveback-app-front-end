import { 
    Col, 
    CardColumns, 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardSubtitle,
    CardText,
    Row, 
    Collapse,
    Button, 
    ModalHeader, 
    Modal,
    ModalBody,
    ModalFooter

}
from 'reactstrap'
import axios from 'axios'
import { useState } from 'react'
import EditPostModal from './EditPostModal'





const AvailableItemsCard = ({ editCategory, editTitle, editDate, editDescription, editOwner, editPhotUrl, items, setItems, itemId, photoUrl,category,title,date_posted, postedBy, description}) => {

    console.log(items, "all items array")
    
    // const[claimed, setClaimed]=useState([{
    //     _id:'622be8531721385d2f9f2969',
    //     category: 'clothing',
    //     title: 'long-sleeve shirt',
    //     date_posted:'03-02-2022',
    //     photoUrl:'https://i.imgur.com/5fDoBqY.jpg',
    // }])
    const [claimed, setClaimed]=useState([])
    const[availableItems, setAvailableItems]=useState([])
    const[itemHistory, setItemHistory]=useState([])
    const[isClaimed, setIsClaimed]=useState(false)
    


const[newTitle, setNewTitle]=useState()
const[newDescription, setNewDescription]=useState('')
const[isEdited, setIsEdited]=useState(false)


const updateTitle = (event) => {
    event.preventDefault()
    setNewTitle(event.target.value)
    console.log(newTitle, "newTitle")
    setIsEdited(true)

}
    
    // const[toggleEdit, setToggleEdit]=useState(false)
    // const editItem = () => setToggleEdit(!toggleEdit)

    const[show, setShow]=useState(false)

    const handleClose = () => setShow(!show)
    // const handleShow = () => setShow(!show)

    const handleShow = () => {
        setShow(!show)
    }

   

    const claimItem = () => {
        let itemToClaim = items.filter((claimed)=> claimed._id === itemId)
        console.log(itemToClaim, "item that has been claimed")
        setClaimed(itemToClaim)
        setItemHistory(...claimed, itemToClaim)
        console.log(itemHistory, "item History array")

        let itemsNotClaimed = items.filter((item)=> item._id !== itemId)
        console.log(itemsNotClaimed, "items not claimed")
        setItems(itemsNotClaimed)
        console.log(availableItems, "remaining items")

    }

    console.log(claimed, "claimed items array")

    

    // const BASE_URL = "http://localhost:8000/api/items";

    // const getAllItems = () => {
    // axios.get(BASE_URL).then((res) => {
    //     setAvailableItems(res.data);
    //     console.log(availableItems);      
    // });                            
    // };

    // useEffect(() => {
    // getAllItems();
    // }, []);

   

        const deleteUrl=`http://localhost:8000/api/items/${itemId}`
        const deleteItem = async (event) => {
            event.preventDefault()
            await axios({
                method:'DELETE',
                url:deleteUrl,
                data: null,
            })
            .then(res => console.log(res))
            .then(window.location.reload(false))
        }


    
    return (  
        <div className="available-items-card-container">
                 {/* <Row xs="1" m="2" l="2" xl="2" s="2"> */}
                 <Row>
            <Col > 
        <CardColumns>
            <Card className="available-items-card">
                <CardImg
                alt="Card image cap"
                // src="https://i.imgur.com/TJMdSHN.jpg"
                src={photoUrl}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    <strong>Category:</strong> {category}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                <strong>Title:</strong> {title}
                </CardSubtitle>
                <CardText>
                    <strong>Date Posted:</strong> {date_posted}
                </CardText>
                <CardText>
                <strong>Posted By:</strong> {postedBy}
                </CardText>
                <CardText>
                    <strong>Description:</strong> {description}
                </CardText>
                <button  className="claim-item-button" onClick={claimItem}>Claim item</button><br/>
                <button className="claim-item-button" onClick={deleteItem}>Delete Post</button>
                <form>
                    <label>Edit Title </label>
                    <input
                    id="edit-title"
                    name="edit-title"
                    placeholder="Edit title"
                    type="text"
                    onChange={updateTitle}
        
                    />
                </form>
        </CardBody>
        </Card>
        </CardColumns>
        </Col>
        </Row>
        </div>
    );
}

export default AvailableItemsCard;