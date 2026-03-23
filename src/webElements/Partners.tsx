import img1 from '../assets/images/bithumb@2x.png.png'
import img2 from '../assets/images/bitbank@2x.png.png'
import img3 from '../assets/images/binance@2x.png.png'
import img4 from '../assets/images/bitstamp@2x.png.png'
import img5 from '../assets/images/coinbase@2x.png.png'
import img6 from '../assets/images/bitfinex@2x.png.png'
import img7 from '../assets/images/solana.png.png'
import img8 from '../assets/images/near.png.png'
import img9 from '../assets/images/mena.png.png'
interface PartnerInfo{
    label:string,
    img:string,
}
const arr1:PartnerInfo[]=[
    {
        label:"BITHUM",
        img:img1,
    },
    {
        label:"BITBANK",
        img:img2,
    },
    {
        label:"BINANCE",
        img:img3,
    },
]
const arr2:PartnerInfo[]=[
    {
        label:"BITCAMP",
        img:img4,
    },
    {
        label:"COINBASE",
        img:img5,
    },
    {
        label:"BITFINEX",
        img:img6,
    },
]
export default function Partners() {
  return (
    <section className="partners">
        <div className="container">
            <div className="imageContainer">
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                </div>
            <div className="glowPurple">
                <div className="glowPurple"></div>
            </div>
            <div className="center">
                <h2>Our Partners<br/>& Friends</h2>
                <div className="right">
                    <div className="column">
                        {arr1.map((el,id)=>(
                            <div className="item" key={id}>
                                <img src={el.img} alt="" />
                                <span>{el.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="column">
                        {arr2.map((el,id)=>(
                            <div className="item" key={id}>
                                <img src={el.img} alt="" />
                                <span>{el.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
