import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import UploadItemForm from './components/UploadItemForm'
import LandingPage from './components/LandingPage'
import AvailableItemsList from './components/AvailableItemsList'

const Body = () => {
    return ( 
        <div className="home-container">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<UploadItemForm />} />
            <Route path="/available-items" element={<AvailableItemsList />} />
            </Routes>

        </div>
     );
}
 
export default Body;