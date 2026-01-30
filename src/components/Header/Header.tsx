import styles from "./Header.module.scss"
import { Link } from "react-router-dom"
import logo from "@/assets/icons/logo.png"
import { Routes } from "@/config/routes"

type NavigationLink = {
    name: string,
    path: string
}

const navLinks: NavigationLink[] = [
    {
        name: "Main",
        path: Routes.MAIN
    },
    {
        name: "Products",
        path: Routes.PRODUCTS
    },
    {
        name: "FAQ",
        path: Routes.FAQ
    },
]

function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.row} row`}>
                    <div className={`${styles.column} ${styles.column__1} column`}>
                        <img className={styles.logo} src={logo} alt="Product Manager" width={1339} height={512} />
                    </div>

                    <div className={`${styles.column} ${styles.column__2} column`}>
                        <nav className={styles.nav}>
                            <ul className={styles.ul}>
                                {navLinks.map(({ name, path }) => (
                                    <li key={name} className={styles.list_item}>
                                        <Link className={styles.link} to={path}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header