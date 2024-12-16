import { Link } from "react-router-dom";

export default function  Home() {
  return (
    <>
    <h1>Home Page</h1>
    <p>Go to product: <Link to="/products">Link to products</Link></p>
  </>
  );
}