import logo from "../assets/images/logo-light.png.png";
import { IoIosArrowDown } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import React from "react";
export default function Header() {
    const [dropMenuIsOpen, setDropMenuIsOpen] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = React.useState(
        window.innerWidth < 800,
    );
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = React.useState(false);
    React.useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width < 800) setIsSmallScreen((p) => (p ? p : true));
            else {
                setIsSmallScreen((p) => (p ? false : p));
                setBurgerMenuIsOpen((p) => {
                    if (p) {
                        document.body.classList.remove("noScroll");
                        return false;
                    } else return p;
                });
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <header>
            <div className="container">
                <a href="#" className="logo">
                    <img src={logo} alt="" />
                </a>
                <div
                    className="links"
                    style={{ display: isSmallScreen ? "none" : "flex" }}
                >
                    <a href="#">ABOUT US</a>
                    <div className="dropDownMenu">
                        <button onClick={() => setDropMenuIsOpen((p) => !p)}>
                            <span>OUR SERVICES</span>
                            <IoIosArrowDown
                                className="arrow"
                                style={{
                                    transform: `rotate(${dropMenuIsOpen ? -180 : 0}deg)`,
                                }}
                            />
                        </button>
                        <div
                            className="dropDownMenuContent"
                            style={{
                                display: dropMenuIsOpen ? "flex" : "none",
                            }}
                        >
                            <a href="#">some link1</a>
                            <a href="#">some link2</a>
                            <a href="#">some link3</a>
                        </div>
                    </div>
                    <a href="#">WORK WITH US</a>
                    <a href="#">BLOG</a>
                </div>
                <button
                    className="getInTouchBtn"
                    style={{ display: isSmallScreen ? "none" : "flex" }}
                >
                    <div className="gradientCircle"></div>
                    <span>GET IN TOUCH</span>
                </button>
                <button
                    className="burgerMenuBtn"
                    onClick={() => setBurgerMenuIsOpen(() =>{
                        document.body.classList.add('noScroll');
                        return true;
                    })}
                    style={{ display: isSmallScreen ? "block" : "none" }}
                >
                    <LuMenu />
                </button>
            </div>
            <div
                className="burgerMenu"
                style={{ right: burgerMenuIsOpen ? 0 : "-30rem" }}
            >
                <div className="links">
                    <a href="#">ABOUT US</a>
                    <div className="dropDownMenu">
                        <button onClick={() => setDropMenuIsOpen((p) => !p)}>
                            <span>OUR SERVICES</span>
                            <IoIosArrowDown
                                className="arrow"
                                style={{
                                    transform: `rotate(${dropMenuIsOpen ? -180 : 0}deg)`,
                                }}
                            />
                        </button>
                        <div
                            className="dropDownMenuContent"
                            style={{
                                display: dropMenuIsOpen ? "flex" : "none",
                            }}
                        >
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
                <button
                    className="burgerMenuCloseBtn"
                    onClick={() =>
                        setBurgerMenuIsOpen(() => {
                            document.body.classList.remove("noScroll");
                            return false;
                        })
                    }
                >
                    <IoMdClose />
                </button>
            </div>
        </header>
    );
}
