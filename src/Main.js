import AvailableItemsList from "./components/AvailableItemsList";
import LandingPage from "./components/LandingPage";

const Main = ({items, setItems}) => {
    return ( 
        <>
        <LandingPage/>
        <AvailableItemsList items={items} setItems={setItems}/>
        </>
     );
}
 
export default Main;