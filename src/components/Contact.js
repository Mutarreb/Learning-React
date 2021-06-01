import '../styles/Contact.css'

export function Contact(props) {
    return (

        <div className ="grid">
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
                <button type ="reset"> Clear </button>
                <button type ="submit"> Send </button>

            </form>
        </div>
        </div>
    )
}

export default Contact