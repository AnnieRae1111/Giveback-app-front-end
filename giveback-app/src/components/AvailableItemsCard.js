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



const AvailableItemsCard = ({photoUrl,category, imageUrl,title,date_posted, postedBy,images, description}) => {
        
    
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
                <button className="claim-item-button">Claim item</button><br/>
                <button className="claim-item-button">Delete Post</button>
                </CardBody>
        </Card>
        </CardColumns>
        </Col>
        </Row>
        </div>
    );
}
 
export default AvailableItemsCard;