import "../styles/Apartment.css"
import {Banner} from './Banner'
import BannerImage from '../banners/britt-gaiser-eNzBGf4fucc-unsplash.jpg'

export function Apartment(props) {
    return (
        <div className="Apartment">
            <Banner image ={BannerImage} text ="Sorrento Apartment"/>
            <h2>The Apartment</h2>
            <div className="content">

                <li> We offer a spacious living area overlooking a beautiful garden Modern and elegant bathroom </li>
                <li>Queen sized bedroom suite </li>
                <li>private entrance allows you to come and go as you please.</li>
                 <li>Car parking is close by with room for a boat as well!</li>
                 <li> Your luxury apartment consists of a spacious separate living area with leather furniture overlooking a private garden for you to enjoy.</li>
                 <li>A separate Queen sized bedroom suite with quality linen also overlooks the garden. The modern, elegant bathroom has a luxurious bath that entices you to unwind and relax whilst overlooking a private courtyard fernery.</li>
                <p> The kitchenette provides everything you will need for a relaxing breakfast. We include a coffee machine and a variety of coffee pods for your enjoyment. Two TVS will keep everyone happy along with a DVD player, stereo system and games galore.</p>
                <p> There is an undercover area complete with BBQ and shady seating that offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or glass of wine.</p>
                <p> Sit back and relax and take a breather. Read a book, go for a beach walk, have a sleep-in. It’s your private space to enjoy. </p>
                <p>Amenities include top quality bedding, fluffy towels, bath robes, vanity packs, hair dryer, beach towels and chairs, a picnic basket, coffee machine and pods, a microwave/convection oven, a toaster, a kettle, a sandwich maker and BBQ tools.</p>
                <p>We offer locally sourced provisions for a hearty breakfast together with home-made biscuits and chocolates. </p>


            </div>
            <div>

            <article className="card">
                <h4>Article one </h4>
                <p>
                    This is article one
                    </p>
            </article>

            <article className="card">
                <h4>Article two</h4>
                <p>
                    this is artcle two </p>

            </article>

            <article className="card">
                <h4>Article three</h4>
                <p>
                    this is article three </p>
            </article>

            <article className="card">
                <h4>Article four</h4>
                <p>
                    this video shows the apartment and the local area  </p>


            </article>
            </div>


        </div>

    )
}

export default Apartment