import styles from "./MainContentSection.module.scss"
import { Link } from "react-router-dom"
import { Routes } from "@/config/routes"

function MainContentSection() {
    return (
        <section className={`${styles.main_content} section`}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.row} row`}>
                    <div className={`${styles.column} column`}>
                        <h1 className={styles.title}>Products <span className={styles.title__blue}>Manager</span></h1>

                        <Link className={styles.link__products} to={Routes.PRODUCTS}>
                            Show Products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContentSection