export const Contact = () => {

    const handleFormSubmit = (formData) =>{
        // console.log(formData.entries())
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }

    return (
        <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        
        <div className="contact-wraper container">
            <form action={handleFormSubmit}>
                <input 
                type="text" 
                required 
                autoComplete="false" 
                placeholder="Enter Your Name" 
                name="username" 
                className="form-control"
                />

                <input 
                type="email" 
                required a
                utoComplete="false" 
                placeholder="Enter Your email" 
                name="mail" 
                className="form-control"
                />

                <textarea 
                name="message" 
                className="form-control"
                rows="10"
                placeholder="Enter your message"
                required
                autoComplete="false"
                ></textarea>

                <button type="submit" value="send">Send</button>
            </form>
        </div>
    </section>
    );
};