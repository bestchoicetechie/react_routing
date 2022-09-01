import { Link, NavLink } from 'react-router-dom';
import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={styles.header}>
        <nav>
            <ul>
                <li>
                    {/* <a href="/welcome">Welcome</a> = This refreshes the entire page */}
                    {/* <Link to="/welcome">Welcome</Link> */}
                    <NavLink to="/welcome" className={(activeLink)=> activeLink.isActive ? styles.active : ''}
                    >
                        Welcome
                    </NavLink>
                </li>
                <li>
                    {/* <a href="/products">Products</a> */}
                    {/* <Link to="/products">Products</Link> */}
                    <NavLink to="/products" className={(activeLink) => activeLink.isActive ? styles.active : ""}
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader;