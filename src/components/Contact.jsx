import contact from "../images/contact.png";

const Contact = () => {

    return (
        <>
            <div className="contactBody">
                <div className="contactOne">
                    <div className="contactText">
                        <p className="contactTextOne">CONTACT US</p>
                        <p className="contactTextTwo">Find us on contact details below</p>
                        <img src={contact} alt="contacts" className="contact"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;