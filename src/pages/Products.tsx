import { Link } from "react-router-dom";

export const PRODUCTS = [
    { id: 'p1', title: 'A Book', price: 6 },
    { id: 'p2', title: 'A Carpet', price: 59 },
    { id: 'p3', title: 'An Online Course', price: 29 },
]

export default function Products() {
    return <div>
        <h1>The Products Page</h1>
        <ul>
            {PRODUCTS.map(product => (
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
    </div>;
    }