import { 
    Col, 
    CardColumns, 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardSubtitle,
    CardText 

}
from 'reactstrap'



const AvailableItemsCard = () => {
    return (  
        <div>
                 <Col > 
        <CardColumns>
            <Card className="available-items-card">
                <CardImg
                alt="Card image cap"
                src= {"andrea-davis-duXRC8vT5wQ-unsplash.jpg"}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    <strong>Category:</strong> 
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                <strong>Title:</strong> 
                </CardSubtitle>
                <CardText>
                    <strong>Date Posted:</strong> 
                </CardText>
                <CardText>
                <strong>Posted By:</strong> 
                </CardText>
                <CardText>
                    <strong>Description:</strong> 
                </CardText>
                </CardBody>
        </Card>
        </CardColumns>
        </Col>
        </div>
    );
}
 
export default AvailableItemsCard;