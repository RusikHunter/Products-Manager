import styles from "./Product.module.scss"

function Product() {
    return (
        <article className={styles.product}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <p className={styles.id}>ID: 123</p>

                    <h6 className={styles.title}>Banana</h6>

                    <p className={styles.count}>Count: 999</p>
                </div>

                <div className={styles.control_panel}>
                    <label htmlFor="checkbox__select__1"></label>
                    <input className={styles.checkbox__select} id="checkbox__select__1" type="checkbox" />

                    <button className={`${styles.button__delete} button__control`}>Delete</button>

                    <button className={`${styles.button__info} button__control`}>Show info</button>
                </div>
            </div>
        </article>
    )
}

export default Product