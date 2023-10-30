import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import five from "../images/five.png";
import six from "../images/six.png";


const Features = () => {
    let data1 = [
        {
            image: one,
            heading: "Fast & Powerful",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {
            image: two,
            heading: "Easily Editable",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {
            image: three,
            heading: "Cloud Storage",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        }
    ]

    let data2 = [
        {
            image: four,
            heading: "Easy Notifications",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {
            image: five,
            heading: "Fully Responsive",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        },
        {
            image: six,
            heading: "Editable Layout",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        }
    ]

    return (
        <>
            <div className="featuresBody">
                <div className="featuresOne">
                    <div className="featuresText">
                        <p className="featuresTextOne">FEATURES</p>
                        <p className="featuresTextTwo">Powerful Features As Always</p>
                    </div>
                </div>

                <div className="cardContainers">
                    <div className="containerOne">
                        {data1.map((item) => {
                            return (
                                <>
                                    <div class="card">
                                        <div class="card-body">
                                            <img src={item.image} alt="img" className="cardImages"/>
                                            <h4>{item.heading}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>

                    <div className="conatinerTwo">
                        {data2.map((item) => {
                            return (
                                <>
                                    <div class="card">
                                        <div class="card-body">
                                            <img src={item.image} alt="img" className="cardImages"/>
                                            <h4>{item.heading}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Features;