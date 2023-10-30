const Footer = () => {

    let footer = ["About", "Services", "Features", "Pricing", "Testimonials", "Contacts"];

    return(
        <>
            <footer className="footer">
                <p className="copyFooter">Copyright © 2023 All rights reserved</p>
                <div className="navFooter">
                    <ul className="footerList">
                        {footer.map((item) => {
                            return(<li>{item}</li>);
                        })}
                    </ul>
                </div>
            </footer>
        </>
    );
}
export default Footer;