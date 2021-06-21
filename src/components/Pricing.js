import { Banner } from '../components/Banner'
import BannerImage from '../banners/fabio-fistarol-vkLv1LP_xCw-unsplash.jpg'
import '../styles/Pricing.css'
export function Pricing(props) {
    return (
        <div className="Pricing">
            <Banner image={BannerImage} alt ="Banner-image" />
            <h4>Pet friendly</h4>
            <ul>
                <li>We understand that pets are an important part of the family.</li>
                <li>
                We are pet friendly by arrangement - so please talk to us about your needs.
            </li>
                <li>We offer a fully enclosed backyard, shady trees, water bowls, food bowls and a lead if you forget one.</li>
                <li>Only 3 minutes from a leash free beach, an oval close by and if you want to sleep in we are happy to take your dog (depending on its size) for a walk in the morning.  </li>
            </ul>

            
            <div className="grid">
                <div className="card">
                    <h3>Winter Pricing</h3>
                    <ul>
                        <li>The pricing is for 2 people.</li>
                        <li>1st June - August 31st</li>
                        <li>The apartment is strictly non-smoking</li>
                        <li>$200 per night</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Summer Pricing</h3>
                    <ul>
                        <li>1st September - December 18th</li>
                        <li>1st February - 31st May</li>
                        <li>Total amount is payable upon booking.</li>
                        <li>$220 per night</li>
                    </ul>
                </div>
            </div>

            <h4>Terms and Conditions</h4>
            <ul>
                <li>A full refund will be given prior to 30 days cancellation</li>
                <li>
                    50% refund will be given after 30 days of cancellation.
                    In the event of a weekly or monthly booking the apartment will be serviced weekly unless by prior arrangement.
            </li>
                <li>Weekly Price     $1,250</li>
                <li>Monthly Price $5,400</li>
            </ul>

            
        </div>
    )
}

export default Pricing