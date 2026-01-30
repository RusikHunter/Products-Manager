import styles from "./ProductInfoModal.module.scss"

function ProductInfoModal() {
    return (
        <dialog open className={`${styles.dialog} dialog`}>
            <div className={styles.dialog__content}>
                <p className={styles.id}>ID: 123</p>

                <h1 className={styles.title}>Banana</h1>

                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum sint est assumenda porro quos numquam optio deserunt aliquid animi provident excepturi ipsam unde sapiente, alias rem blanditiis. Aliquid, a.</p>

                <p className={styles.count}>999</p>

                <p className={styles.production__date}>30.01.2026</p>

                <p className={styles.price}>19.99$</p>

                <button className={styles.button__change}>Change</button>

                <button className={styles.button__delete}>Delete</button>
            </div>
        </dialog>
    )
}

export default ProductInfoModal