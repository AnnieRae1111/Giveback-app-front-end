
import '../css/AvailableItems.css'
import AvailableItemsCard from './AvailableItemsCard';
import {Row } from 'reactstrap'


const AvailableItemsList = ({items, setItems,isEdited, setIsEdited, editCategory,editTitle, editDate, editDescription,editOwner, editPhotoUrl }) => {
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
                     category={item.category}
                     title={item.title}
                     datePosted={item.date_posted}
                     postedBy={item.owner}
                     images={item.images[0]} 
                     description={item.description}
                     photoUrl={item.photoUrl}
                     item={item}
                     setItems={setItems}
                     itemId={item._id}
                     items={items}
                     isEdited={isEdited}
                     setIsEdited={setIsEdited}
                     editCategory={editCategory}
                     editTitle={editTitle}
                     editDate={editDate}
                     editDescription={editDescription}
                     editOwner={editOwner}
                     editPhotoUrl={editPhotoUrl}
                     />
                 )
             })
            }
            </Row>
        </div>
    );
}
 
export default AvailableItemsList;