import ingredientPlaceholder from '../../assets/generated-placeholder.png';

export default function IngredientCard ({ name, description, imageSrc }) {
    return (
        <div className="IngredientCard" style={{ width: "300px", height: "400px" }}>
            <img 
                src={imageSrc || ingredientPlaceholder} 
                alt={name} 
                className="IngredientImage" 
                style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <h3 className="IngredientName">{name}</h3>
            <p className="IngredientDescription">{description}</p>
        </div>
    )
}