import productPlaceholder from '../../assets/image-placeholder.jpg';

export default function ProductCard ({ imgSrc, productName, productDescription}) {

    return (
        <div className="ProductCard" style={{ width: "300px", height: "400px" }}>
            <img
                src={ imgSrc || productPlaceholder }
                alt={productName}
                className="ProductImage"
                style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3 className="ProductName">{productName}</h3>
            <p className="ProductDescription">{productDescription}</p>
        </div>
    )
}