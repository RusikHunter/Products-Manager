import styles from "./NotFoundContentSection.module.scss"

function NotFoundContentSection() {
    return (
        <section className={`${styles.notfound_content} section`}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.row} row`}>
                    <div className={`${styles.column} column`}>
                        <h1 className={styles.title}>Page Not Found &#58;&#40;</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFoundContentSection