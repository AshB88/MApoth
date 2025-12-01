import './App.css'

import HeroSection from "./components/Hero/HeroSection.jsx"
import AboutSection from "./components/About/AboutSection.jsx"
import IngredientSpotlight from "./components/Ingredients/IngredientSpotlight.jsx"
import FeaturedProducts from "./components/Products/FeaturedProducts.jsx"
import TestimonialSection from "./components/Testimonials/TestimonialSection.jsx"
import Contact from "./components/Contact/ContactSection.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <IngredientSpotlight />
      <FeaturedProducts />
      <TestimonialSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App
