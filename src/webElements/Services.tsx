import { GoArrowRight } from "react-icons/go";
import img1 from "../assets/images/sculpture.png";
import img2 from '../assets/images/div1.png'
export default function Services() {
    return (
        <section className="services">
            <div className="container">
                <div className="glowPurple"><div className="glowYellow"></div></div>
                <h2 className="main">Crypto Markey Making</h2>
                <p className="main">
                    We are a global crypto liquidity provider and algorithmic
                    market maker. We trade digital assets listed on Centralized
                    Exchanges in over 15 countries worldwide.
                </p>
                <div className="service">
                    <div className="text">
                        <h3>Market Making for Crypto Projects</h3>
                        <p className="first">
                            Accelerate your token’s journey by boosting its
                            liquidity
                        </p>
                        <p className="second">
                            We invest in building long-term, sustainable
                            relationships and support our projects in their
                            growth journey with our services, industry expertise
                            and network.
                        </p>
                        <button>
                            <span>Learn more</span>
                            <svg width="0" height="0">
                                <linearGradient
                                    id="linearGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop stopColor="#665dcd" offset="0%" />
                                    <stop stopColor="#5fa4e6" offset="45%" />
                                    <stop stopColor="#d2ab67" offset="100%" />
                                </linearGradient>
                            </svg>
                            <GoArrowRight
                                className="arrow"
                                style={{ fill: "url(#linearGradient)" }}
                            />
                        </button>
                    </div>
                    <img src={img1} alt="" />
                </div>
                <div className="service">
                    <div className="text">
                        <h3>Market Making for Crypto Exchanges</h3>
                        <p className="first">
                           Attract more traders and projects with deep order books & liquidity
                        </p>
                        <p className="second">
                            Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.
                        </p>
                        <button>
                            <span>Learn more</span>
                            <svg width="0" height="0">
                                <linearGradient
                                    id="linearGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop stopColor="#665dcd" offset="0%" />
                                    <stop stopColor="#5fa4e6" offset="45%" />
                                    <stop stopColor="#d2ab67" offset="100%" />
                                </linearGradient>
                            </svg>
                            <GoArrowRight
                                className="arrow"
                                style={{ fill: "url(#linearGradient)" }}
                            />
                        </button>
                    </div>
                    <img src={img2} alt="" />
                </div>
            </div>
        </section>
    );
}
