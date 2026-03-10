import styles from "./AddProductModal.module.scss"

function AddProductModal() {
    return (
        <dialog className={styles.dialog} open>
            <p className={styles.title}>Add new product</p>

            <form className={styles.form}>
                <label className={styles.label} htmlFor="addProductModalTitle">Title:</label>
                <input className={`${styles.input} input`} id="addProductModalTitle" type="text" />

                <label className={styles.label} htmlFor="addProductModalDescription">Description:</label>
                <textarea className={`${styles.textarea} textarea`} id="addProductModalDescription"></textarea>

                <label className={styles.label} htmlFor="addProductModalCount">Count:</label>
                <input className={`${styles.input} input`} id="addProductModalCount" type="number" />

                <label className={styles.label} htmlFor="addProductModalPrice">Price:</label>
                <input className={`${styles.input} input`} id="addProductModalPrice" type="number" />

                <button className={`${styles.button__submit} button__control`} type="button">Confirm</button>
            </form>

            <button className={styles.button__close}>X</button>
        </dialog>
    )
}

export default AddProductModal