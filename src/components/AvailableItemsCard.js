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

}
from 'reactstrap'
import axios from 'axios'

import { Link } from 'react-router-dom'



const AvailableItemsCard = ({claimItem, items, item, setItems, itemId,}) => {

    // console.log(items, "all items array")
   

    // const [claimed, setClaimed]=useState([])
    // const[itemHistory, setItemHistory]=useState([])
   
    // const[isClaimed, setIsClaimed]=useState(false)
    // const[availableItems, setAvailableItems]=useState([])
    
    // // const [claimed, setClaimed]=useState([{
    // //     category: item.category,
    // //     title: item.title,
    // //     photoUrl: item.photoUrl,
    // //     description: item.description
    // // }])

    // useEffect(()=> {
    //     // console.log(itemHistory, "item history in useEffect")

    // },[itemHistory])
    
    // const[toggleEdit, setToggleEdit]=useState(false)
    // const editItem = () => setToggleEdit(!toggleEdit)

    // const claimItem = (id) => {
    //     // let itemToClaim = items.filter((claimed)=> claimed._id === itemId)
    //     let itemToClaim = items.find(eachItem => eachItem._id === id)
    //     console.log(itemToClaim, "item that has been claimed")

    //     // axios.post()
    //     // setClaimed(itemToClaim)
    //     setItemHistory(itemHistory=>[...itemHistory, itemToClaim])
    //     // console.log(itemHistory, "item History array")

    //     // let itemsNotClaimed = items.filter((item)=> item._id !== itemId)
    //     // console.log(itemsNotClaimed, "items not claimed")
    //     // setItems(itemsNotClaimed)
    //     // console.log(availableItems, "remaining items")

    // }

    // console.log(claimed, "claimed items array")

    

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

   

    const deleteUrl=`https://desolate-reaches-56728.herokuapp.com/api/items/${itemId}`
        const deleteItem = async ( event ) => {
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
                src={item.photoUrl}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    <strong>Category:</strong> {item.category}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                <strong>Title:</strong> {item.title}
                </CardSubtitle>
                <CardText>
                    <strong>Date Posted:</strong> {item.date_posted}
                </CardText>
                <CardText>
                <strong>Posted By:</strong> {item.owner}
                </CardText>
                <CardText>
                    <strong>Description:</strong> {item.description}
                </CardText>
                <button  className="claim-item-button" onClick={()=>claimItem(item._id)}>Claim item</button><br/>
                <button className="claim-item-button" onClick={deleteItem}>Delete Post</button>
                <Link to={`/edit/${item._id}`}><button className="claim-item-button">Edit</button></Link>
                </CardBody>
        </Card>
        </CardColumns>
        </Col>
        </Row>
        </div>
    );
}

export default AvailableItemsCard;