import {Banner} from './Banner'
import BannerImage from '../banners/sam-moqadam-3wwp3A3yLdg-unsplash.jpg'
export function Attractions (props) {
    return (
        <div className ="Attractions">
            <Banner image ={BannerImage} alt ="Sorrento Attractions" />
            <h2>Attractions</h2>
        </div>
    )
}

export default Attractions