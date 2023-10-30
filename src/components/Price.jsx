import free from '../images/free.png';
import medium from '../images/medium.png';
import business from '../images/business.png';

const Price = () => {

    let data = [
        {
            image: free,
            text: "Easy Installations Unlimited support Uniqe Elements",
            price: "$0 / Month"
        },
        {
            image: medium,
            text: "Easy Installations Unlimited support Uniqe Elements",
            price: "$49 / Month"
        },
        {
            image: business,
            text: "Easy Installations Unlimited support Uniqe Elements",
            price: "$99 / Month"
        }
    ];

    return (
        <>
            <div className="priceBody">
                <div className="priceOne">
                    <div className="priceText">
                        <p className="priceTextOne">PRICING PLAN</p>
                        <p className="priceTextTwo">Our Awesome Pricing Plan</p>
                    </div>
                </div>

                <div className="cardOne">
                    {data.map((item) => {
                        return (
                            <div className="cardContain">
                                <img class="card-img-top" src={item.image} alt="Card" />
                                <div class="card-body">
                                    <p>{item.text}</p>
                                    <h4 className="priceTag">{item.price}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    );
}
export default Price;