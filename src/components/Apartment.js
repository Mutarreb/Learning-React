import "../styles/Apartment.css"
import { Banner } from './Banner'
import BannerImage from '../banners/sam-moqadam-3wwp3A3yLdg-unsplash.jpg'
import AppartmentBath from '../appartment/apartment_bath.jpg'
import AppartmentFront from '../appartment/apartment_front.jpg'
import AppartmentGarden from '../appartment/apartment_garden.jpg'
export function Apartment(props) {
    return (
        <div className="Apartment">
            <Banner image={BannerImage} alt="Sorrento Apartment" />
            <h2>The Apartment</h2>

            <div className="grid">

                <div className="content">
                <h4>The Front of the Apartment</h4>
                    <img className ="apartment-photo"src={AppartmentFront} text="Apartment Front" />
                    
                    
                    <li> We offer a spacious living area overlooking a beautiful garden Modern and elegant bathroom </li>
                    <li>Queen sized bedroom suite </li>
                    <li>private entrance allows you to come and go as you please.</li>
                    <li>Car parking is close by with room for a boat as well!</li>
                    <li> Your luxury apartment consists of a spacious separate living area with leather furniture overlooking a private garden for you to enjoy.</li>
                    <li>A separate Queen sized bedroom suite with quality linen also overlooks the garden. </li>
                    <li> The modern, elegant bathroom has a luxurious bath that entices you to unwind and relax whilst overlooking a private courtyard fernery.</li>


                </div>
             

                <div className="content">
                <h4>The Garden of the apartment</h4>
                    <img className ="apartment-photo" src={AppartmentGarden} text="Apartment Garden" />
<br></br>
                    <li> The kitchenette provides everything you will need for a relaxing breakfast. We include a coffee machine and a variety of coffee pods for your enjoyment. Two TVS will keep everyone happy along with a DVD player, stereo system and games galore.</li>
                    <li> There is an undercover area complete with BBQ and shady seating that offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or glass of wine.</li>
                    <li> Sit back and relax and take a breather. Read a book, go for a beach walk, have a sleep-in. It’s your private space to enjoy. </li>
                    <li>Amenities include top quality bedding, fluffy towels, bath robes, vanity packs, hair dryer, beach towels and chairs, a picnic basket, coffee machine and pods, a microwave/convection oven, a toaster, a kettle, a sandwich maker and BBQ tools.</li>
                    <li>We offer locally sourced provisions for a hearty breakfast together with home-made biscuits and chocolates. </li>


                </div>
                {/* <div className="apartment_photo">

                    
                </div>
                <div className="apartment_photo">
                    <h4> The Bath of the Apartment </h4>
                    <img src={AppartmentBath} text="Apartment Bathroom" />
                </div> */}



            </div>



        </div>

    )
}

export default Apartment