import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const params = useParams<{ productId: string }>();
    
    return ( 
            <div>
                <h1>The Product Detail Page</h1>
                <p>Details for the product</p>
                <p>{params.productId}</p>
            </div>
    );
}