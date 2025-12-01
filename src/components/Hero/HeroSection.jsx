import NavBar from "../Navbar/NavBar.jsx";
import placeholderImage from '../../assets/hero-banner-ph.png';


export default function HeroSection() {
    return (
        <section className="HeroSection">
            <div className="HeroContent">
                <header className="HeroHeader">
                    <h1>Moonstone Apothecary</h1>
                </header>
                <NavBar />
            </div>
            <div className="HeroImage">
                <img src={placeholderImage} style={{width: "40%", height: "30%"}} alt="Hero Banner Placeholder" />
            </div>
            <div>
                <p className="HeroTagline">Natural Skincare Crafted with Care. Nature Distilled. Rituals elevated.</p>
                <a href="#ingredients" className="cta-button">Explore Botanicals</a>
            </div>
        </section>
    )
}