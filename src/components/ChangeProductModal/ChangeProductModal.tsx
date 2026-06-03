import styles from "./ChangeProductModal.module.scss"

function ChangeProductModal() {
    return (
        <dialog open className={`${styles.dialog} dialog`}>
            <div className={styles.dialog__content}>
                <button className={`${styles.button__close} button__control`}>X</button>

                <p className={styles.id}>ID: 123</p>

                <form className={styles.form}>
                    <label htmlFor="changeModalTitleInput" className={styles.label}>Title: </label>
                    <input type="text" id="changeModalTitleInput" className={`${styles.input} input`} />

                    <label htmlFor="changeModalDescriptionInput" className={styles.label}>Description: </label>
                    <input type="text" id="changeModalDescriptionInput" className={`${styles.input} input`} />

                    <label htmlFor="changeModalCountInput" className={styles.label}>Count: </label>
                    <input type="number" id="changeModalCountInput" className={`${styles.input} input`} />

                    <label htmlFor="changeModalPriceInput" className={styles.label}>Price: </label>
                    <input type="number" id="changeModalPriceInput" className={`${styles.input} input`} />

                    <button className={`${styles.button__save} button__control`}>Save changes</button>
                </form>
            </div>
        </dialog>
    )
}

export default ChangeProductModal