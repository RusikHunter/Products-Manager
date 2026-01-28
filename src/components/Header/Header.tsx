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
        <header className="header">
            <div className="header__inner container">
                <div className="header__row row">
                    <div className="header__column header__column--1 column">
                        <img src={logo} alt="Product Manager" width={1339} height={512} />
                    </div>

                    <div className="header__column header__column--2 column">
                        <nav className="header__nav nav">
                            <ul className="header__ul">
                                {navLinks.map(({ name, path }) => (
                                    <Link to={path}>{name}</Link>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header