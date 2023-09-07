import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom';

const MainNavegation = () => {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? classes.active : undefined} to=''>Main</NavLink >
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? classes.active : undefined} to='product'>Product</NavLink >
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavegation;
