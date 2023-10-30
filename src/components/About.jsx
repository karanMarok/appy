import logo from "../images/logo2.webp";
import video from "../images/video.webp";

const About = () => {
    return (
        <>
            <div className="aboutDiv">
                <div className="aboutSection">
                    <div className="aboutBanner">
                        <div className="imageBannerDiv">
                            <img src={logo} alt="about" />
                        </div>
                        <div className="headingBannerDiv">
                            <p className="aboutHeading">ABOUT APPY</p>
                        </div>
                        <div className="aboutBannerDesc">
                            <p className="aboutDesc1">A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit anim id est laborum. Sedut perspiciatis unde omnis.</p>
                            <p className="aboutDesc2">Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                        </div>
                    </div>
                    <div className="aboutVideo">
                        <span className="videoImage">
                            <img src={video} alt="video"/>
                        </span>
                        <span>
                            <p className="videoFeaturesTag">VIDEO FEATURES</p>
                        </span>
                        <span>
                            <p className="bestFeaturesTag">Best Application Ever</p>
                        </span>
                        <span>
                            <p className="featuresDesc">Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                        </span>
                        <span>
                            <button className="learnMore">LEARN MORE</button>
                        </span>
                    </div>
                </div>
            </div>

        </>
    );
}
export default About;