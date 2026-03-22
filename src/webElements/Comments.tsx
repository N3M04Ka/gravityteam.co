import img from "../assets/images/bitkub-logo-light-trimmed.png.png";
import { GoArrowRight, GoArrowLeft} from "react-icons/go";
export default function Comments() {
    return (
        <section className="comments">
            <div className="container">
                <h2>We are in a good company</h2>
                <p>
                    Our partnerships have delivered great value to our projects
                    and we’re happy to share some of their feedback below
                </p>
                <div className="controlButtons">
                    <button>
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
                        <GoArrowLeft
                            className="arrow"
                            style={{ fill: "url(#linearGradient)" }}
                        />
                    </button>
                    <button>
                        <svg width="0" height="0">
                            <linearGradient
                                id="linearGradient"
                                x1="0%"
                                y1="1000%"
                                x2="100%"
                                y2="0%"
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
                <div className="comment">
                    <p>
                        Since 2019, Gravity team has been an astounding market
                        maker for Bitkub. They have proven themselves to be one
                        of the most consistent, committed and driven market
                        makers on our exchange. Gravity Team has contributed
                        high-quality volume and has proven to be very reliable
                        and trustworthy partner. We strongly advocate Gravity
                        Team as they have been an indispensable part of our
                        market-making team.
                    </p>
                    <span>Atthakrit Chimplapibul</span>
                    <div className="company">
                        <span>Co-founder & CEO of Bitkub</span>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
