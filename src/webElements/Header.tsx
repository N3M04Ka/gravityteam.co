import logo from "../assets/images/logo-light.png.png";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
export default function Header() {
    const [dropMenuIsOpen, setDropMenuIsOpen] = React.useState(false);
    return (
        <header>
            <div className="container">
                <a href="#" className="logo">
                    <img src={logo} alt="" />
                </a>
                <div className="links">
                    <a href="#">ABOUT US</a>
                    <div className="dropDownMenu">
                        <button onClick={() => setDropMenuIsOpen((p) => !p)}>
                            OUR SERVICES{" "}
                            <IoIosArrowDown
                                className="arrow"
                                style={{
                                    transform: `rotate(${dropMenuIsOpen ? -180 : 0}deg)`,
                                }}
                            />
                        </button>
                        <div className="dropDownMenuContent" style={{display:dropMenuIsOpen?"flex":"none"}}>
                            <a href="#">some link1</a>
                            <a href="#">some link2</a>
                            <a href="#">some link3</a>
                        </div>
                    </div>
                    <a href="#">WORK WITH US</a>
                    <a href="#">BLOG</a>
                </div>
                <button className="getInTouchBtn">
                    <div className="gradientCircle"></div>
                    <span>GET IN TOUCH</span>
                </button>
            </div>
        </header>
    );
}
