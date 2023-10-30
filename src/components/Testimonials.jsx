import one from "../images/test1.png"
import two from "../images/test2.png"
import three from "../images/test3.png"

const Testimonials = () => {
    return (
        <>
            <div className="testimonials">
                <div className="testimonialsOne">
                    <div className="testimonialsText">
                        <p className="testimonialsTextOne">TESTIMONIALS</p>
                        <p className="testimonialsTextTwo">Our Clients Love Us</p>
                    </div>
                </div>

                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={one} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={two} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={three} alt="Third slide" />
                        </div>
                    </div>
                </div>

                <div className="download">
                    <div className="downloadText">
                        <h3 className="downloadTextOne">Download The App</h3>
                        <p className="downloadTextTwo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam possimus eaque magnam eum praesentium unde.</p>
                        <button className="appleButton">APPLE STORE</button>
                        <button className="playButton">PLAY STORE</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Testimonials;