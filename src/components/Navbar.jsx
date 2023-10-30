import logo from '../images/logo.png.webp';
import '../App.css';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {

    // let nav = ['Home', 'About', 'Features', 'Gallery', 'Pricing', 'FAQ', 'Blog', 'Contact Us'];

    // const newValues = nav.map((self) => {
    //     return {
    //       name: self,
    //       link: self === "Home" ? "/" : "/" + self,
    //     };
    //   });

    const [value, setValue] = useState("");
    const [item, setItem] = useState("");
    const handleRightClick=(e)=>
    {
        e.target.addEventListener("contextmenu", (event)=> {alert('Right Click Detected')});
    }

    return (
        <>
            <div className="upperSection">
                <div className="entireHeader">
                    <div className="headerLogo">
                        <img src={logo} alt="logo" className="logoImage" onMouseOver={(e) => { e.target.style.width = "75%" }} onMouseOut={(e) => { e.target.style.width = "60%" }} />
                    </div>
                    <div className="headerNav">
                        <ul className="menuList">
                            {/* {nav.map((item) => {
                                return (<li>{item}</li>);
                            })} */}
                            <li onMouseOver={(e) => { e.target.style.textDecoration = "underline" }} onMouseOut={(e) => { e.target.style.textDecoration = "none" }}>Home</li>
                            <li onMouseOver={(e) => { e.target.style.textDecoration = "underline" }} onMouseOut={(e) => { e.target.style.textDecoration = "none" }}>About</li>
                            <li onMouseOver={(e) => { e.target.style.textDecoration = "underline" }} onMouseOut={(e) => { e.target.style.textDecoration = "none" }}>Features</li>
                            <li onMouseOver={(e) => { e.target.style.textDecoration = "underline" }} onMouseOut={(e) => { e.target.style.textDecoration = "none" }}>Gallery</li>
                            <li onMouseOver={(e) => { e.target.style.textDecoration = "underline" }} onMouseOut={(e) => { e.target.style.textDecoration = "none" }}>Pricing</li>
                            <li onMouseOver={(e) => { e.target.style.textDecoration = "underline" }} onMouseOut={(e) => { e.target.style.textDecoration = "none" }}>FAQ</li>
                            <li onMouseOver={(e) => { e.target.style.textDecoration = "underline" }} onMouseOut={(e) => { e.target.style.textDecoration = "none" }}>Blog</li>
                            <li onMouseOver={(e) => { e.target.style.textDecoration = "underline" }} onMouseOut={(e) => { e.target.style.textDecoration = "none" }}>Contact Us</li>
                        </ul>
                    </div>
                    <div className="headerBtn">
                        <button className="signupButton" onClick={(e) => { alert("Thanks for Signing Up."); }}>SIGN UP</button>
                    </div>
                </div>

                <div className="upperBanner">
                    <h1 className="bannerHeading">Start your amazing stuff through appy.</h1>
                    <p className="bannerDesc">Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused</p>
                    <input className="bannerDownload1" type="text" onFocus={
                        (e) => {e.target.style.backgroundColor="white"; e.target.style.color="black"}}
                        
                        onBlur={
                        (e) => { 
                        e.target.value = e.target.value.toUpperCase();
                        e.target.style.backgroundColor="grey";
                        e.target.style.color="white"
                        }}
                        
                        onChange={(e) => {
                            setItem(e.target.value);
                        }}
                        />
                    <button className="bannerDownload" style={{marginRight: "10px"}} onClick={(e) => {setValue("It is an example of onClick")}}>Submit</button>
                     <button  className="bannerDownload" onFocus={(e) => {handleRightClick(e)}}>Right Click Detector</button>
                    <p style={{color:"white", paddingTop:"10px"}}>{value}</p>
                    <p style={{color:"white", paddingTop:"10px"}}>{item ? "Please confirm your text (example of onChange):" +  `${item}` : "" }</p>
                </div>
            </div>

        </>
    );

}

export default Navbar;