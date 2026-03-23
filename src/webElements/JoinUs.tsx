import { GoArrowRight } from "react-icons/go";
export default function JoinUs() {
    return (
        <section className="joinUs">
            <div className="container">
                <div className="left">
                    <div className="glowBlue"></div>
                    <div className="glowYellow"></div>
                    <h2>Join</h2>
                    <h2>Gravity Team</h2>
                </div>
                <div className="right">
                    <p>
                        Join our community of innovators, problem solvers and
                        owners who apply scientific discovery techniques to make
                        crypto markets a better place for everyone.
                    </p>
                    <p>
                        As we emphasize it in our name – Gravity Team, we are a
                        team. A team of bright, talented people, each masters of
                        their specialty, curious about the world and eager to
                        solve the new exciting cryptocurrency market problems,
                        build cool stuff and have fun whilst doing so!
                    </p>
                    <button>
                        <span>Learn more about working with us</span>
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
            </div>
        </section>
    );
}
