import classes from './MainNavigation.module.css'
import { Link } from 'react-router-dom';

const MainNavegation = () => {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <Link to='/'>Main</Link>
                <Link to='/product'>Product</Link>
            </ul>
        </nav>
    </header>
}

export default MainNavegation;
