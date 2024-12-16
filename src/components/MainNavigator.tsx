import { Link, NavLink } from "react-router-dom";
// import css file
import classes from './MainNavigator.module.css';
export default function MainNavigator() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive  ? classes.active : undefined} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({isActive}) => isActive  ? classes.active : undefined} >Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        
    );
}