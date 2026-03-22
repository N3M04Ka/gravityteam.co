interface GridEl {
    label: string;
    text: string;
}
const arr: GridEl[] = [
    { label: "~$100 billion", text: "cumulative trading volume to date" },
    { label: "0.8%", text: "of the global crypto spot trading volume" },
    { label: "~30", text: "Gravity Teammates (& growing)" },
    { label: "25+", text: "leading global and local crypto exchanges" },
    { label: "2017", text: "start, crypto-natives" },
    { label: "200+", text: "crypto-asset pairs" },
    { label: "24/7", text: "liquidity" },
    { label: "5 billion+", text: "trades done to date" },
];
export default function AboutUs() {
    return (
        <section className="aboutUs">
            <div className="container">
                <div className="center">
                    <h2 className="main">About Gravity Team</h2>
                    <p className="main">
                        At Gravity Team, we are on the mission to balance the
                        supply and demand across crypto markets worldwide. We
                        are a crypto native market maker founded by traders,
                        developers, and innovators who are strong believers and
                        supporters of the future of decentralization and digital
                        assets.
                    </p>
                    <div className="gridLayout">
                        {arr.map((el,id)=>(
                            <div className="gridEl" key={id}>
                                <span>{el.label}</span>
                                <p>{el.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
