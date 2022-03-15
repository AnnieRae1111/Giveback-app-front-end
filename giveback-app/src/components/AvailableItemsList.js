
import '../css/AvailableItems.css'
import AvailableItemsCard from './AvailableItemsCard';
import {Row } from 'reactstrap'


const AvailableItemsList = ({items, setItems}) => {
    console.log(items)
    return (  
        <div className="available-items-container">
        <h1> Available Items </h1>
            <Row xl="3" xs="1" s="1" m="2" l="3">
            {
             items.map((item) => {
                 return (
                     <AvailableItemsCard
                     key={item._id}
                     item={item}
                     setItems={setItems}
                     itemId={item._id}
                     items={items}
                     />
                  
                 )
             })
            }
            </Row>
        </div>
    );
}
 
export default AvailableItemsList;