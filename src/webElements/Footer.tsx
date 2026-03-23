import logoImg from '../assets/images/logo-light.png.png'
export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="top">
                <div className="left">
                    <span>GRAVITY TEAM</span>
                    <div className="links">
                        <a href="#">About Us</a>
                        <a href="#">Work with Us</a>
                    </div>
                </div>
                <img src={logoImg} alt="" />
            </div>
            <div className="bottom">
                <a href="#">Terms of Use & Privacy Policy</a>
                <span>©2022 Gravity Team. All Rights Reserved</span>
            </div>
        </div>
    </footer>
  );
}
1
