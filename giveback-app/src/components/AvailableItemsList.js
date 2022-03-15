
    import '../css/AvailableItems.css'
    import AvailableItemsCard from './AvailableItemsCard';
    import {Row } from 'reactstrap'
    import { useState, useEffect } from 'react'


    const AvailableItemsList = ({items, setItems}) => {

        console.log(items)

    const [claimed, setClaimed]=useState([])
    const[itemHistory, setItemHistory]=useState([])
   
    const[isClaimed, setIsClaimed]=useState(false)
    const[availableItems, setAvailableItems]=useState([])
    
    // const [claimed, setClaimed]=useState([{
    //     category: item.category,
    //     title: item.title,
    //     photoUrl: item.photoUrl,
    //     description: item.description
    // }])

    useEffect(()=> {
        console.log(itemHistory, "item history in useEffect")

    },[itemHistory])
    
    // const[toggleEdit, setToggleEdit]=useState(false)
    // const editItem = () => setToggleEdit(!toggleEdit)

    const claimItem = (id) => {
        // let itemToClaim = items.filter((claimed)=> claimed._id === itemId)
        let itemToClaim = items.find(eachItem => eachItem._id === id)
        console.log(itemToClaim, "item that has been claimed")

        // axios.post()
        // setClaimed(itemToClaim) 
        setItemHistory(itemHistory=>[...itemHistory, itemToClaim])
        // console.log(itemHistory, "item History array")

        // let itemsNotClaimed = items.filter((item)=> item._id !== itemId)
        // console.log(itemsNotClaimed, "items not claimed")
        // setItems(itemsNotClaimed)
        // console.log(availableItems, "remaining items")

    }

        console.log('i only render once')
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
                        claimItem={claimItem}
                        />
                    
                    )
                })
                }
                </Row>
            </div>
        );
    }
    
    export default AvailableItemsList;