import img from "../assets/images/bitkub-logo-light-trimmed.png.png";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import React from "react";
interface Comment {
    text: string;
    author: string;
    jopPosition: string;
    companyLogo: string;
    id: number;
}
const comments: Comment[] = [
    {
        text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. They proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
        author: "Atthakrit Chimplapibul",
        jopPosition: "Atthakrit Chimplapibul",
        companyLogo: img,
        id: 0,
    },
    {
        text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. They proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
        author: "Atthakrit Chimplapibul",
        jopPosition: "Atthakrit Chimplapibul",
        companyLogo: img,
        id: 1,
    },
    {
        text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. They proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
        author: "Atthakrit Chimplapibul",
        jopPosition: "Atthakrit Chimplapibul",
        companyLogo: img,
        id: 2,
    },
];
export default function Comments() {
    const [slideId, setSlideId] = React.useState(0);
    function swipeBack() {
        setSlideId((p) => (p - 1 + comments.length) % comments.length);
    }
    function swipeForth() {
        setSlideId((p) => (p + 1) % comments.length);
    }
    function goToSlide(id: number) {
        setSlideId(id);
    }
    return (
        <section className="comments">
            <div className="container">
                <h2>We are in a good company</h2>
                <p>
                    Our partnerships have delivered great value to our projects
                    and we’re happy to share some of their feedback below
                </p>
                <div className="controlButtons">
                    <button onClick={swipeBack}>
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
                    <button onClick={swipeForth}>
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
                <div className="commentsSlider">
                    <div
                        className="commentsHolder"
                        style={{ transform: `translateX(-${slideId * 100}%)` }}
                    >
                        {comments.map((el, id) => (
                            <div className="comment" key={id}>
                                <p>{el.text}</p>
                                <span>{el.author}</span>
                                <div className="company">
                                    <span>{el.jopPosition}</span>
                                    <img src={el.companyLogo} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="navButtons">
                    {comments.map((_,id)=>(
                        <button key={id} onClick={()=>goToSlide(id)} className={slideId==id?"active":""}></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
