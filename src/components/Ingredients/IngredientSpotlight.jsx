import IngredientCard from "./IngredientCard"

export default function IngredientSpotlight() {
    return (
        <section className="IngredientSpotlight" id="ingredients">
            <h2 className="IngredientHeader">Featured Botanical Ingredients</h2>
            <div className="IngredientCarousel">
                <IngredientCard
                    ingredientPlaceholder
                    name="Lavender"
                    description="Known for its calming and soothing properties, lavender helps to reduce redness and irritation while promoting relaxation."
                />
                <IngredientCard
                    ingredientPlaceholder
                    name="Chamomile"
                    description="Chamomile is rich in antioxidants and has anti-inflammatory benefits, making it ideal for sensitive skin."
                />
                <IngredientCard
                    ingredientPlaceholder
                    name="Aloe Vera"
                    description="Aloe vera deeply hydrates the skin, providing relief from dryness and promoting healing of minor skin irritations."
                />
                <IngredientCard
                    ingredientPlaceholder
                    name="Rosehip Oil"
                    description="Packed with essential fatty acids and vitamins, rosehip oil helps to improve skin texture and reduce the appearance of scars."
                />
            </div>
        </section>
    )
}