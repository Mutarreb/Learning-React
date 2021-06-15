import '../styles/Contact.css'
import SorrentoMap from '../appartment/MapLocation.png'

export function Contact(props) {
    return (

        <div className="grid">
            <div className="contact">
                <h2>Contact Us</h2>
                <form
                    id="contact-form"
                    action="https://example.com/handler"
                    method="post">
                    
                    <label htmlFor="name"> Name </label>
                    <input id="name" name="name" type="text" placeholder="Your name" />


                    
                    <label htmlFor="mobile"> Mobile Number</label>
                    <input id="mobile" name="mobile" type="text" placeholder="your australian mobile" pattern="[0][0-9]{9}"/>

                   
                    <label htmlFor="email"> Email</label>
                    <input id="email" type="email" name="email" placeholder="youremail@domain.com" />

                   
                    <label htmlFor="address"> Address</label>
                    <input id="address" name="address" type="address" placeholder="your address" />

                  
                    <label htmlFor="message"> Message</label>
                    <textarea id="message" rows="5" cols="24" placeholder="Hello there, how can we help you?"></textarea>
                    <button type="reset"> Clear </button>
                    <button type="submit"> Send </button>

                </form>
            </div>

            <div className="contact">
                <h2>How to get here</h2>
                <ul><strong>It is easy to find.</strong></ul>

                <ul>From Melbourne, take the Monash Freeway, connect onto the Eastlink heading for Portsea, then onto the Peninsula link to Sorrento.</ul>
                <ul>Another option is the scenic drive around the beach. Although longer, it allows you to experience the coastline from Port Melbourne to Sorrento.</ul>
                <ul>
                    If you choose to come across on the Queenscliff/Sorrento Ferry, it is only a 2 minute drive from the Ferry Depot.  </ul>
                <ul>If you are a foot passenger we are happy to meet you at the Sorrento ferry at. Just phone us on 0435 123 456 as you arrive.</ul>

                
              <div className="map">
                 <h2></h2>
                  
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7443.8253836348695!2d144.73364459750826!3d-38.33178088315033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad435c411131eeb%3A0x35e2cbac1103c18c!2sSorrento%20by%20the%20Sea!5e0!3m2!1sen!2sau!4v1623718164470!5m2!1sen!2sau" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy"></iframe></div>

            
            </div>
        
        </div>
        
        
        
    )
}

export default Contact