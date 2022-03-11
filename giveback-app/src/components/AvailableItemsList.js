
import '../css/AvailableItems.css'
import AvailableItemsCard from './AvailableItemsCard';
import {Row } from 'reactstrap'

const AvailableItemsList = ({items}) => {
    console.log(items)
    return (  
        <div className="available-items-container">
        <h1> Available Items </h1>
            <Row xl="3" xs="1" s="1" m="2" l="3">
            {
             items.map((item,key) => {
                 return (
                     <AvailableItemsCard
                     key={item.id}
                     category={item.category}
                     title={item.title}
                     datePosted={item.date_posted}
                     postedBy={item.owner}
                     images={item.images[0]}
                     description={item.description}
                     imageUrl={item.imageUrl}
                     />
                 )
             })
            }
            </Row>
        </div>
    );
}
 
export default AvailableItemsList;