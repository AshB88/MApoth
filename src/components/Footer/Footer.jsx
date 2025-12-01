import logoPlaceholder from '../../assets/image-placeholder.jpg';

export default function Footer() {
    return (
        <footer className="Footer">
            <img src={logoPlaceholder} alt="Moonstone Apothecary Logo" style={{ width: "70px", height: "70px" }} />
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#ingredients">Ingredients</a></li>
                <li><a href="#featured-products">Featured Products</a></li>
            </ul>
            <p>Follow us on 
                <a href="https://www.instagram.com/moonstoneapothecary" target="_blank" rel="noopener noreferrer"> Instagram</a>, 
                <a href="https://www.facebook.com/moonstoneapothecary" target="_blank" rel="noopener noreferrer"> Facebook</a>, and 
                <a href="https://www.twitter.com/moonstoneapoth" target="_blank" rel="noopener noreferrer"> Twitter</a>.
            </p>
            <p>&copy; 2025 Moonstone Apothecary. All rights reserved.</p>
        </footer>
    )
}