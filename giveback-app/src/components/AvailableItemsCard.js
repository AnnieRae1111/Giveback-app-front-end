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
    import { useState, useEffect } from 'react'



    const AvailableItemsCard = ({allItems, itemId, photoUrl,category,title,date_posted, postedBy, description}) => {
    
        console.log(allItems, "all items array")
        
        const[claimed, setClaimed]=useState([{
            _id:'622be8531721385d2f9f2969',
            category: 'clothing',
            title: 'long-sleeve shirt',
            date_posted:'03-02-2022',
            photoUrl:'https://i.imgur.com/5fDoBqY.jpg',
        }])
        const[availableItems, setAvailableItems]=useState([])
        const[itemHistory, setItemHistory]=useState([])
        

        const claimItem = () => {

            let itemToClaim =allItems.filter((claimed) => {
                // console.log(itemId, "item id")
                // console.log(claimed._id, "claimed id ")
                return (
                    claimed._id === itemId
                ) 
            
                
            })
            console.log(itemToClaim, "item that has been claimed")
            
            // setClaimed([...claimed, itemToClaim])
            setClaimed(...claimed, itemToClaim)
            setItemHistory([...itemHistory, claimed])
            console.log(claimed, "claimed items array")

        }

        console.log(itemHistory, "item history array")
        

        const BASE_URL = "http://localhost:8000/api/items";
    
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
                    </CardBody>
            </Card>
            </CardColumns>
            </Col>
            </Row>
            </div>
        );
}
    
    export default AvailableItemsCard;