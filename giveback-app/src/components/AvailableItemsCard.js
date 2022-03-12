import { 
    Col, 
    CardColumns, 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardSubtitle,
    CardText,
    Row

}
from 'reactstrap'
import axios from 'axios'



const AvailableItemsCard = ({itemId, items, setItems, photoUrl,category, imageUrl,title,date_posted, postedBy,images, description}) => {
    
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




    // const deleteItem = (event) => {
    //     let deleteUrl = `http://localhost:8000/api/items/${event._id}`
    //     console.log(deleteUrl)
    //     axios.delete(deleteUrl, event._id)
    //     .then(setItems(
    //         items.filter((deletedItem)=> deletedItem.event._id !== event._id )
    //     ))

    // }




    
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
                <button  className="claim-item-button">Claim item</button><br/>
                <button className="claim-item-button" onClick={deleteItem}>Delete Post</button>
                </CardBody>
        </Card>
        </CardColumns>
        </Col>
        </Row>
        </div>
    );
}
 
export default AvailableItemsCard;