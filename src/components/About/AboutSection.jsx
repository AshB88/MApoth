
import MoonstoneApoth from '../../assets/MoonstoneApoth.jpg';

export default function AboutSection() {
    return (
        <section className="AboutSection" id="about">
            <h2 className="AboutHeader">About our apothecary</h2>
            <img src={MoonstoneApoth} style={{width: "50%"}} alt="An image of various botanical ingredients" className="AboutImage" />
            <div className="AboutContent">
                <p>At Moonstone Apothecary, we believe in the power of nature to nurture and heal the skin. Our handcrafted skincare products are made with the finest botanical ingredients, carefully selected for their efficacy and purity. Each formulation is designed to provide a luxurious experience while delivering visible results.</p>
                <p>We are committed to sustainability and ethical sourcing, ensuring that our ingredients are harvested responsibly and our packaging is eco-friendly. Our mission is to create skincare rituals that not only enhance your natural beauty but also connect you with the healing properties of the earth.</p>
            </div>
        </section>
    )
}