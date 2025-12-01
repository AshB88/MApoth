import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
    return (
        <section id="featured-products" className="FeaturedProductsSection">
            <h2>Featured Products </h2>
            <div className="display">
                <ProductCard
                    productPlaceholder
                    productName="Soothing Lavender Cream"
                    productDescription="A calming cream infused with lavender essential oil to soothe and hydrate your skin."
                />
                <ProductCard
                    productPlaceholder
                    productName="Chamomile Gentle Cleanser"
                    productDescription="A gentle cleanser with chamomile extract that effectively removes impurities while caring for sensitive skin."
                />
                <ProductCard
                    productPlaceholder
                    productName="Rosehip Nourishing Oil"
                    productDescription="A nourishing facial serum rich in rosehip seed oil to promote skin regeneration and a radiant complexion."
                />
            </div>
        </section>
    )
}