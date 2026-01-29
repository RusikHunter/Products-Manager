import styles from "./Footer.module.scss"

function Footer() {
    return (
        <footer className={`${styles.footer} footer`}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.row} row`}>
                    <div className={`${styles.column} column`}>
                        <p className={styles.title}>Products Manager. Created by dmfshove</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer