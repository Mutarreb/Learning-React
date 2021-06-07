import '../styles/Contact.css'
import SorrentoMap from '../appartment/MapLocation.png'

export function Contact(props) {
    return (

        <div className="grid">
            <div className="Contact">
                <h2>Contact Us</h2>
                <form
                    id="contact-form"
                    action="https://example.com/handler"
                    method="post">
                    {/* name */}
                    <label htmlFor="name"> Name </label>
                    <input id="name" name="name" type="text" placeholder="Your name" />

                    {/* email */}
                    <label htmlFor="email"> Email</label>
                    <input id="email" type="email" name="email" placeholder="youremail@domain.com" />

                    {/* message */}
                    <label htmlFor="message"> Message</label>
                    <textarea id="message" rows="5" cols="24" placeholder="Hello there, how can we help you?"></textarea>
                    <button type="reset"> Clear </button>
                    <button type="submit"> Send </button>

                </form>
            </div>

            <div className="Contact">
                <h2>How to get here</h2>
                <ul><strong>It is easy to find.</strong></ul>

                <ul>From Melbourne, take the Monash Freeway, connect onto the Eastlink heading for Portsea, then onto the Peninsula link to Sorrento.</ul>
                <ul>Another option is the scenic drive around the beach. Although longer, it allows you to experience the coastline from Port Melbourne to Sorrento.</ul>
                <ul>
                    If you choose to come across on the Queenscliff/Sorrento Ferry, it is only a 2 minute drive from the Ferry Depot.  </ul>
                <ul>If you are a foot passenger we are happy to meet you at the Sorrento ferry at. Just phone us on 0435 123 456 as you arrive.</ul>
                <div className="map">
                    <h2> The Map to The Serrento by the Sea
                  </h2><img src={SorrentoMap} text="The Apartment Location" /></div>
            </div>
        </div>
    )
}

export default Contact